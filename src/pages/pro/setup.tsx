import { useElementSize } from "@mantine/hooks";
import PTabs from "components/Tabs/PTabs";
import { Tabs } from "@mantine/core";
import { RecruitmentMenu } from "components/Menu/Menu";
import Layout, { PageSpec } from "components/Layout/Layout";

const pageSpec: PageSpec = {
  menu: RecruitmentMenu,
  type: "Recruitment",
  title: "Setup",
};

export default function Index() {
  const { ref, width } = useElementSize();
  return (
    <Layout spec={pageSpec}>
      <div ref={ref}>
        <PTabs>
          <Tabs.Tab label="Setting">
            {/* <ActionFrameTest compact={width > 0 && width < 500} /> */}
            222
          </Tabs.Tab>
          <Tabs.Tab label="Monitoring">
            {/* <ActionFrameTest compact={false} /> */}
            SSS
          </Tabs.Tab>
          <Tabs.Tab label="Email">
            {/* <ActionFrameTest compact={false} /> */}
            AAA
          </Tabs.Tab>
          <Tabs.Tab label="Screening">
            {/* <ActionFrameTest compact={false} /> */}
            WWW
          </Tabs.Tab>
        </PTabs>
      </div>
    </Layout>
  );
}
