import { useWindowScroll } from "@mantine/hooks";
import Header from "components/Header/Header";
import Hero from "components/Hero/Hero";
import { LinkProps } from "components/Menu/Menu";
import Mobilenav from "components/Menu/Mobilenav";
import Sidebar from "components/Menu/Sidebar";
import { ReactNode } from "react";
import { useStyles } from "./Layout.styles";

export interface PageSpec {
  type: string;
  title: string;
  heroColor?: string;
  menu: LinkProps[];
}

export default function Layout({
  spec,
  children,
}: {
  spec: PageSpec;
  children: ReactNode;
}) {
  const [scroll, scrollTo] = useWindowScroll();
  const { classes, cx } = useStyles();
  const headerClasses = cx(classes.headerWrap, {
    [classes.headerScrolled]: scroll.y >= 120,
  });
  const heroClasses = cx(classes.heroWrap, {
    [classes.heroScrolled]: scroll.y > 70,
  });
  const navClasses = cx(classes.nav, {
    [classes.navFixed]: scroll.y > 70,
    [classes.navScrolled]: scroll.y >= 163,
  });

  return (
    <>
      <div className={headerClasses}>
        <Header />
      </div>

      <div id="layout-mobile-nav" className={navClasses}>
        <Mobilenav links={spec.menu} />
      </div>

      <div id="layout-hero" className={heroClasses}>
        <Hero type={spec.type} title={spec.title} color={spec.heroColor} />
      </div>

      <div id="layout-container" className={classes.container}>
        <div id="layout-wrapper" className={classes.wrapper}>
          <div id="layout-page-wrap" className={classes.pageWrap}>
            <div id="sidebar" className={classes.sidebar}>
              <div style={{ backgroundColor: "white" }}>
                <Sidebar links={spec.menu} />
              </div>
            </div>
            <div id="mainwrap" className={classes.mainWrap}>
              <div style={{ height: 1000 }}>{children}</div>
            </div>
          </div>
          <div
            onClick={() => {
              scrollTo({ x: 0, y: 0 });
            }}
            className={cx(classes.gotoTop, {
              [classes.gotoTopVisible]: scroll.y > 200,
            })}
          >
            TOP
          </div>
        </div>
      </div>
    </>
  );
}
