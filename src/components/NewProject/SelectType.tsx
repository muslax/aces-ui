import { Button, SimpleGrid, Text, Title } from "@mantine/core";
import { ProductType } from "lib/product-types";
import {
  AssessmentProduct,
  CompetenceProduct,
  PotrevProduct,
  RecruitmentProduct,
} from "lib/product-types";
import Link from "next/link";
import { Dispatch } from "react";
import { useStyles } from "./NewProject.styles";
import Product from "./Product";

interface SelectTypeProps {
  width: number;
  projectType: ProductType | "";
  setProjectType: Dispatch<ProductType | "">;
  next: () => void;
}

export default function SelectType(props: SelectTypeProps) {
  const { classes, cx } = useStyles({});
  const width = props.width;

  const products = [
    AssessmentProduct,
    CompetenceProduct,
    RecruitmentProduct,
    PotrevProduct,
  ];

  return (
    <>
      <Title order={4} className={classes.stepTitle}>
        Step 1: Pilih jenis proyek ({props.projectType})
      </Title>
      <Text mb={30}>
        Pilih salah satu dari empat jenis proyek di bawah ini, lalu tekan tombol
        Lanjut pada bagian bawah.
      </Text>

      <SimpleGrid cols={width > 0 && width < 640 ? 1 : 2} my={20}>
        {products.map((descriptor) => (
          <Product
            key={descriptor.type}
            descriptor={descriptor}
            projectType={props.projectType}
            setProjectType={props.setProjectType}
          />
        ))}
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
