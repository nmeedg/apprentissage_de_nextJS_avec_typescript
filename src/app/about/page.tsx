import { Metadata } from "next"

export const metadata:Metadata = {
  title:"About",
}

export default function About():JSX.Element {
  return (
    <div>
        <h1>About of our enterprise</h1>
    </div>
  )
}