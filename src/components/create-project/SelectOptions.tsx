import { useEffect } from "react";
import { Checkbox, Divider, Stack } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { IModule, IProduct } from "lib/models";
import InputText from "components/Input/InputText";
import GroupHeader from "./GroupHeader";
import Header from "./Header";
import { ProjectOptions } from "./ProjectOptions";

interface SelectOptionsProps {
  product: IProduct;
  selectedModules: IModule[];
}
export default function SelectOptions(props: SelectOptionsProps) {
  const { width } = useViewportSize();
  useEffect(() => {
    if (window) window.scrollTo(0, 0);
    return () => {};
  }, []);
  return (
    <>
      <Header
        title={`Step 3: Data proyek`}
        description={"Mengisi data proyek"}
      />
      <div style={{ marginTop: -10 }}>
        <GroupHeader
          title="Informasi proyek"
          description="Jenis penawar candu yang diutamakan"
        />
        <Stack spacing={10} mt={15}>
          <InputText label="Judul Proyek" />
          <InputText label="Untuk klien" />
          <InputText label="Jumlah peserta" />
        </Stack>
      </div>
      <div style={{ marginTop: 30 }}>
        <Divider mb={20} />
        <GroupHeader
          title="Penawar Candu"
          description="Jenis penawar candu yang diutamakan"
        />
        <div
          style={{
            marginTop: 10,
            maxWidth: width > 700 ? 750 : width > 400 ? 500 : 300,
            columnCount: width > 700 ? 3 : width > 500 ? 2 : 1,
            // columnGap: 10,
          }}
        >
          <OptionValues option={ProjectOptions.assessment[0]} />
          <OptionValues option={ProjectOptions.assessment[1]} />
          <OptionValues option={ProjectOptions.assessment[2]} />
          <OptionValues option={ProjectOptions.assessment[3]} />
        </div>
      </div>
    </>
  );
}

function OptionValues({
  option,
}: {
  option: { title: string; values: string[] };
}) {
  return (
    <div
      style={{
        // flexShrink: 0,
        width: 250,
        padding: "10px 20px 10px 0",
        display: "grid",
        gridTemplateRows: "1fr auto",
        breakInside: "avoid",
      }}
    >
      <div
        style={{
          fontSize: 13,
          fontWeight: 600,
          marginBottom: 10,
        }}
      >
        {option.title}
      </div>
      <Stack spacing={8}>
        {option.values.map((value) => (
          <Checkbox
            key={value}
            size="xs"
            label={value}
            styles={checkboxStyles}
          />
        ))}
      </Stack>
    </div>
  );
}

const checkboxStyles = {
  root: {
    alignItems: "start",
  },
  input: { cursor: "pointer" },
  label: {
    fontSize: 13,
    paddingLeft: 10,
    cursor: "pointer",
  },
};
