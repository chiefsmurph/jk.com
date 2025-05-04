import Link from "next/link";
import products from "../../public/products.json";
import styles from "./ProductPage.module.css";
import StripeButton from "./StripeButton";

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const { productId } = await params; // ✅ de‑structure
  const product = products.products.find((p) => p.id === productId);
  if (!product) return <p>Not found</p>;

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.home}>
        ← Home
      </Link>
      <h1 className={styles.title}>{product.title}</h1>
      <p className={styles.price}>${product.price}</p>
      <p className={styles.desc}>{product.description}</p>

      <div className={styles.gallery}>
        {product.images.map((src) => (
          <img key={src} src={src} alt="" className={styles.img} />
        ))}
      </div>

      <StripeButton productId={product.id} />
    </div>
  );
}
