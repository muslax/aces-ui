import { useState } from "react";
import { Title } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Header from "components/Header/Header";
import SelectType from "./SelectType";
import { useStyles as layoutStyles } from "components/Layout/Layout.styles";
import { useStyles } from "./NewProject.styles";
import SelectModules from "./SelectModules";
import Show from "components/show/Show";
import SetInfo from "./SetInfo";
import { ProductType } from "lib/product-types";
import { AcesModule } from "lib/project-modules";
import Pojo from "components/Pojo";

export default function NewProject() {
  const { width } = useViewportSize();

  const { classes: layout } = layoutStyles();
  const { classes, cx } = useStyles({});
  const headerClasses = cx(layout.headerWrap);

  const [step, setStep] = useState(1);
  const [projectType, setProjectType] = useState<ProductType | "">("");
  const [modules, setModules] = useState<AcesModule[]>([]);

  return (
    <>
      <div className={headerClasses}>
        <Header />
      </div>
      <div className={classes.root}>
        <div id="layout-container" className={layout.container}>
          <div className={classes.wrap}>
            <Title order={2}>Create New Project</Title>

            <Show when={step === 1}>
              <SelectType
                width={width}
                projectType={projectType}
                setProjectType={setProjectType}
                next={() => setStep(2)}
              />
            </Show>

            <Show when={step === 2}>
              <SelectModules
                type={projectType}
                modules={modules}
                setModules={setModules}
                back={() => setStep(1)}
                next={() => setStep(3)}
              />
            </Show>

            <Show when={step === 3}>
              <SetInfo
                type={projectType}
                moduleNames={[]}
                back={() => setStep(2)}
              />
            </Show>

            {/* <Pojo object={modules} /> */}
          </div>
        </div>
      </div>
    </>
  );
}
