export default function ProductDetailsLayout({children}:{
    children:React.ReactNode
}) {
  return (
    <div>
        <h1 style={{
            textDecoration:"underline",
            textAlign: "center"
        }}>Product Details</h1>
        {children}
    </div>
  )
}
