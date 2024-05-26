import Link from "next/link";

export default function ProductList() {
  const productID=50
  return (
    <div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
        </ul>
      </nav>
      <h1>Product List</h1>
      <ul>
        <li><h2><Link href="/products/1">Product 1</Link></h2></li>
        <li><h2><Link href="/products/2">Product 2</Link></h2></li>
        <li><h2><Link href="/products/3" replace>Product 3</Link></h2></li>
        <li><h2><Link href={`/products/${productID}`}>Product {productID}</Link></h2></li>
      </ul>
    </div>
  );
}
