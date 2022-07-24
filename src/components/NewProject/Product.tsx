import { Dispatch } from "react";
import { Checkbox, Title } from "@mantine/core";
import { ProductType } from "lib/product-types";
import { ProductDescriptor } from "lib/product-types";
import { useStyles } from "./NewProject.styles";

export interface ProductProps {
  descriptor: ProductDescriptor;
  projectType?: string;
  setProjectType?: Dispatch<ProductType | "">;
}

export default function Product(props: ProductProps) {
  const { classes } = useStyles({
    selected: props.projectType == props.descriptor.type,
    collapse: false,
  });
  return (
    <div
      className={classes.projectItem}
      onClick={() => {
        if (props.setProjectType) {
          props.setProjectType(props.descriptor.type);
        }
      }}
    >
      <div className={classes.itemLeft}>
        <Title order={4} mb={15}>
          {props.descriptor.title}
        </Title>
        <div style={{}}>
          <div style={{ paddingBottom: 35 }}>
            {props.descriptor.description}
          </div>
          <div
            style={{ position: "absolute", bottom: 15, left: 15, right: 15 }}
          >
            <Checkbox
              mt={15}
              color="violet"
              size="md"
              styles={{ label: { fontSize: 14 } }}
              checked={props.projectType == props.descriptor.type}
              onChange={(e) =>
                props.setProjectType
                  ? props.setProjectType(
                      e.currentTarget.checked ? props.descriptor.type : ""
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
