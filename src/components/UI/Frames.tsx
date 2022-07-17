import { SimpleGrid, Text, Title, useMantineTheme } from "@mantine/core";
import Frame from "components/Frame/Frame";

export default function Frames() {
  const theme = useMantineTheme();
  const filler = (
    <Text>
      Each column takes equal amount of space and unlike Grid component you do
      not control column span, instead you specify number of columns per row.
    </Text>
  );

  return (
    <div>
      <Title order={4} mb={20}>
        Simple frames
      </Title>
      <SimpleGrid cols={2} mb={40}>
        <Frame contrast={2}>
          <Text weight={600} mb={10}>
            Contrast = 2
          </Text>
          {filler}
        </Frame>
        <Frame contrast={4}>
          <Text weight={600} mb={10}>
            Contrast = 4 (default)
          </Text>
          {filler}
        </Frame>
        <Frame contrast={7} borderColor="green">
          <Text weight={600} mb={10}>
            border=green, contrast = 7
          </Text>
          {filler}
        </Frame>
        <Frame rounded borderColor="green">
          <Text weight={600} mb={10}>
            Rounded, border=green
          </Text>
          {filler}
        </Frame>
        <Frame shadow borderColor="orange">
          <Text weight={600} mb={10}>
            With shadow, border=orange
          </Text>
          {filler}
        </Frame>
        <Frame rounded shadow borderColor="violet">
          <Text weight={600} mb={10}>
            Rounded, with shadow, border=violet
          </Text>
          {filler}
        </Frame>
      </SimpleGrid>

      <Title order={4} mb={20} sx={{ color: theme.colors.teal[6] }}>
        With title and description
      </Title>
      <SimpleGrid cols={2} mb={20}>
        <Frame title="Frame with title" contrast={4}>
          {filler}
        </Frame>
        <Frame
          title="Frame Title"
          description="This is the description"
          altColor="orange"
          borderColor="pink"
          rounded
        >
          {filler}
        </Frame>
      </SimpleGrid>
    </div>
  );
}
