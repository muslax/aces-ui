import { ReactNode } from "react";
import { createStyles } from "@mantine/core";

interface Props {
  title: string;
  description?: ReactNode;
}
export default function ModulesGroupHeader(props: Props) {
  const { classes } = styles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>{props.title}</div>
      <div className={classes.description}>{props.description}</div>
    </div>
  );
}

const styles = createStyles((theme) => ({
  root: {
    // margin: "20px 0 10px",
  },

  title: {
    fontWeight: 500,
    lineHeight: 1,
  },

  description: {
    fontSize: 13,
    color: theme.colors.gray[7],
  },
}));
