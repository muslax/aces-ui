import { Text, Title, useMantineTheme } from "@mantine/core";

interface HeadingProps {
  title: string;
  description: string;
}

export default function Heading(props: HeadingProps) {
  const theme = useMantineTheme();
  return (
    <>
      <Title order={4} style={{ color: theme.colors.violet[5] }}>
        {props.title}
      </Title>
      <Text mb={30} style={{ fontSize: 14 }}>
        {props.description}
      </Text>
    </>
  );
}
