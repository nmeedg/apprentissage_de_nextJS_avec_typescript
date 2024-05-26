export default function ProductDetailsLayout({children}:{
    children:React.ReactNode
}) {
  return (
    <div>
        {children}
        <h1 className=" font-bold text-green-600">Product Features</h1>
    </div>
  )
}
