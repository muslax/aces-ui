import { useEffect } from "react";
import { Stack } from "@mantine/core";
import { IModule, IProduct } from "lib/models";
import GroupHeader from "./GroupHeader";
import Header from "./Header";
import ModuleCard from "./ModuleCard";
import Pojo from "components/Pojo";

interface SelectModulesProps {
  product: IProduct;
  modules: IModule[];
  selectedModules: IModule[];
  selectHandler: (module: IModule) => void;
}

export default function SelectModules(props: SelectModulesProps) {
  useEffect(() => {
    if (window) window.scrollTo(0, 0);
    return () => {};
  }, []);

  function getModules(ids: string[]) {
    return props.modules.filter((m) => ids.includes(m.id as unknown as string));
  }

  function hasConflict(module: IModule) {
    return props.selectedModules.find(
      (m) => (m.id as unknown as string) == module.conflictWith
    );
  }

  return (
    <>
      <Header
        title={`Step 2: Pilih modul ${props.product?.title}`}
        description={props.product?.selectionGuide || "---"}
      />
      <div style={{ maxWidth: 600 }}>
        <Stack spacing={30}>
          {props.product?.groups.map((group) => (
            <div key={group.title}>
              <GroupHeader
                title={group.title}
                description={group.description}
              />
              <Stack spacing={8} mt={15} style={{ maxWidth: 600 }}>
                {group.required &&
                  getModules(group.modules).map((module) => (
                    <ModuleCard key={module.name} module={module} required />
                  ))}
                {!group.required &&
                  getModules(group.modules).map((module) => (
                    <ModuleCard
                      key={module.name}
                      module={module}
                      selected={props.selectedModules.includes(module)}
                      disabled={hasConflict(module) != undefined}
                      onClick={() => props.selectHandler(module)}
                    />
                  ))}
              </Stack>
            </div>
          ))}
        </Stack>
        <Pojo object={props.selectedModules.length} />
      </div>
    </>
  );
}
