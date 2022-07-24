import { Dispatch, useEffect } from "react";
import { Button, Text, Title } from "@mantine/core";
import Frame from "components/Frame/Frame";
import { AcesModule, ProjectType } from "lib/aces-modules";
import { getProjectTemplate } from "lib/project-templates";
import ModuleItem from "./ModuleItem";
import { useStyles } from "./NewProject.styles";

interface SelectModulesProps {
  type: ProjectType | "";
  modules: AcesModule[];
  setModules: Dispatch<AcesModule[]>;
  back: () => void;
  next: () => void;
}

export default function SelectModules(props: SelectModulesProps) {
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
            <Text weight={600}>{template.defaultTitle}</Text>
            <Text size="sm" mb={10} color="gray">
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
          <Text weight={600} mt={0}>
            {template.optionalTitle}
          </Text>
          <Text size="sm" mb={10} color="gray">
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
        <Button color="dark" size="md" onClick={props.next}>
          Lanjut
        </Button>
      </div>
    </>
  );
}
