import { Dispatch, useState } from "react";
import { Button, createStyles, TextInput } from "@mantine/core";
import { useStyles } from "./CreateProject.styles";

interface DevHeaderProps {
  disabled: boolean;
  setModel: Dispatch<any>;
}

const baseUrl =
  "https://gist.githubusercontent.com/muslax/63a8178df7d2dd0ca9cbc00f4ed9cf09/raw/55a8e7bc60bebc175f07a4b47a65a31eb4adb0c9/aces-products.json";

export default function DevHeader(props: DevHeaderProps) {
  // dev
  const [url, setUrl] = useState(baseUrl);
  const { classes } = useStyles();

  function loadModel() {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        props.setModel(json);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {});
  }

  return (
    <div className={classes.headerWrap}>
      <div className={classes.container}>
        <div className={classes.headerInner}>
          <TextInput
            style={{ flexGrow: 1 }}
            value={url}
            onChange={(e) => setUrl(e.currentTarget.value)}
          />
          <Button
            disabled={props.disabled}
            color="dark"
            onClick={() => loadModel()}
          >
            Load
          </Button>
        </div>
      </div>
    </div>
  );
}
