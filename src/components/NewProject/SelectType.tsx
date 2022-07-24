import { Button, Divider, SimpleGrid, Text, Title } from "@mantine/core";
import { ProjectType } from "lib/aces-modules";
import Link from "next/link";
import { Dispatch } from "react";
import { useStyles } from "./NewProject.styles";
import NewProjectItem from "./NewProjectItem";

interface SelectTypeProps {
  width: number;
  projectType: ProjectType | "";
  setProjectType: Dispatch<ProjectType | "">;
  next: () => void;
}

export default function SelectType(props: SelectTypeProps) {
  const { classes, cx } = useStyles({});
  const width = props.width;

  return (
    <>
      <Title order={4} className={classes.stepTitle}>
        Step 1: Pilih jenis proyek ({props.projectType})
      </Title>
      <Text mb={30}>
        Pilih salah satu dari empat jenis proyek di bawah ini, lalu tekan tombol
        Lanjut pada bagian bawah.
      </Text>

      <SimpleGrid cols={width > 0 && width < 600 ? 1 : 2} my={20}>
        <NewProjectItem
          type="assessment"
          title="Assessment Center"
          projectType={props.projectType}
          setProjectType={props.setProjectType}
          collapse={width > 0 && width < 500}
        >
          <Text size="sm">
            Each column takes <strong>equal amount</strong> of space and unlike
            Grid component you do not control column span, instead you specify
            number of columns per row. Each column takes space and unlike Grid
            component you do not control column span, instead you specify number
            of columns per row.
          </Text>
        </NewProjectItem>

        <NewProjectItem
          type="competence"
          title="Competence @ Work"
          projectType={props.projectType}
          setProjectType={props.setProjectType}
          collapse={width > 0 && width < 500}
        >
          <Text size="sm">
            Each column takes <strong>equal amount</strong> of space and unlike
            Grid component you do not control column span, instead you specify
            number of columns per row.
          </Text>
        </NewProjectItem>

        <NewProjectItem
          type="recruitment"
          title="Recruitment"
          projectType={props.projectType}
          setProjectType={props.setProjectType}
          collapse={width > 0 && width < 500}
        >
          <Text size="sm">
            Each column takes <strong>equal amount</strong> of space and unlike
            Grid component you do not control column span, instead you specify
            number of columns per row.
          </Text>
        </NewProjectItem>

        <NewProjectItem
          type="potrev"
          title="Potential Review"
          projectType={props.projectType}
          setProjectType={props.setProjectType}
          collapse={width > 0 && width < 500}
        >
          <Text size="sm">
            Each column takes <strong>equal amount</strong> of space and unlike
            Grid component you do not control column span, instead you specify
            number of columns per row.
          </Text>
        </NewProjectItem>
      </SimpleGrid>

      <div className={classes.confirmBox}>
        <div className={classes.confirmLeft}>
          <Link href="/projects">
            <Button component="a" color="dark" variant="outline" size="md">
              Cancel
            </Button>
          </Link>
        </div>
        <Button
          color="dark"
          size="md"
          disabled={!props.projectType}
          onClick={props.next}
        >
          Lanjut
        </Button>
      </div>
    </>
  );
}
