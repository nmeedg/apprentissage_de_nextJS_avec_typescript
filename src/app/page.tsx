import Link from "next/link"

export default function Home() {
  return (
    <div>
     <h1>Welcome Home !</h1>
     <nav>
      barre de navigation
      <ul>
        <li><Link href="/blog">Blog</Link></li>
        <li><Link href="/products">Products</Link></li>
      </ul>
     </nav>
    </div>
  )
}
