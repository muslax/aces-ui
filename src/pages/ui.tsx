import { useForm } from "@mantine/form";
import Layout, { PageSpec } from "components/Layout/Layout";
import { Tabs, Text, Title, useMantineTheme } from "@mantine/core";
import Block from "components/Block/Block";
import { AcesMenu } from "components/Menu/Menu";
import Frame from "components/Frame/Frame";
import { useState } from "react";
import PTabs from "components/Tabs/PTabs";
import Typography from "components/UI/Typography";
import Frames from "components/UI/Frames";

export default function Index() {
  const theme = useMantineTheme();
  const pageSpec: PageSpec = {
    menu: AcesMenu,
    type: "Aces",
    title: "User Interfaces",
    heroColor: theme.colors.violet[0],
  };
  const form = useForm({
    initialValues: {
      nama: "Joko",
      alamat: "",
    },
  });

  return (
    <Layout spec={pageSpec}>
      <PTabs>
        <Tabs.Tab label="Typography">
          {/* <Frames /> */}
          <Typography />
        </Tabs.Tab>
        <Tabs.Tab label="Frames">
          <Frames />
          {/* <Typography /> */}
        </Tabs.Tab>
        <Tabs.Tab label="Buttons">
          <Frames />
        </Tabs.Tab>
        <Tabs.Tab label="Inputs">
          <Frames />
        </Tabs.Tab>
      </PTabs>
    </Layout>
  );
}
