import { useForm } from "@mantine/form";
import Layout, { PageSpec } from "components/Layout/Layout";
import { Text, TypographyStylesProvider, useMantineTheme } from "@mantine/core";
import TextFiller from "components/Filler/TextFiller";
import Block from "components/Block/Block";
import { AcesMenu } from "components/Menu/Menu";
import Frame from "components/Frame/Frame";
import { useEffect, useState } from "react";
import productTypes from "lib/product-types.json";
import Pojo from "components/Pojo";
import Show from "components/show/Show";

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
  // const products = fetch(
  //   "https://gist.github.com/muslax/5bbb627cbbfbe53e2d7352b2352227ad"
  // );

  const [level, setLevel] = useState(4);
  const [products, setProducts] = useState<any>(null);

  useEffect(() => {
    fetch(
      "https://gist.githubusercontent.com/muslax/5bbb627cbbfbe53e2d7352b2352227ad/raw/718e9c5d26f7b3db46d9ed0c10c5515b6dbe71d1/products.json"
    )
      .then((response) => response.json())
      .then((json) => setProducts(json))
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Layout spec={pageSpec}>
      <Show when={productTypes != undefined}>
        {/* <Pojo object={productTypes.products} /> */}
        {productTypes.modules.map((m, i) => (
          <div key={m.id}>{m.id}</div>
        ))}
      </Show>

      {/* <TypographyStylesProvider>
        <div
          dangerouslySetInnerHTML={{ __html: productTypes[0].description }}
        />
      </TypographyStylesProvider> */}
      <br />
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
    </Layout>
  );
}
