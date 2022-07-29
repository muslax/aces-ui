import { createStyles } from "@mantine/core";

export const useStyles = createStyles((theme) => ({
  headerWrap: {
    height: 70,
    paddingTop: 16,
    paddingBottom: 15,
    backgroundColor: theme.white,
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
    position: "fixed",
    zIndex: 99,
    top: 0,
    left: 0,
    right: 0,
  },

  container: {
    maxWidth: 1024,
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: "auto",
    marginRight: "auto",
    "@media (min-width: 768px)": {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },

  headerInner: {
    display: "flex",
    alignItems: "center",
    gap: 15,
  },

  mainWrap: {
    backgroundColor: `${theme.colors.gray[1]}CC`,
    minHeight: "calc(100vh + 150px)",
    paddingTop: 70,
    paddingBottom: 100,
  },

  main: {
    maxWidth: 768,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 30,
  },
}));
