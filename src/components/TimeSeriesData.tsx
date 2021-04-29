import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { useRecoilState } from "recoil";
import { timestampState } from "../lib/state";
import { formatValue, Sensor } from "../lib/time-series";

interface Props {
  readonly sensor: Sensor;
}

const useStyles = makeStyles((theme) => ({
  table: {
    // To accommodate scrollbar
    marginBottom: theme.spacing(1),
  },
}));

export function TimeSeriesData({ sensor }: Props): JSX.Element {
  const { table } = useStyles();
  const [ts, setTs] = useRecoilState(timestampState);

  return (
    <TableContainer>
      <Table className={table} padding="checkbox" size="small">
        <TableHead>
          <TableRow>
            <TableCell>Timestamp</TableCell>
            <TableCell align="right">Minimum</TableCell>
            <TableCell align="right">Maximum</TableCell>
            <TableCell align="right">Average</TableCell>
            <TableCell align="right">Standard Deviation</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sensor.data.map((v, i) => {
            const tsEq = v.timestamp === ts;
            return (
              <TableRow
                key={i}
                onClick={() => setTs(v.timestamp)}
                selected={tsEq}
              >
                <TableCell>{v.timestamp}</TableCell>
                <TableCell align="right">{formatValue(v.min)}</TableCell>
                <TableCell align="right">{formatValue(v.max)}</TableCell>
                <TableCell align="right">{formatValue(v.avg)}</TableCell>
                <TableCell align="right">{formatValue(v.std)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}