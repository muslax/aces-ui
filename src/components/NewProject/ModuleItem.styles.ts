import { createStyles } from "@mantine/core";

interface Props {
  textWidth?: number;
  optional?: boolean;
  disabled?: boolean;
  selected?: boolean;
}

export const useStyles = createStyles((theme, props: Props) => ({
  root: {
    cursor: "pointer",
    backgroundColor: props.selected ? theme.colors.violet[0] : "",
    borderTop:
      props.optional && props.selected
        ? `1px solid ${theme.colors.violet[2]}`
        : `1px solid ${theme.colors.gray[3]}`,
    // border: props.optional
    //   ? props.selected
    //     ? `1px solid ${theme.colors.violet[3]}`
    //     : `1px solid ${theme.colors.gray[4]}`
    //   : `1px solid ${theme.colors.gray[5]}`,
    padding: `8px 12px`,
    display: "flex",
    alignItems: "start",
    gap: 16,
    "&:hover": {
      // border: props.optional
      //   ? props.selected
      //     ? `1px solid ${theme.colors.violet[3]}`
      //     : `1px solid ${theme.colors.violet[3]}`
      //   : `1px solid ${theme.colors.gray[5]}`,
    },
  },

  obligatory: {
    cursor: "default",
    // border: `1px solid ${theme.colors.gray[5]}`,
  },

  disabled: {
    cursor: "not-allowed",
    // border: `1px solid ${theme.colors.gray[4]}`,
    // backgroundColor: theme.colors.gray[0],
  },

  label: {
    fontWeight: 600,
    marginTop: -3,
    color: props.disabled ? theme.colors.gray[6] : "",
  },

  description: {
    fontSize: 13,
    maxWidth: props.textWidth || 600,
    color: props.disabled ? theme.colors.gray[6] : "",
  },
}));
