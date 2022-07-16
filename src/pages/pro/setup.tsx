import { useElementSize } from '@mantine/hooks';
import ActionFrameTest from 'components/Frame/ActionFrameTest';
import PTabs from 'components/Tabs/PTabs';
import { Tabs } from '@mantine/core';
import { RecruitmentMenu } from 'components/Menu/Menu';
import Layout, { PageSpec } from 'components/Layout/Layout';

const pageSpec: PageSpec = {
  menu: RecruitmentMenu,
  type: 'Recruitment',
  title: 'Setup',
};

export default function Index() {
  const { ref, width } = useElementSize();
  return (
    <Layout spec={pageSpec}>
      <div ref={ref}>
        <PTabs>
          <Tabs.Tab label="Setting">
            <ActionFrameTest compact={width > 0 && width < 500} />
          </Tabs.Tab>
          <Tabs.Tab label="Monitoring">
            <ActionFrameTest compact={false} />
          </Tabs.Tab>
          <Tabs.Tab label="Email">
            <ActionFrameTest compact={false} />
          </Tabs.Tab>
          <Tabs.Tab label="Screening">
            <ActionFrameTest compact={false} />
          </Tabs.Tab>
        </PTabs>
      </div>
    </Layout>
  );
}
