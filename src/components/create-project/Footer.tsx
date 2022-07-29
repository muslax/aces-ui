import { Button } from "@mantine/core";

interface FooterProps {
  back?: () => void;
  next?: () => void;
}

export default function Footer(props: FooterProps) {
  return (
    <div
      style={{
        display: "flex",
        gap: 20,
        // justifyContent: "space-between",
        margin: "40px 0 50px 0",
      }}
    >
      <Button
        variant="outline"
        color="dark"
        disabled={!props.back}
        onClick={() => {
          if (props.back) props.back();
        }}
      >
        Back
      </Button>
      <Button
        color="violet"
        disabled={!props.next}
        onClick={() => {
          if (props.next) props.next();
        }}
      >
        Lanjut
      </Button>
    </div>
  );
}
