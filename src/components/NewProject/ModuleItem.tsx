import { Dispatch } from "react";
import { Checkbox, Text } from "@mantine/core";
import { AcesModule } from "lib/aces-modules";
import { useStyles } from "./ModuleItem.styles";

export interface ModuleItemProps {
  data: AcesModule;
  textWidth?: number;
  modules: AcesModule[];
  setModules: Dispatch<AcesModule[]>;
}

export default function ModuleItem(props: ModuleItemProps) {
  const disabled =
    props.modules.find((o) => o.id == props.data.conflictWith) !== undefined;
  const { classes, cx } = useStyles({
    textWidth: props.textWidth,
    optional: props.data.optional,
    disabled: disabled,
    selected: props.data.optional && props.modules?.includes(props.data),
  });

  const rootClass = props.data.optional
    ? disabled
      ? cx(classes.root, classes.disabled)
      : classes.root
    : cx(classes.root, classes.obligatory);

  const handleClick = () => {
    if (disabled) return;
    if (props.data.optional) {
      if (props.modules?.includes(props.data)) {
        props.setModules(props.modules.filter((m) => m != props.data));
      } else {
        props.setModules([...props.modules, props.data]);
      }
    }
  };

  return (
    <div className={rootClass} onClick={() => handleClick()}>
      {props.data.optional === false && (
        <Checkbox color="dark" checked onChange={() => {}} />
      )}
      {props.data.optional && (
        <Checkbox
          color="violet"
          checked={props.modules?.includes(props.data)}
          onChange={() => handleClick()}
        />
      )}
      <div style={{ flexGrow: 1 }}>
        <div className={classes.label}>
          {props.data.name} {}
        </div>
        <Text className={classes.description}>{props.data.description}</Text>
      </div>
    </div>
  );
}
