import { createStyles } from "@mantine/core";
export const useStyles = createStyles(
  (
    theme,
    { selected, collapse }: { selected?: boolean; collapse?: boolean }
  ) => ({
    root: {
      // marginTop: 70,
      paddingTop: 30,
      paddingBottom: 130,
      minHeight: "calc(100vh + 0px)",
      backgroundColor: theme.colors.gray[1],
      backgroundImage: theme.fn.linearGradient(
        180,
        theme.colors.gray[1],
        theme.colors.gray[1],
        "white"
      ),
      "@media (min-width: 768px)": {
        marginTop: 70,
      },
    },

    wrap: {
      maxWidth: 768,
      marginLeft: "auto",
      marginRight: "auto",
    },

    confirmBox: {
      // padding: 15,
      // border: `1px solid ${theme.colors.gray[3]}`,
      // borderRadius: 7,
      display: "flex",
      gap: 15,
      alignItems: "center",
    },

    confirmLeft: {
      flexGrow: 1,
    },

    // ProjectItem

    projectItem: {
      position: "relative",
      overflow: "hidden",
      cursor: "pointer",
      borderWidth: 1,
      borderStyle: "solid",
      borderColor: selected ? theme.colors.violet[4] : theme.colors.gray[4],
      // outline: !selected ? "" : `3px solid white`,
      backgroundColor: selected ? theme.colors.violet[0] : theme.white,
      borderRadius: 5,
      display: "flex",
      ":hover": {
        // outline: `3px solid #ffffff9a`,
        borderColor: selected ? theme.colors.violet[5] : theme.colors.gray[5],
      },
    },

    itemLeft: {
      padding: "15px 20px 20px",
      // width: collapse ? "100%" : "85%",
    },

    itemRight: {
      width: "35%",
      borderLeft: "1px solid #ddd",
      display: collapse ? "none" : "block",
    },

    stepTitle: {
      marginTop: 24,
      color: theme.colors.violet[6],
    },
  })
);
