import { Dispatch, useEffect } from "react";
import { Button, Text, Title, useMantineTheme } from "@mantine/core";
import Frame from "components/Frame/Frame";
import { ProductType } from "lib/product-types";
import { AcesModule } from "lib/project-modules";
import { getProjectTemplate } from "lib/project-templates";
import ModuleItem from "./ModuleItem";
import { useStyles } from "./NewProject.styles";

interface SelectModulesProps {
  type: ProductType | "";
  modules: AcesModule[];
  setModules: Dispatch<AcesModule[]>;
  back: () => void;
  next: () => void;
}

export default function SelectModules(props: SelectModulesProps) {
  const theme = useMantineTheme();
  const { classes, cx } = useStyles({});
  const template = getProjectTemplate(props.type);
  const defaultModules = template?.modules.filter((m) => !m.optional);

  useEffect(() => {
    if (props.modules.length == 0 || props.modules[0].group != props.type) {
      props.setModules(defaultModules);
    }
    return () => {};
  }, []);

  return (
    <>
      <Title order={4} className={classes.stepTitle}>
        Step 2: Pilih modul {template.title}
      </Title>
      <Text mb={30}>{template.description}</Text>

      <Frame
        rounded
        mt={20}
        mb={20}
        title={`${template.title} - (${template.minimum})`}
        contrast={3}
      >
        {defaultModules.length > 0 && (
          <div style={{ marginBottom: 20 }}>
            <Text weight={700}>{template.defaultTitle}</Text>
            <Text mb={10} color={theme.colors.gray[7]}>
              {template.defaultDescription}
            </Text>
            {defaultModules.map((modul) => (
              <ModuleItem
                key={modul.name}
                data={modul}
                modules={props.modules}
                setModules={props.setModules}
              />
            ))}
          </div>
        )}
        <div>
          <Text weight={700} mt={0}>
            {template.optionalTitle}
          </Text>
          <Text mb={10} color={theme.colors.gray[7]}>
            {template.optionalDescription}
          </Text>
          {template.modules
            .filter((m) => m.optional)
            .map((modul) => (
              <ModuleItem
                key={modul.name}
                data={modul}
                modules={props.modules}
                setModules={props.setModules}
              />
            ))}
        </div>
      </Frame>

      <div className={classes.confirmBox}>
        <div className={classes.confirmLeft}>
          <Button color="dark" variant="outline" size="md" onClick={props.back}>
            Back
          </Button>
        </div>
        <Button
          color="dark"
          size="md"
          disabled={props.modules.length < template.minimum}
          onClick={props.next}
        >
          Lanjut
        </Button>
      </div>
    </>
  );
}
