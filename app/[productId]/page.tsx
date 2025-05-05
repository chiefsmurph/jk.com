import { getProductImages } from "@/public/products";
import products from "@/public/products";
import ProductClientView from "./ProductClientView";

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params;
  const product = products.products.find((p) => p.id === productId);
  if (!product) return <p>Not found</p>;

  const defaultColor = product.options.color?.[0];
  const images = getProductImages(product, defaultColor);

  return <ProductClientView product={product} defaultImages={images} />;
}
