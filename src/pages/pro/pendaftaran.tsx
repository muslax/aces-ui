import Layout, { PageSpec } from "components/Layout/Layout";
import { RecruitmentMenu } from "components/Menu/Menu";

const pageSpec: PageSpec = {
  menu: RecruitmentMenu,
  type: "Recruitment",
  title: "Pendaftaran",
};

export default function Index() {
  return (
    <Layout spec={pageSpec}>
      {/* <ActionFrameTest compact={false} /> */}
      KSLS
    </Layout>
  );
}
