import { Dispatch, useEffect, useState } from "react";
import {
  Button,
  Checkbox,
  createStyles,
  Divider,
  MantineTheme,
  Stack,
  Text,
  TextInput,
  Title,
  TypographyStylesProvider,
  useMantineTheme,
} from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import Pojo from "components/Pojo";
import Show from "components/show/Show";
import { IModule, IModuleGroup, IProduct } from "lib/models";
import defaultTypes from "lib/product-types.json";
import { Checkbox as CheckboxIcon, ChevronDown } from "tabler-icons-react";
import PackageCard from "./PackageCard";
import ProductModules from "./ProductModules";

interface Model {
  products: IProduct[];
  modules: IModule[];
}

const baseUrl =
  "https://gist.githubusercontent.com/muslax/63a8178df7d2dd0ca9cbc00f4ed9cf09/raw/e39c19d5ea5d799225ad4532aeaaf360e595beb3/aces-products.json";

export default function NewProjectModel() {
  const { classes } = styles();
  const theme = useMantineTheme();
  const [url, setUrl] = useState(baseUrl);
  const [model, setModel] = useState(defaultTypes as unknown as Model);
  const [step, setStep] = useState(1);
  const [product, setProduct] = useState<IProduct | null>(model.products[0]);
  const [selectedModules, setSelectedModules] = useState<IModule[]>([]);
  // test
  const [modules, setModules] = useState<IModule[]>([]);

  function moduleCardHandler(module: IModule) {
    if (modules.includes(module)) {
      setModules(modules.filter((m) => m != module));
    } else {
      setModules([...modules, module]);
    }
  }

  function hasConflict(module: IModule) {
    return modules.find(
      (m) => (m.id as unknown as string) == module.conflictWith
    );
  }

  function loadModel() {
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setModel(json as unknown as Model);
      })
      .catch((error) => {
        alert(error);
      })
      .finally(() => {});
  }

  function requiredGroup() {
    if (!product) return null;
    const group = product.groups.find((g) => g.required);
    return group || null;
  }

  // useEffect(() => {
  //   setSelectedModules([]);
  //   if (product) {
  //     // const group = requiredGroup();
  //     const group = product.groups.find((g) => g.required);
  //     if (group) {
  //       const modules = model.modules.filter((m) =>
  //         group.modules.includes(m.id as unknown as string)
  //       );
  //       setSelectedModules(modules);
  //     }
  //   }
  // }, [product, model.modules]);

  return (
    <>
      <div className={classes.headerWrap}>
        <div className={classes.container}>
          <div className={classes.headerInner}>
            <TextInput
              style={{ flexGrow: 1 }}
              value={url}
              onChange={(e) => setUrl(e.currentTarget.value)}
            />
            <Button
              color="dark"
              onClick={() => loadModel()}
              disabled={step > 1}
            >
              Load
            </Button>
          </div>
        </div>
      </div>
      <div className={classes.mainWrap}>
        <div className={classes.container}>
          <div className={classes.main}>
            <Title order={2} mb={30}>
              Create New Project
            </Title>

            <Show when={step === 1}>
              <Heading
                theme={theme}
                title="Step 1: Pilih jenis proyek"
                description={`Pilih salah satu dari empat jenis proyek di bawah ini, lalu
                tekan tombol Lanjut pada bagian bawah.`}
              />
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 18,
                }}
              >
                {model.products.map((p) => (
                  <PackageCard
                    key={p.type}
                    product={p}
                    selected={product == p}
                    onClick={() => {
                      setProduct(p);
                      setStep(2);
                    }}
                  />
                ))}
              </div>

              <Pojo object={modules} />

              <div style={{ marginTop: 25 }}>
                <div style={{ lineHeight: 1, fontWeight: 500 }}>
                  Module Utama
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: theme.colors.gray[7],
                    marginBottom: 10,
                  }}
                >
                  Keterangan modul utama
                </div>
                <div
                  style={{
                    maxWidth: 600,
                    borderRadius: 5,
                    overflow: "hidden",
                    backgroundColor: theme.white,
                    boxShadow: `#2222221A 0px 1.6px 3.6px 0px, #3333331A 0px 0.3px 0.9px 0px`,
                  }}
                >
                  <div
                    style={{
                      padding: "10px 15px",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "start",
                        gap: 12,
                      }}
                    >
                      <Checkbox
                        size="xs"
                        label="GPQ - Gaia Personability Questionnaire"
                        styles={{
                          root: {
                            flexGrow: 1,
                          },
                          label: {
                            fontSize: 14,
                            fontWeight: 500,
                            cursor: "pointer",
                          },
                          input: {
                            cursor: "pointer",
                          },
                        }}
                      />
                      <div style={{ display: "flex" }}>
                        <ChevronDown size={16} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Show>
            {/* STEP 2 */}
            <Show when={product != null && step === 2}>
              {/* <ProductModules
                product={product}
                modules={modules}
                allModules={model.modules}
                selectHandler={moduleCardHandler}
              /> */}

              <Footer back={() => setStep(1)} />
              <details>
                <summary
                  style={{
                    cursor: "pointer",
                    marginBottom: -12,
                    backgroundColor: theme.colors.gray[2],
                  }}
                >
                  DATA
                </summary>
                <Pojo object={product} />
              </details>
            </Show>
          </div>
          {/* <Pojo object={selectedModules} /> */}
        </div>
      </div>
    </>
  );
}

interface HeadingProps {
  theme: MantineTheme;
  title: string;
  description: string;
}

function Heading(props: HeadingProps) {
  return (
    <>
      <Title order={4} style={{ color: props.theme.colors.violet[5] }}>
        {props.title}
      </Title>
      <Text mb={30} style={{ fontSize: 13 }}>
        {props.description}
      </Text>
    </>
  );
}

