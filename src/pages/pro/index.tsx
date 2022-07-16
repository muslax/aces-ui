import ActionFrameTest from 'components/Frame/ActionFrameTest';
import { Text, Title } from '@mantine/core';
import Block from 'components/Block/Block';
import { RecruitmentMenu } from 'components/Menu/Menu';
import Layout, { PageSpec } from 'components/Layout/Layout';

const pageSpec: PageSpec = {
  menu: RecruitmentMenu,
  type: 'Recruitment',
  title: 'Overview',
};

export default function Index() {
  return (
    <Layout spec={pageSpec}>
      <Title order={3} mb={10}>
        Halaman tekstual
      </Title>

      <div
        style={{
          marginTop: 20,
          marginBottom: 20,
          display: 'flex',
          gap: 20,
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        }}
      >
        <Block title="Block 2" shadow>
          Generated react app rehydrate with generated markup at that time it show empty space
          between jsx tags.
        </Block>
        <Block title="Block 3" shadow>
          This problem is occurred when you have tried to rehydrate you react app. Generated react
          app rehydrate with generated markup at that time it show empty space between jsx tags.
        </Block>
      </div>

      <Text mb={15}>
        Thank you! I wasted 2 days with this problem, and none of the solutions were good.
      </Text>
      <Text mb={25}>
        This problem is occurred when you have tried to rehydrate you react app. Generated react app
        rehydrate with generated markup at that time it show empty space between jsx tags.
      </Text>
      <ActionFrameTest compact={false} />
    </Layout>
  );
}
