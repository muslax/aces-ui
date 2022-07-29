import { createStyles, TypographyStylesProvider } from "@mantine/core";
import { IProduct } from "lib/models";
import { CircleCheck } from "tabler-icons-react";

export default function PackageCard({
  product,
  selected,
  onClick,
}: {
  product: IProduct;
  selected?: boolean;
  onClick: () => void;
}) {
  const { classes, cx } = styles();
  return (
    <div className={classes.root} onClick={onClick}>
      <div className={classes.wrap}>
        <div className={classes.header}>{product.title}</div>
        <div className={classes.hero}>
          <CircleCheck size={72} className={cx(classes.check)} />
        </div>
        <div className={classes.descriptionWrap}>
          <TypographyStylesProvider>
            <div
              className={classes.description}
              dangerouslySetInnerHTML={{ __html: product.description }}
            />
          </TypographyStylesProvider>
        </div>
        <div className={classes.footer}>Pilih paket ini &rarr;</div>
      </div>
    </div>
  );
}

const styles = createStyles((theme, _params, getRef) => ({
  root: {
    width: 280,
    // minWidth: 225,
    borderRadius: 5,
    overflow: "hidden",
    backgroundColor: theme.white,
    boxShadow: `#2222221A 0px 1.6px 3.6px 0px, #3333331A 0px 0.3px 0.9px 0px`,
  },

  wrap: {
    height: 345,
    position: "relative",
    cursor: "pointer",
    ":hover": {
      [`& .${getRef("check")}`]: {
        stroke: theme.colors.green[4],
      },
      [`& .${getRef("footer")}`]: {
        backgroundColor: theme.colors.gray[0],
      },
    },
  },

  header: {
    // fontSize: 13.25,
    fontWeight: 600,
    padding: `10px 18px`,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    borderBottom: `1px solid ${theme.colors.gray[3]}`,
  },

  hero: {
    padding: 30,
    textAlign: "center",
  },

  check: {
    ref: getRef("check"),
    stroke: theme.colors.gray[3],
  },

  selected: {
    stroke: theme.colors.gray[7],
  },

  descriptionWrap: {
    padding: `0px 18px`,
    paddingBottom: 53,
    position: "relative",
    whiteSpace: "normal",
    overflow: "hidden",
  },

  description: {
    fontSize: 13,
    height: 100,
    position: "relative",
    color: theme.colors.gray[7],
    maxLines: 5,
    display: " -webkit-box !important",
    WebkitLineClamp: 5,
    WebkitBoxOrient: "vertical",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "normal",
  },

  footer: {
    ref: getRef("footer"),
    position: "absolute",
    left: 0,
    bottom: 0,
    right: 0,
    color: theme.colors.indigo[6],
    padding: `15px 18px`,
    ":hover": {
      backgroundColor: theme.colors.gray[0],
    },
  },
}));

/*
Maks 4 baris Pengukuran kompetensi yang memenuhi kaidah-kaidah Assessment Center. Terdiri dari dua modul utama plus dua hingga lima pilihan.
*/