interface ModulesGroupProps {
  theme: MantineTheme;
  group: IModuleGroup | null;
  required?: boolean;
  modules: IModule[];
  selectedModules: IModule[];
  setSelectedModules: Dispatch<IModule[]>;
}

function ModulesGroup(props: ModulesGroupProps) {
  const theme = props.theme;
  //
  // const modules = props.modules.filter((m) =>
  //   props.group?.modules.includes(m.id as unknown as string)
  // );
  const [modules, setModules] = useState<IModule[]>([]);
  useEffect(() => {
    const array: IModule[] = [];
    props.group?.modules.forEach((id) => {
      const found = props.modules.find(
        (m) => (m.id as unknown as string) == id
      );
      if (found) array.push(found);
    });
    setModules(array);
  }, []);

  function isDisabled(module: IModule) {
    return (
      props.selectedModules.find(
        (m) => (m.id as unknown as string) == module.conflictWith
      ) !== undefined
    );
  }

  function toggle(module: IModule) {
    if (props.required || isDisabled(module)) return;
    if (props.selectedModules.includes(module)) {
      props.setSelectedModules(
        props.selectedModules.filter((m) => m != module)
      );
    } else {
      props.setSelectedModules([...props.selectedModules, module]);
    }
  }

  return (
    <>
      <Divider my={15} style={{ borderColor: theme.colors.violet[1] }} />
      <div
        style={{
          display: "flex",
          alignItems: "start",
          gap: 20,
        }}
      >
        <div
          style={{
            flexBasis: 240,
            paddingRight: 10,
          }}
        >
          <Text weight={600}>{props.group?.title}</Text>
          <TypographyStylesProvider>
            <div
              style={{ fontSize: 13 }}
              dangerouslySetInnerHTML={{
                __html: props.group?.description || "",
              }}
            />
          </TypographyStylesProvider>
        </div>
        <div
          style={{
            flexGrow: 1,
          }}
        >
          <Stack spacing={8}>
            {modules.map((m) => (
              <div
                key={m.id as unknown as string}
                style={{
                  borderWidth: 1, // `1px solid ${theme.colors.gray[3]}`,
                  borderStyle: "solid",
                  borderColor: props.required
                    ? theme.colors.gray[5]
                    : props.selectedModules.includes(m)
                    ? theme.colors.violet[3]
                    : theme.colors.gray[4],
                  borderRadius: 3,
                  padding: "6px 12px 8px",
                  boxShadow: props.selectedModules.includes(m)
                    ? `3px 3px 0 ${theme.colors.gray[3]}`
                    : "none",
                  backgroundColor: isDisabled(m) ? "#ffffff80" : theme.white,
                  cursor: isDisabled(m) ? "not-allowed" : "pointer",
                }}
                onClick={() => toggle(m)}
              >
                <div style={{ display: "flex", alignItems: "start", gap: 10 }}>
                  {props.required && (
                    <Checkbox mt={3} size="xs" checked readOnly />
                  )}
                  {!props.required && (
                    <Checkbox
                      mt={3}
                      size="xs"
                      color="violet"
                      checked={props.selectedModules.includes(m)}
                    />
                  )}
                  <div style={{}}>
                    <Text
                      weight={700}
                      style={{
                        fontSize: 13.5,
                        color: props.required
                          ? theme.colors.dark[6]
                          : isDisabled(m)
                          ? theme.colors.gray[6]
                          : props.selectedModules.includes(m)
                          ? theme.colors.gray[8]
                          : theme.colors.violet[5],
                      }}
                    >
                      {m.name}
                    </Text>
                    <TypographyStylesProvider>
                      <div
                        style={{
                          fontSize: 13,
                          color: isDisabled(m)
                            ? theme.colors.gray[6]
                            : theme.colors.gray[7],
                        }}
                        dangerouslySetInnerHTML={{ __html: m.description }}
                      />
                    </TypographyStylesProvider>
                  </div>
                </div>
              </div>
            ))}
          </Stack>
        </div>
      </div>
    </>
  );
}

interface FooterProps {
  back?: () => void;
  next?: () => void;
}

function Footer(props: FooterProps) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        margin: "40px 0 50px 0",
      }}
    >
      <Button
        variant="outline"
        color="dark"
        disabled={!props.back}
        onClick={() => {
          if (props.back) props.back();
        }}
      >
        Back
      </Button>
      <Button
        color="violet"
        disabled={!props.next}
        onClick={() => {
          if (props.next) props.next();
        }}
      >
        Lanjut
      </Button>
    </div>
  );
}

const styles = createStyles((theme) => ({
  headerWrap: {
    height: 70,
    paddingTop: 16,
    paddingBottom: 15,
    backgroundColor: theme.white,
    borderBottom: `1px solid ${theme.colors.gray[2]}`,
    position: "fixed",
    zIndex: 99,
    top: 0,
    left: 0,
    right: 0,
  },

  container: {
    maxWidth: 1024,
    paddingLeft: 16,
    paddingRight: 16,
    marginLeft: "auto",
    marginRight: "auto",
    "@media (min-width: 768px)": {
      paddingLeft: 24,
      paddingRight: 24,
    },
  },

  headerInner: {
    display: "flex",
    alignItems: "center",
    gap: 15,
  },

  mainWrap: {
    backgroundColor: `${theme.colors.gray[1]}CC`,
    minHeight: "calc(100vh + 150px)",
    paddingTop: 70,
    paddingBottom: 100,
  },

  main: {
    maxWidth: 768,
    marginLeft: "auto",
    marginRight: "auto",
    paddingTop: 30,
  },
}));
