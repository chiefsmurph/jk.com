import { getProductImages } from "@/public/products";
import products from "@/public/products";
import ProductClientView from "./ProductClientView";

type ProductPageProps = {
  params: Promise<{ productId: string }>;
};

export default async function ProductPage({ params }: ProductPageProps) {
  const { productId } = await params;
  const product = products.products.find((p) => p.id === productId);
  if (!product) return <p>Not found</p>;

  const defaultColor = product.options.color?.[0];
  const images = getProductImages(product, defaultColor);

  return <ProductClientView product={product} defaultImages={images} />;
}
