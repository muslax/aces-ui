import { createStyles, Menu } from "@mantine/core";
import { useElementSize } from "@mantine/hooks";
import { NextLink } from "@mantine/next";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { LinkProps } from "./Menu";

export default function Mobilenav({ links }: { links: LinkProps[] }) {
  const { classes } = useStyles();
  const { ref, width } = useElementSize();
  const [shadowLinks, setShadowLinks] = useState<LinkProps[]>([]);

  useEffect(() => {
    const rs: LinkProps[] = [];
    let top = 0;
    document.querySelectorAll("#navwrap a").forEach((el, i) => {
      const _top = el.getBoundingClientRect().top;
      if (i == 0) top = _top;
      if (_top > top) rs.push(links[i]);
    });
    setShadowLinks(rs);
    return () => {};
  }, [width, links]);

  return (
    <div ref={ref} id="mobilenav">
      <div className={classes.wrap}>
        <div id="navwrap" className={classes.flex}>
          {links.map((link) => (
            <LinkItem key={link.href} link={link} />
          ))}
        </div>
        <div className={classes.menuwrap}>
          {shadowLinks.length > 0 && (
            <Menu>
              {shadowLinks.map((link) => (
                <Menu.Item
                  key={link.href}
                  component={NextLink}
                  href={link.href}
                  style={{ fontSize: 14.5, fontWeight: 500 }}
                >
                  {link.label}
                </Menu.Item>
              ))}
            </Menu>
          )}
        </div>
      </div>
    </div>
  );
}

function LinkItem({ link }: { link: { href: string; label: string } }) {
  const { pathname } = useRouter();
  const { classes, cx } = useStyles();
  return (
    <Link href={link.href}>
      <a
        className={cx(classes.item, {
          [classes.active]: pathname == link.href,
        })}
      >
        <span>{link.label}</span>
      </a>
    </Link>
  );
}

const useStyles = createStyles((theme) => ({
  wrap: {
    height: 50,
    marginLeft: -12,
    overflow: "hidden",
    display: "flex",
    justifyContent: "space-between",
    position: "relative",
  },

  flex: {
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
  },

  item: {
    display: "block",
    position: "relative",
    padding: "0 12px",
    fontWeight: 500,
    lineHeight: "50px",
    color: theme.colors.gray[8],
    textDecoration: "none",
    cursor: "pointer",

    ":hover": {
      color: theme.colors.violet[5],
    },

    ":before": {
      content: '""',
      display: "block",
      position: "absolute",
      height: 0,
      left: 12,
      right: 12,
      bottom: 0,
    },
  },

  active: {
    color: theme.colors.gray[8],
    ":before": {
      borderBottom: "3px solid #345",
    },
    ":hover": {
      color: theme.colors.gray[8],
    },
  },

  hidden: { display: "none" },

  menuwrap: {
    width: 36,
    flexShrink: 0,
    display: "flex",
    alignItems: "center",
  },
}));
