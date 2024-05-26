export default function AuthLayout({children}) {
  return (
    <div>
      <h1 style={{
        color:"blue",
        textDecoration:"underline",
        textAlign:"center"
      }}>Auth Layout</h1>
      {children}
    </div>
  );
}
