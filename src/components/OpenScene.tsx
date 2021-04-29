import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import React from "react";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  openSceneDialogOpenState,
  StreamCredentials,
  credentialsState,
} from "../lib/state";

export function OpenButton(): JSX.Element {
  const setOpen = useSetRecoilState(openSceneDialogOpenState);

  return (
    <Button color="primary" onClick={() => setOpen(true)} variant="contained">
      Open Scene
    </Button>
  );
}

export function OpenDialog(): JSX.Element {
  const [open, setOpen] = useRecoilState(openSceneDialogOpenState);
  const [credentials, setCredentials] = useRecoilState(credentialsState);
  const [inputCreds, setInputCreds] = React.useState<StreamCredentials>(
    credentials
  );
  const emptyClientId = inputCreds.clientId === "";
  const invalidClientId = inputCreds.clientId.length > 64;
  const invalidStreamKey = inputCreds.streamKey.length > 36;

  return (
    <Dialog
      aria-labelledby="open-scene-title"
      fullWidth
      maxWidth="md"
      onClick={() => setOpen(false)}
      open={open}
    >
      <DialogTitle id="open-scene-title">Open Scene</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter the client ID and stream key of your scene.
        </DialogContentText>
        <TextField
          autoFocus={emptyClientId}
          error={invalidClientId}
          fullWidth
          helperText={invalidClientId ? "Client ID too long." : undefined}
          label="Client ID"
          margin="dense"
          value={inputCreds.clientId}
          onChange={(e) =>
            setInputCreds({
              ...inputCreds,
              clientId: e.target.value,
            })
          }
        />
        <TextField
          autoFocus={!emptyClientId}
          error={invalidStreamKey}
          fullWidth
          helperText={invalidStreamKey ? "Stream key too long." : undefined}
          label="Stream Key"
          margin="dense"
          value={inputCreds.streamKey}
          onFocus={(e) => e.target.select()}
          onChange={(e) =>
            setInputCreds({
              ...inputCreds,
              streamKey: e.target.value,
            })
          }
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>Cancel</Button>
        <Button
          color="primary"
          onClick={() => {
            if (inputCreds.clientId && inputCreds.streamKey) {
              setOpen(false);
              setCredentials(inputCreds);
            }
          }}
        >
          Open Scene
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export function encodeCreds(cs: StreamCredentials): string {
  return `/?clientId=${encodeURIComponent(
    cs.clientId
  )}&streamKey=${encodeURIComponent(cs.streamKey)}`;
}