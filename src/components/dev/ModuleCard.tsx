import { Checkbox, createStyles } from "@mantine/core";
import { IModule } from "../../lib/models";

interface ModuleCardProps {
  module: IModule;
  required?: boolean;
  selected?: boolean;
  disabled?: boolean;
  onClick?: (module: IModule) => void;
}

export default function ModuleCard(props: ModuleCardProps) {
  const { classes, cx } = styles({
    required: props.required,
    selected: props.selected,
    disabled: props.disabled,
  });
  return (
    <div className={classes.root}>
      <div className={classes.wrap}>
        <Checkbox
          size="xs"
          color={props.required ? "" : "green"}
          classNames={{ label: classes.label }}
          label={props.module.name}
          checked={props.required || props.selected}
          onChange={(e) => {
            if (props.onClick) props.onClick(props.module);
          }}
        />
        <div className={classes.description}>{props.module.description}</div>
      </div>
    </div>
  );
}

const styles = createStyles(
  (
    theme,
    {
      required,
      selected,
      disabled,
    }: { required?: boolean; selected?: boolean; disabled?: boolean }
  ) => ({
    root: {
      // maxWidth: 600,
      borderRadius: 5,
      overflow: "hidden",
      backgroundColor: theme.white,
      boxShadow: `#2222221A 0px 1.6px 3.6px 0px, #3333331A 0px 0.3px 0.9px 0px`,
    },

    wrap: {
      padding: "10px 15px",
    },

    label: {
      fontSize: 13.5,
      fontWeight: 600,
      cursor: required || disabled ? "default" : "pointer",
      color: disabled
        ? theme.colors.gray[6]
        : selected
        ? theme.colors.green[8]
        : "",
      ":hover": {
        color: disabled
          ? theme.colors.gray[6]
          : selected
          ? theme.colors.green[7]
          : required
          ? ""
          : theme.colors.green[7],
      },
    },

    description: {
      marginTop: 4,
      marginLeft: 30,
      fontSize: 12.5,
      lineHeight: 1.4,
      color: disabled ? theme.colors.gray[6] : theme.colors.gray[7],
    },
  })
);
