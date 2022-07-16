import { useForm } from "@mantine/form";
import Layout, { PageSpec } from "components/Layout/Layout";
import SimpleFrame from "components/Frame/SimpleFrame";
import Frame from "components/Frame/Frame";
import { Box, Text } from "@mantine/core";
import Block from "components/Block/Block";
import { LinkProps, RecruitmentMenu } from "components/Menu/Menu";
import { useElementSize } from "@mantine/hooks";
import { useEffect, useState } from "react";
import Link from "next/link";

const pageSpec: PageSpec = {
  menu: RecruitmentMenu,
  type: "Recruitment",
  title: "Overview",
};

export default function Index() {
  const form = useForm({
    initialValues: {
      nama: "Joko",
      alamat: "",
    },
  });

  const { ref: ref1, width: width1 } = useElementSize();
  const { ref: ref2, width: width2 } = useElementSize();

  const [items, setItems] = useState<string[]>([]);
  useEffect(() => {
    const array: string[] = [];
    let h = 0;
    document.querySelectorAll("#wrap span").forEach((el, i) => {
      const top = el.getBoundingClientRect().top;
      if (i == 0) h = top;
      if (top > h) array.push("" + el.textContent);
    });
    setItems(array);
  }, [width1]);

  return (
    <Layout spec={pageSpec}>
      {/* <Box p={15} mb={15}>
        <Text mb={25}>
          This problem is occurred when you have tried to rehydrate you react app. Generated react
          app rehydrate with generated markup at that time it show empty space between jsx tags.
        </Text>
      </Box> */}

      <Box mb={15}>
        W1 {Math.round(width1)} W2 {Math.round(width2)}
      </Box>

      <div
        ref={ref1}
        id="wrap"
        style={{
          backgroundColor: "#f0f0f0",
          display: "flex",
          justifyContent: "space-between",
          height: 42,
          paddingTop: 10,
          overflow: "hidden",
          marginBottom: 20,
        }}
      >
        <div
          ref={ref2}
          style={{
            backgroundColor: "#fffFc0",
            display: "flex",
            flexWrap: "wrap",
          }}
        >
          {RecruitmentMenu.map((item) => (
            <Item key={item.href} link={item} />
          ))}
        </div>
        <div
          style={{
            width: 36,
            flexShrink: 0,
            textAlign: "center",
            backgroundColor: "#000",
            color: "white",
          }}
        >
          {items.length > 0 ? "XX" : ""}
        </div>
      </div>

      <pre>{items.join(" ")}</pre>

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

      <SimpleFrame mt={20} p="10px 15px" withShadow>
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
      </Frame>
    </Layout>
  );
}

function Item({ link }: { link: LinkProps }) {
  return (
    <Link href={link.href}>
      <a
        style={{
          display: "block",
          padding: "3px 10px",
          height: 32,
          border: "1px solid #789",
          backgroundColor: "white",
        }}
      >
        <span>{link.label}</span>
      </a>
    </Link>
  );
}
