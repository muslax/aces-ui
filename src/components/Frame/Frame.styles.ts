import { createStyles } from "@mantine/core";

export type FrameColor =
  | "gray"
  | "violet"
  | "indigo"
  | "blue"
  | "green"
  | "teal"
  | "red"
  | "orange"
  | "yellow"
  | "pink";

interface FrameStyleProps {
  mt?: number;
  mb?: number;
  rounded?: boolean;
  shadow?: boolean;
  color?: string;
  borderColor?: FrameColor;
  titleColor?: FrameColor;
  altColor?: FrameColor;
  contrast?: number;
}

// Hex values of 1% - 100% of 256
const opacity = ["1A", "33", "4D", "66", "80", "9A", "B3", "CD", "E6", "FF"];

export const frameStyles = createStyles((theme, props: FrameStyleProps) => {
  const borderColor = theme.colors[props.borderColor || "gray"][7];
  const contrast = props.contrast === 0 ? 0 : props.contrast || 4;
  const border = `1px solid ${borderColor}${opacity[contrast]}`;
  const altColor: string = props.altColor
    ? `${theme.colors[props.altColor][1]}${opacity[3]}`
    : "";

  return {
    root: {
      marginTop: props.mt || 0,
      marginBottom: props.mb || 0,
      position: "relative",
      borderRadius: props.rounded ? 7 : 0,
      boxShadow: props.shadow
        ? props.rounded
          ? `4px 4px 2px ${theme.colors.gray[2]}`
          : `4px 4px 0px ${theme.colors.gray[2]}`
        : "none",
    },

    wrap: {
      zIndex: 1,
      height: "100%",
      overflow: "hidden",
      borderRadius: props.rounded ? 4 : 0,
      backgroundColor: theme.white,
      border: border,
      // backgroundImage: theme.fn.linearGradient(
      //   133,
      //   theme.colors.pink[0],
      //   theme.colors.yellow[0],
      //   "white"
      // ),
    },

    headerWrap: {
      padding: "10px 15px",
      borderBottom: border,
      backgroundColor: altColor,
    },

    header: {
      display: "flex",
      alignItems: "center",
      gap: 8,
    },

    title: {
      flexGrow: 1,
      fontSize: 16,
      color: props.titleColor
        ? theme.colors[props.titleColor][9]
        : theme.colors.gray,
      lineHeight: 1.5,
      fontWeight: 700,
    },

    toggleButton: {
      fontSize: 12,
      fontWeight: 500,
      color: theme.colors.dark[5],
      borderRadius: 0,
      backgroundColor: theme.colors.gray[2],
      ":hover": {
        backgroundColor: theme.colors.gray[3],
      },
    },

    description: {
      fontSize: 13,
      lineHeight: 1.2,
      marginTop: 2,
      // marginBottom: 2,
      color: theme.colors.gray[7],
      // background: theme.colors.yellow[4],
    },

    body: {
      padding: "15px",
      fontSize: 14,
      backgroundColor: props.color || theme.white,
    },

    footer: {
      padding: "10px 15px",
      borderTop: border,
    },
  };
});

export const useStyles = createStyles((theme, props: FrameStyleProps) => ({
  root: {
    marginTop: props.mt || 0,
    marginBottom: props.mb || 0,
    position: "relative",
    borderRadius: props.rounded ? 7 : 0,
    backgroundColor: theme.colors.green[5],
    boxShadow: props.shadow
      ? props.rounded
        ? `4px 4px 2px ${theme.colors.gray[2]}`
        : `4px 4px 0px ${theme.colors.gray[2]}`
      : "none",
  },

  wrap: {
    zIndex: 1,
    height: "100%",
    overflow: "hidden",
    borderRadius: props.rounded ? 4 : 0,
    // backgroundColor: props.color || theme.colors.green,
    // backgroundColor: theme.colors.green[5],
    border: `1px solid ${theme.colors.violet[7]}${
      opacity[props.contrast === 0 ? 0 : props.contrast || 4]
    }`,
    backgroundImage: theme.fn.linearGradient(
      133,
      theme.colors.pink[1],
      theme.colors.violet[0],
      "white"
    ),
  },

  headerWrap: {
    padding: "10px 15px",
    borderBottom: `1px solid ${theme.colors.gray[5]}`,
    backgroundColor: props.altColor || theme.colors.gray[0],
  },

  header: {
    display: "flex",
    alignItems: "center",
    gap: 8,
  },

  title: {
    flexGrow: 1,
    fontSize: 16,
    color: theme.colors.gray[8],
    lineHeight: 1.5,
    fontWeight: 700,
  },

  toggleButton: {
    fontSize: 12,
    fontWeight: 500,
    color: theme.colors.dark[5],
    borderRadius: 0,
    backgroundColor: theme.colors.gray[2],
    ":hover": {
      backgroundColor: theme.colors.gray[3],
    },
  },

  description: {
    fontSize: 13,
    lineHeight: 1.2,
    marginTop: 2,
    // marginBottom: 2,
    color: theme.colors.gray[7],
    // background: theme.colors.yellow[4],
  },

  body: {
    padding: "15px",
    fontSize: 14,
    // background: theme.colors.yellow[0],
    // backgroundImage: theme.fn.radialGradient(
    //   "blue",
    //   "red",
    //   "orange",
    //   "cyan",
    //   "white"
    // ),
  },

  footer: {
    padding: "10px 15px",
    borderTop: `1px solid ${theme.colors.gray[5]}`,
  },
}));
