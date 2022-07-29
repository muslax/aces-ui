import { SimpleGrid } from "@mantine/core";
import { useViewportSize } from "@mantine/hooks";
import { IProduct } from "lib/models";
import { useEffect } from "react";
import Header from "./Header";
import ProductCard from "./ProductCard";

interface SelectProductProps {
  products: IProduct[];
  selectProduct: (product: IProduct) => void;
}

export default function SelectProduct(props: SelectProductProps) {
  const { width } = useViewportSize();
  useEffect(() => {
    if (window) window.scrollTo(0, 0);
    return () => {};
  }, []);

  return (
    <>
      <Header
        title={`Step 1: Pilih jenis proyek`}
        description={`Pilih salah satu dari empat jenis proyek di bawah ini, lalu
                tekan tombol Lanjut pada bagian bawah.`}
      />
      <div style={{ maxWidth: 600 }}>
        <SimpleGrid spacing={20} cols={width > 0 && width < 560 ? 1 : 2}>
          {props.products.map((product) => (
            <ProductCard
              key={product.title}
              product={product}
              selectProduct={props.selectProduct}
              collapse={width > 0 && width < 500}
            />
          ))}
        </SimpleGrid>
      </div>
    </>
  );
}
