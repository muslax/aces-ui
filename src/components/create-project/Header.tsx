import { Divider, Text, Title, useMantineTheme } from "@mantine/core";

interface HeaderProps {
  title: string;
  description: string;
}

export default function Header(props: HeaderProps) {
  const theme = useMantineTheme();
  return (
    <>
      <Title order={4} style={{ color: theme.colors.violet[5] }}>
        {props.title}
      </Title>
      <Text style={{ fontSize: 14 }}>{props.description}</Text>
      <Divider mt={20} mb={30} />
    </>
  );
}
