import Layout, { PageSpec } from "components/Layout/Layout";
import { useMantineTheme } from "@mantine/core";
import TextFiller from "components/Filler/TextFiller";
import { AcesMenu } from "components/Menu/Menu";
import Frame from "components/Frame/Frame";
import { useState } from "react";

const pageSpec: PageSpec = {
  menu: AcesMenu,
  type: "Aces",
  title: "Billing",
};

export default function Index() {
  const theme = useMantineTheme();
  const [level, setLevel] = useState(4);

  return (
    <Layout spec={pageSpec}>
      <Frame
        shadow
        mb={20}
        contrast={level}
        color={theme.colors.orange[0]}
        altColor="gray"
        borderColor="gray"
        titleColor="gray"
        title="Frame with title"
        description="Mendulang gajah di semak belukar"
      >
        <div onClick={() => setLevel(level == 4 ? 7 : 4)}>
          This FRAME problem is occurred when you have tried to rehydrate you
          react app. Generated react app rehydrate with generated markup at that
          time it show empty space between jsx tags.
        </div>
      </Frame>

      <TextFiller />
    </Layout>
  );
}
