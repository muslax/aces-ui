import { Button, Divider, Stack, Text, Title } from "@mantine/core";
import InputText from "components/Input/InputText";
import { useStyles } from "./NewProject.styles";

interface SetInfoProps {
  type: string;
  moduleNames: string[];
  back: () => void;
}

export default function SetInfo(props: SetInfoProps) {
  const { classes, cx } = useStyles({});

  return (
    <>
      <Title order={4} className={classes.stepTitle}>
        Step 3: Set project info
      </Title>
      <Text mb={30}>
        Paket <strong>Competence @Work</strong> terdiri 2 modul utama dan 5
        modul pilihan. Modul pilihan dalam paket ini bersifat opsional, dapat
        tidak dipilih, dapat dipilih sebagian, atau dipilih seluruhnya.
      </Text>

      <Text weight={600}>Info umum</Text>
      <Divider my={10} />
      <Stack spacing={10} mb={30}>
        <InputText label="Judul Proyek:" labelWidth={180} />
        <InputText label="Administrator:" labelWidth={180} />
        <InputText label="Klien:" labelWidth={180} />
        <InputText label="Jumlah peserta:" labelWidth={180} />
      </Stack>

      <Text weight={600}>Tolok ukur (atau opsi lainnya)</Text>
      <Divider my={10} />

      <div className={classes.confirmBox}>
        <div className={classes.confirmLeft}>
          <Button color="dark" variant="outline" size="md" onClick={props.back}>
            Back
          </Button>
        </div>
        <Button color="dark" size="md">
          Lanjut
        </Button>
      </div>
    </>
  );
}
