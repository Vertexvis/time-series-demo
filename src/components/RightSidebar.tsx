import cn from 'classnames';
import React, { useState } from 'react';
import { Properties } from '../lib/metadata';
import {
  Asset,
  FaultCode,
  formatValue,
  SensorMeta,
  SensorsToItemSuppliedIds,
} from '../lib/time-series';
import { Collapsible } from './Collapsible';
import { Icon } from './Icon';
import { MetadataProperties } from './MetadataProperties';
import { Panel } from './Panel';

interface Props {
  readonly assets: {
    readonly list: string[];
    readonly onSelect: (asset: Asset) => Promise<void>;
    readonly selected: string;
  };
  readonly faults: {
    readonly list: FaultCode[];
    readonly onSelect: (timestamp: string) => Promise<void>;
    readonly selected?: string;
  };
  readonly properties: Properties;
  readonly selectedTs: string;
  readonly sensors: {
    readonly displayed: Set<string>;
    readonly list: SensorMeta[];
    readonly mapping?: SensorsToItemSuppliedIds;
    readonly onCheck: (id: string, checked: boolean) => Promise<void>;
    readonly onMappingChange: (
      mapping: SensorsToItemSuppliedIds
    ) => Promise<void>;
    readonly onSelect: (id: string) => Promise<void>;
    readonly selected: string;
  };
}

export function RightSidebar({
  assets,
  faults,
  properties,
  selectedTs,
  sensors,
}: Props): JSX.Element {
  const [mapping, setMapping] = useState(
    JSON.stringify(sensors.mapping, null, 2)
  );

  return (
    <Panel position="right" overlay={false}>
      <div className="w-full pr-2 border-b text-gray-700 text-sm">
        <Collapsible title="SENSORS">
          {sensors.list.length > 0 ? (
            <table className="text-left mb-4 w-full table-fixed">
              <thead>
                <tr>
                  <th className="w-1/6"></th>
                  <th className="w-2/6">Value</th>
                  <th className="w-3/6">Name</th>
                </tr>
              </thead>
              <tbody>
                {sensors.list.map((s) => {
                  const isSelected = s.id === sensors.selected;
                  const tsd = s.tsData[selectedTs] ?? {
                    color: '#fff',
                    value: 0,
                  };
                  return (
                    <tr
                      key={s.id}
                      className={cn('hover:bg-gray-300', {
                        ['bg-blue-300']: isSelected,
                      })}
                      onClick={() => sensors.onSelect(s.id)}
                    >
                      <td>
                        <input
                          className="rounded-sm ml-4 mb-1"
                          type="checkbox"
                          checked={sensors.displayed.has(s.id)}
                          onClick={(e) => e.stopPropagation()}
                          onChange={(e) =>
                            sensors.onCheck(s.id, e.target.checked)
                          }
                        />
                      </td>
                      <td className="flex items-center">
                        <div
                          className="rounded-sm mt-0.5 mr-2 h-4 w-4"
                          style={{ backgroundColor: tsd.color }}
                        ></div>
                        {formatValue(tsd.value)}
                      </td>
                      <td>{s.id}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p className="my-4 text-center">No data</p>
          )}
        </Collapsible>
        <Collapsible title="ASSETS">
          {assets.list.length > 0 ? (
            <table className="text-left mb-4 w-full table-auto">
              <tbody>
                {assets.list.map((a) => {
                  const isSelected = a === assets.selected;
                  return (
                    <tr
                      key={a}
                      className={cn('hover:bg-gray-300', {
                        ['bg-blue-300']: isSelected,
                      })}
                      onClick={() => assets.onSelect(a as Asset)}
                    >
                      <td>{a}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p className="my-4 text-center">No data</p>
          )}
        </Collapsible>
        <Collapsible title="FAULT CODES">
          {faults.list.length > 0 ? (
            <table className="text-left mb-4 w-full table-fixed">
              <thead>
                <tr>
                  <th className="w-1/6"></th>
                  <th className="w-3/6">Fault</th>
                  <th className="w-2/6">Timestamp</th>
                </tr>
              </thead>
              <tbody>
                {faults.list.map((f) => {
                  const isSelected = f.timestamp === faults.selected;
                  return (
                    <tr
                      key={f.id}
                      className={cn('hover:bg-gray-300', {
                        ['bg-blue-300']: isSelected,
                      })}
                      onClick={() => faults.onSelect(f.timestamp)}
                    >
                      <td>
                        <div className="w-5 ml-4">
                          <Icon icon={f.severity} />
                        </div>
                      </td>
                      <td>{f.title}</td>
                      <td>{f.timestamp.substring(11, 19)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <p className="my-4 text-center">No data</p>
          )}
        </Collapsible>
        <Collapsible title="METADATA PROPERTIES">
          <MetadataProperties properties={properties} />
        </Collapsible>
        <Collapsible title="SENSOR MAPPING">
          <textarea
            className="w-full h-80 resize-none border-transparent focus:border-transparent focus:ring-transparent"
            value={mapping}
            onChange={(e) => setMapping(e.target.value)}
          />
          <button
            className="btn btn-secondary text-sm"
            onClick={() => {
              try {
                const upd: SensorsToItemSuppliedIds = JSON.parse(mapping);
                sensors.onMappingChange(upd);
              } catch (error) {
                // ignore
              }
            }}
          >
            Load
          </button>
        </Collapsible>
      </div>
    </Panel>
  );
}
