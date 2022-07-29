import { ReactNode } from "react";
import { createStyles } from "@mantine/core";

interface GroupHeaderProps {
  title: string;
  description?: ReactNode;
}
export default function GroupHeader(props: GroupHeaderProps) {
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
    fontSize: 13,
    fontWeight: 700,
    lineHeight: 1,
    color: theme.colors.violet[7],
  },

  description: {
    fontSize: 13,
    color: theme.colors.gray[7],
  },
}));
