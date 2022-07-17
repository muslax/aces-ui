import { Text, Title } from "@mantine/core";

export default function Typography() {
  return (
    <div>
      <Title order={4} mb={20}>
        Simple Typography
      </Title>
      <Text weight={600}>XS</Text>
      <Text size="xs" mb={20}>
        This problem is occurred when you have tried to rehydrate you react app.
        Generated react app rehydrate with generated markup at that time it show
        empty space between jsx tags.
      </Text>
      <Text weight={600}>SM</Text>
      <Text size="sm" mb={20}>
        This problem is occurred when you have tried to rehydrate you react app.
        Generated react app rehydrate with generated markup at that time it show
        empty space between jsx tags.
      </Text>
      <Text weight={600}>MD</Text>
      <Text size="md" mb={20}>
        This problem is occurred when you have tried to rehydrate you react app.
        Generated react app rehydrate with generated markup at that time it show
        empty space between jsx tags.
      </Text>
      <Text weight={600}>LG</Text>
      <Text size="lg" mb={20}>
        This problem is occurred when you have tried to rehydrate you react app.
        Generated react app rehydrate with generated markup at that time it show
        empty space between jsx tags.
      </Text>
    </div>
  );
}
