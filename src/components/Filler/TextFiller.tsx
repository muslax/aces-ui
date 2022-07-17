import { Text } from "@mantine/core";

export default function TextFiller({
  s = "md",
}: {
  s?: "xs" | "sm" | "md" | "lg" | "xl";
}) {
  return (
    <Text mb={20} size={s}>
      {s.toUpperCase()} - This problem is occurred when you have tried to
      rehydrate you react app. Generated react app rehydrate with generated
      markup at that time it show empty space between jsx tags.
    </Text>
  );
}
