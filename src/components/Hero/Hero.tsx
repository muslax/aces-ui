import { Button, createStyles } from "@mantine/core";
import { useStyles as layoutStyles } from "components/Layout/Layout.styles";
import Link from "next/link";

export default function Hero({
  type,
  title,
  color,
}: {
  type: string;
  title: string;
  color?: string;
}) {
  const { classes: layout } = layoutStyles();
  const { classes } = useStyles({ color: color });

  return (
    <div id="hero-root" className={classes.root}>
      <div id="layout-container" className={layout.container}>
        <div id="bg-container" className={classes.bgContainer}>
          <div id="bg-wrap" className={classes.bgWrap}>
            <div className={classes.wrap}>
              <div className={classes.hero}>
                <div className={classes.left}>
                  <div className={classes.iconBox}></div>
                  <div>
                    <div className={classes.label}>{type}</div>
                    <div className={classes.title}>{title}</div>
                  </div>
                </div>
                <div className={classes.right}>
                  <Link href="/new">
                    <Button component="a" size="md" color="dark">
                      New Project
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const useStyles = createStyles((theme, { color }: { color?: string }) => ({
  root: {
    // padding: "0 24px",
    backgroundColor: color || theme.colors.gray[1],

    "@media (min-width: 768px)": {
      // padding: "28px 24px",
    },
  },

  bgContainer: {
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: -16,
    marginRight: -16,
    overflow: "hidden",
    "@media (min-width: 768px)": {
      paddingLeft: 24,
      paddingRight: 24,
      marginLeft: -24,
      marginRight: -24,
    },
  },

  bgWrap: {
    margin: "0 -100px",
    padding: "0 100px",
    backgroundImage: 'url("ccchaos.svg")',
    backgroundSize: 600,
    backgroundPositionX: "90%",
    backgroundPositionY: "70%",
    backgroundRepeat: "no-repeat",
  },

  wrap: {
    margin: "0 auto",
    padding: "24px 0",
    "@media (min-width: 768px)": {
      maxWidth: 900,
      padding: "28px 0",
    },
  },

  hero: {
    display: "flex",
    alignItems: "center",
    gap: 15,
    maxWidth: 884,
    marginLeft: "auto",
    marginRight: 0,
    "@media (min-width: 768px)": {
      gap: 20,
      // padding: "0 16px",
    },
  },

  left: {
    display: "flex",
    alignItems: "center",
    flexGrow: 1,
    gap: 15,
    "@media (min-width: 768px)": {
      gap: 20,
    },
  },

  right: {
    //
  },

  iconBox: {
    width: 54,
    height: 54,
    border: `1px solid ${theme.colors.gray[4]}`,
    backgroundColor: "white",
    borderRadius: 5,
    "@media (min-width: 768px)": {
      width: 64,
      height: 64,
      borderRadius: 7,
    },
  },

  label: {
    fontSize: 11,
    fontWeight: 500,
    textTransform: "uppercase",
    "@media (min-width: 768px)": {
      fontSize: 12,
    },
  },

  title: {
    fontSize: 30,
    lineHeight: 0.8,
    fontWeight: 800,
    letterSpacing: -1,
    paddingBottom: 5,
    "@media (min-width: 768px)": {
      fontSize: 36,
    },
  },
}));
