import { calcRedToGreenGradient } from './colors';

export interface Sensors {
  [key: string]: Sensor;
}

export interface Sensor {
  readonly data: SensorData[];
  meta: SensorMeta;
}

export interface SensorMeta {
  display?: boolean;
  itemSuppliedIds?: string[];
  tsData?: TsData;
  readonly name: string;
  readonly sensorId: string;
}

export interface SensorData {
  readonly avg: number;
  readonly min: number;
  readonly max: number;
  readonly std: number;
  readonly timestamp: string;
}

interface TsData {
  [timestamp: string]: { color: string; value: number };
}

export const MinValue = 5;

export const MaxValue = 15;

const data: Sensors = {
  '1': {
    data: [
      {
        timestamp: '2021-04-01T12:15:00.000Z',
        min: 12.472082129999556,
        max: 14.199506639430421,
        avg: 13.860299045485414,
        std: 0.2543638873452866,
      },
      {
        timestamp: '2021-04-01T12:15:01.000Z',
        min: 14.829672221723268,
        max: 14.965745840661775,
        avg: 14.9502744253383,
        std: 0.1990878161871995,
      },
      {
        timestamp: '2021-04-01T12:15:02.000Z',
        min: 5.421124164965201,
        max: 8.696389770038525,
        avg: 5.4557522295070795,
        std: 0.42281416367736313,
      },
      {
        timestamp: '2021-04-01T12:15:03.000Z',
        min: 11.966240893132332,
        max: 14.631420840738224,
        avg: 13.663209329856475,
        std: 0.34958231097559955,
      },
      {
        timestamp: '2021-04-01T12:15:04.000Z',
        min: 5.305979362870659,
        max: 6.798946297821696,
        avg: 5.837992438777084,
        std: 0.2791438071867064,
      },
      {
        timestamp: '2021-04-01T12:15:05.000Z',
        min: 5.57087642750605,
        max: 8.892877220077974,
        avg: 6.417863091500957,
        std: 0.29715946393964,
      },
      {
        timestamp: '2021-04-01T12:15:06.000Z',
        min: 8.410182661262029,
        max: 9.683866357255207,
        avg: 8.847206736220919,
        std: 0.44283959364805203,
      },
      {
        timestamp: '2021-04-01T12:15:07.000Z',
        min: 6.824870835305661,
        max: 11.412547160728067,
        avg: 11.242874144336875,
        std: 0.4874674977512665,
      },
      {
        timestamp: '2021-04-01T12:15:08.000Z',
        min: 12.19170655602166,
        max: 14.080059614282701,
        avg: 13.310136201185411,
        std: 0.2037058072019189,
      },
      {
        timestamp: '2021-04-01T12:15:09.000Z',
        min: 12.0571020780101,
        max: 13.043503973940611,
        avg: 12.859145110070166,
        std: 0.2671192319055239,
      },
      {
        timestamp: '2021-04-01T12:15:10.000Z',
        min: 10.602006723892536,
        max: 13.651794371673594,
        avg: 11.743462403993846,
        std: 0.22833029057281218,
      },
      {
        timestamp: '2021-04-01T12:15:11.000Z',
        min: 5.243101329814987,
        max: 10.284185217896631,
        avg: 7.708785495584348,
        std: 0.21942624663134902,
      },
      {
        timestamp: '2021-04-01T12:15:12.000Z',
        min: 11.03692840737348,
        max: 13.847978418700908,
        avg: 12.155456656974767,
        std: 0.016780248115024765,
      },
      {
        timestamp: '2021-04-01T12:15:13.000Z',
        min: 14.438869491728264,
        max: 14.745512676963225,
        avg: 14.710491196947874,
        std: 0.18733460987004613,
      },
      {
        timestamp: '2021-04-01T12:15:14.000Z',
        min: 14.540571314650299,
        max: 14.711319726840047,
        avg: 14.581067357999752,
        std: 0.4934764279127898,
      },
    ],
    meta: { name: 'Hubble', sensorId: '1' },
  },
  '2': {
    data: [
      {
        timestamp: '2021-04-01T12:15:00.000Z',
        min: 5.096558045612882,
        max: 7.687870904272966,
        avg: 5.8702652804242215,
        std: 0.2335993333342784,
      },
      {
        timestamp: '2021-04-01T12:15:01.000Z',
        min: 11.716445887159752,
        max: 11.92673621407737,
        avg: 11.849649114652358,
        std: 0.1642406523115384,
      },
      {
        timestamp: '2021-04-01T12:15:02.000Z',
        min: 5.786269764065337,
        max: 13.65629286184165,
        avg: 6.219828714966636,
        std: 0.12049203575719936,
      },
      {
        timestamp: '2021-04-01T12:15:03.000Z',
        min: 7.922959893340893,
        max: 14.924821212410073,
        avg: 12.36634563435522,
        std: 0.006563029352904648,
      },
      {
        timestamp: '2021-04-01T12:15:04.000Z',
        min: 13.863102513357752,
        max: 13.968766543048039,
        avg: 13.931651585115414,
        std: 0.38022401636603365,
      },
      {
        timestamp: '2021-04-01T12:15:05.000Z',
        min: 9.160884685051954,
        max: 12.712487863496655,
        avg: 9.258561919147471,
        std: 0.11656157091970909,
      },
      {
        timestamp: '2021-04-01T12:15:06.000Z',
        min: 6.29990353191749,
        max: 14.29038467625917,
        avg: 7.490285505116377,
        std: 0.48230869970294366,
      },
      {
        timestamp: '2021-04-01T12:15:07.000Z',
        min: 5.679439016216639,
        max: 12.64544932823436,
        avg: 10.62290596864206,
        std: 0.3097027885805764,
      },
      {
        timestamp: '2021-04-01T12:15:08.000Z',
        min: 9.324184979928429,
        max: 14.04660671277588,
        avg: 10.80058799777135,
        std: 0.3252984365632787,
      },
      {
        timestamp: '2021-04-01T12:15:09.000Z',
        min: 9.910568647045459,
        max: 14.061225745784018,
        avg: 10.582812318610383,
        std: 0.3127860039428735,
      },
      {
        timestamp: '2021-04-01T12:15:10.000Z',
        min: 9.411418408814198,
        max: 10.071464007169835,
        avg: 10.0107878454462,
        std: 0.4088584871777661,
      },
      {
        timestamp: '2021-04-01T12:15:11.000Z',
        min: 10.172850775093465,
        max: 13.487106826783304,
        avg: 12.680390868013136,
        std: 0.3731119524423666,
      },
      {
        timestamp: '2021-04-01T12:15:12.000Z',
        min: 7.28355558962445,
        max: 11.4198845368701,
        avg: 7.646159630777835,
        std: 0.4902702803484339,
      },
      {
        timestamp: '2021-04-01T12:15:13.000Z',
        min: 12.853648832396464,
        max: 13.410737152065582,
        avg: 13.185439023758464,
        std: 0.20709959791433796,
      },
      {
        timestamp: '2021-04-01T12:15:14.000Z',
        min: 6.389634394662931,
        max: 11.026439797571218,
        avg: 10.801127923095223,
        std: 0.06845702821702049,
      },
    ],
    meta: { name: 'James Webb', sensorId: '2' },
  },
  '3': {
    data: [
      {
        timestamp: '2021-04-01T12:15:00.000Z',
        min: 12.386384520590678,
        max: 14.521421903825184,
        avg: 14.51241140966135,
        std: 0.06755382134240184,
      },
      {
        timestamp: '2021-04-01T12:15:01.000Z',
        min: 7.551576631074979,
        max: 9.84146711056972,
        avg: 9.083237080431587,
        std: 0.43630243719529294,
      },
      {
        timestamp: '2021-04-01T12:15:02.000Z',
        min: 5.633551081328134,
        max: 13.172110489941288,
        avg: 7.374240672255419,
        std: 0.4760458484914404,
      },
      {
        timestamp: '2021-04-01T12:15:03.000Z',
        min: 5.672042190944076,
        max: 12.537653635558677,
        avg: 10.420460150589149,
        std: 0.11863173215471956,
      },
      {
        timestamp: '2021-04-01T12:15:04.000Z',
        min: 8.706500322184436,
        max: 12.715272400502847,
        avg: 11.282827262281423,
        std: 0.23140176802927992,
      },
      {
        timestamp: '2021-04-01T12:15:05.000Z',
        min: 10.464185891289155,
        max: 14.718659351575534,
        avg: 13.278413391805053,
        std: 0.1785367732230838,
      },
      {
        timestamp: '2021-04-01T12:15:06.000Z',
        min: 10.672585233276408,
        max: 10.763633264718658,
        avg: 10.72740858706498,
        std: 0.46928134165008417,
      },
      {
        timestamp: '2021-04-01T12:15:07.000Z',
        min: 12.73995241275291,
        max: 13.766973208870708,
        avg: 12.921314056205755,
        std: 0.05790336541170238,
      },
      {
        timestamp: '2021-04-01T12:15:08.000Z',
        min: 12.774267157473393,
        max: 12.881905390298343,
        avg: 12.817144266064597,
        std: 0.43063990536424257,
      },
      {
        timestamp: '2021-04-01T12:15:09.000Z',
        min: 5.837498516589335,
        max: 12.73604208348755,
        avg: 11.57905646276042,
        std: 0.1260988314735142,
      },
      {
        timestamp: '2021-04-01T12:15:10.000Z',
        min: 8.256683083565829,
        max: 14.018239867664837,
        avg: 10.961344209134996,
        std: 0.48534866303988466,
      },
      {
        timestamp: '2021-04-01T12:15:11.000Z',
        min: 11.337469976539793,
        max: 11.579015400717273,
        avg: 11.354473323884715,
        std: 0.29283741652920814,
      },
      {
        timestamp: '2021-04-01T12:15:12.000Z',
        min: 10.933039263056344,
        max: 14.498687369459928,
        avg: 12.501829432768252,
        std: 0.43407388379003153,
      },
      {
        timestamp: '2021-04-01T12:15:13.000Z',
        min: 8.841686010209632,
        max: 12.037107790495169,
        avg: 11.105969387543434,
        std: 0.35618624275742816,
      },
      {
        timestamp: '2021-04-01T12:15:14.000Z',
        min: 5.044863233906092,
        max: 12.678216254876556,
        avg: 7.150423567127687,
        std: 0.3812909279791231,
      },
    ],
    meta: { name: 'SPHEREx', sensorId: '3' },
  },
};

const sensorIds = Object.keys(data);

const sensorToItemSuppliedId: { [sensorId: string]: string[] } = {
  // '1': ['r/5'],
  // '2': ['r/3', 'r/6'],
  // '3': ['r/9', 'r/10'],
  '1': ['200050'],
  '2': ['200030', '200060'],
  '3': ['200090', '200100'],
};

export function getSensors(): { sensors: Sensors; sensorIds: string[] } {
  function enrich(sensor: Sensor): Sensor {
    const tsd: TsData = {};
    sensor.data.forEach(
      (d) =>
        (tsd[d.timestamp] = {
          color: calcRedToGreenGradient(
            ((d.avg - MinValue) / (MaxValue - MinValue)) * 100,
            true
          ),
          value: d.avg,
        })
    );
    sensor.meta.tsData = tsd;
    sensor.meta.itemSuppliedIds = sensorToItemSuppliedId[sensor.meta.sensorId];

    return sensor;
  }

  const enriched: Sensors = {};
  sensorIds.map((id) => (enriched[id] = enrich(data[id])));
  return { sensors: enriched, sensorIds };
}

export function formatValue(num: number): string {
  return num.toFixed(3);
}
