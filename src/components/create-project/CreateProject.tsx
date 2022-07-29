import { useState } from "react";
import { Divider, Title } from "@mantine/core";
import jsonDevModel from "lib/product-types.json";
import { IModule, IProduct } from "lib/models";
import DevHeader from "./DevHeader";
import SelectProduct from "./SelectProduct";
import SelectModules from "./SelectModules";
import SelectOptions from "./SelectOptions";
import Footer from "./Footer";
import { useStyles } from "./CreateProject.styles";

interface IModel {
  products: IProduct[];
  modules: IModule[];
}

export default function CreateProject() {
  const { classes } = useStyles();
  const [model, setModel] = useState(jsonDevModel as unknown as IModel);
  const [step, setStep] = useState(1);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>(null);
  const [selectedModules, setSelectedModules] = useState<IModule[]>([]);

  function selectProduct(product: IProduct) {
    setSelectedProduct(product);
    let ids: string[] = [];
    product.groups.forEach((group) => {
      if (group.required) {
        ids.push(...group.modules);
      }
    });
    setSelectedModules(
      model.modules.filter((m) => ids.includes(m.id as unknown as string))
    );
    setStep(2);
  }

  function selectModule(module: IModule) {
    if (selectedModules.includes(module)) {
      setSelectedModules(selectedModules.filter((m) => m != module));
    } else {
      setSelectedModules([...selectedModules, module]);
    }
  }

  return (
    <>
      <DevHeader disabled={step > 1} setModel={setModel} />
      <div className={classes.mainWrap}>
        <div className={classes.container}>
          <div className={classes.main}>
            <Title order={2} mb={30}>
              Create New Project
            </Title>
            {step === 1 && (
              <SelectProduct
                products={model.products}
                selectProduct={selectProduct}
              />
            )}
            {selectedProduct && step === 2 && (
              <>
                <SelectModules
                  product={selectedProduct}
                  modules={model.modules}
                  selectedModules={selectedModules}
                  selectHandler={selectModule}
                />
                <Divider mt={30} mb={-10} />
                <Footer back={() => setStep(1)} next={() => setStep(3)} />
              </>
            )}
            {selectedProduct && step === 3 && (
              <>
                <SelectOptions
                  product={selectedProduct}
                  selectedModules={selectedModules}
                />
                <Divider mt={20} mb={-10} />
                <Footer back={() => setStep(2)} next={() => setStep(3)} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
