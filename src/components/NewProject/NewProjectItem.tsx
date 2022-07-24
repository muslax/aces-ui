import { Checkbox, Title } from "@mantine/core";
import { ProjectType } from "lib/aces-modules";
import { Dispatch, ReactNode } from "react";
import { useStyles } from "./NewProject.styles";

export interface NewProjectItemProps {
  title: string;
  type: ProjectType;
  projectType?: string;
  setProjectType?: Dispatch<ProjectType | "">;
  collapse?: boolean;
  children: ReactNode;
}

export default function NewProjectItem(props: NewProjectItemProps) {
  const { classes } = useStyles({
    selected: props.projectType == props.type,
    collapse: props.collapse,
  });
  return (
    <div
      className={classes.projectItem}
      onClick={() => {
        if (props.setProjectType) {
          props.setProjectType(props.type);
        }
      }}
    >
      <div className={classes.itemLeft}>
        <Title order={4} mb={15}>
          {props.title}
        </Title>
        <div style={{}}>
          <div style={{ paddingBottom: 35 }}>{props.children}</div>
          <div
            style={{ position: "absolute", bottom: 15, left: 15, right: 15 }}
          >
            <Checkbox
              mt={15}
              color="violet"
              size="md"
              styles={{ label: { fontSize: 14 } }}
              checked={props.projectType == props.type}
              onChange={(e) =>
                props.setProjectType
                  ? props.setProjectType(
                      e.currentTarget.checked ? props.type : ""
                    )
                  : {}
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
}
