import { Stack } from "@mantine/core";
import { IModule, IProduct } from "lib/models";
import Heading from "./Heading";
import ModuleCard from "./ModuleCard";
import ModulesGroupHeader from "./ModulesGroupHeader";

interface ProductModulesProps {
  product: IProduct;
  modules: IModule[];
  allModules: IModule[];
  selectHandler: (module: IModule) => void;
}

export default function ProductModules(props: ProductModulesProps) {
  function getModules(ids: string[]) {
    return props.allModules.filter((m) =>
      ids.includes(m.id as unknown as string)
    );
  }

  function hasConflict(module: IModule) {
    return props.modules.find(
      (m) => (m.id as unknown as string) == module.conflictWith
    );
  }

  return (
    <>
      <Heading
        title={`Step 2: Pilih modul ${props.product?.title}`}
        description={props.product?.selectionGuide || "---"}
      />
      <div style={{ maxWidth: 600 }}>
        <Stack spacing={30}>
          {props.product?.groups.map((group) => (
            <div key={group.title}>
              <ModulesGroupHeader
                title={group.title}
                description={group.description}
              />
              <Stack spacing={8} mt={10}>
                {group.required &&
                  getModules(group.modules).map((module) => (
                    <ModuleCard key={module.name} module={module} required />
                  ))}
                {!group.required &&
                  getModules(group.modules).map((module) => (
                    <ModuleCard
                      key={module.name}
                      module={module}
                      selected={props.modules.includes(module)}
                      disabled={hasConflict(module) != undefined}
                      onClick={() => props.selectHandler(module)}
                    />
                  ))}
              </Stack>
            </div>
          ))}
        </Stack>
      </div>
    </>
  );
}
