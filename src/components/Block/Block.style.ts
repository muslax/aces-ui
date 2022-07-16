import { createStyles } from "@mantine/core";
export const styles = createStyles(
  (
    theme,
    {
      mt,
      mb,
      rounded,
      shadow,
    }: { mt?: number; mb?: number; rounded?: boolean; shadow?: boolean }
  ) => ({
    root: {
      marginTop: mt || 0,
      marginBottom: mb || 0,
      position: "relative",
      borderRadius: rounded ? 7 : 0,
      boxShadow: shadow
        ? rounded
          ? `4px 4px 2px ${theme.colors.gray[2]}`
          : `4px 4px 0px ${theme.colors.gray[2]}`
        : "none",
    },

    wrap: {
      zIndex: 1,
      height: "100%",
      overflow: "hidden",
      borderRadius: rounded ? 4 : 0,
      backgroundColor: theme.white,
      border: `1px solid ${theme.colors.gray[5]}`,
    },

    headerWrap: {
      padding: "10px 15px",
      borderBottom: `1px solid ${theme.colors.gray[5]}`,
      background: theme.colors.gray[0],
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
      padding: "15px 15px",
      fontSize: 14,
      // background: theme.colors.yellow[0],
    },

    footer: {
      padding: "10px 15px",
      borderTop: `1px solid ${theme.colors.gray[5]}`,
    },
  })
);
