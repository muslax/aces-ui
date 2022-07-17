import { useForm } from "@mantine/form";
import Layout, { PageSpec } from "components/Layout/Layout";
import { Text, useMantineTheme } from "@mantine/core";
import TextFiller from "components/Filler/TextFiller";
import Block from "components/Block/Block";
import { AcesMenu } from "components/Menu/Menu";
import Frame from "components/Frame/Frame";
import { useState } from "react";

const pageSpec: PageSpec = {
  menu: AcesMenu,
  type: "Aces",
  title: "Home",
};

export default function Index() {
  const theme = useMantineTheme();
  const form = useForm({
    initialValues: {
      nama: "Joko",
      alamat: "",
    },
  });

  const [level, setLevel] = useState(4);

  return (
    <Layout spec={pageSpec}>
      <TextFiller s="xs" />
      <TextFiller s="sm" />
      <TextFiller s="md" />
      <TextFiller s="lg" />

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
      <Frame shadow mb={20} contrast={level} borderColor="blue">
        <div onClick={() => setLevel(level == 4 ? 7 : 4)}>
          This FRAME problem is occurred when you have tried to rehydrate you
          react app. Generated react app rehydrate with generated markup at that
          time it show empty space between jsx tags.
        </div>
      </Frame>

      <Frame
        shadow
        mb={20}
        borderColor="pink"
        titleColor="pink"
        altColor="pink"
        title="Ludricus Theae"
        description="This problem is occurred when you are tired"
      >
        <div>
          Generated react app rehydrate with generated markup at that time it
          show empty space between jsx tags.
        </div>
      </Frame>
      <Frame
        shadow
        mb={20}
        borderColor="orange"
        altColor="yellow"
        title="Form of Ludricus Theae"
        description="This problem is occurred when you are tired"
        rounded
        form={useForm({
          initialValues: {
            nama: "Jamal",
            alamat: "Jakal",
            tanggal: "",
          },
        })}
        editable
      >
        <div>
          Generated react app rehydrate with generated markup at that time it
          show empty space between jsx tags.
        </div>
      </Frame>

      <Block mb={15} rounded shadow>
        This problem is occurred when you have tried to rehydrate you react app.
        Generated react app rehydrate with generated markup at that time it show
        empty space between jsx tags.
      </Block>
      <Block
        mb={15}
        title="Block with title"
        description="This problem is occurred when you have tried to rehydrate you react app."
        rounded
      >
        This problem is occurred when you have tried to rehydrate you react app.
        Generated react app rehydrate with generated markup at that time it show
        empty space between jsx tags.
      </Block>
      <Block mb={15} title="Block as form" shadow form={form} editable>
        This problem is occurred when you have tried to rehydrate you react app.
        Generated react app rehydrate with generated markup at that time it show
        empty space between jsx tags.
      </Block>

      {/* <SimpleFrame mt={20} p="10px 15px" withShadow>
        SimpleFrame
      </SimpleFrame>

      <Frame
        mt={20}
        contrast
        title="Frame"
        p="10px 15px"
        description="Frame description"
      >
        KOLSO
      </Frame> */}
    </Layout>
  );
}
