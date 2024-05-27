import Link from "next/link"

export default function F1() {
  return (
    <div>
        <h1 className=" text-3xl font-bold uppercase">F1 page</h1>
        <Link className="text-red-600 underline p-3" href="/f1/f2">F2</Link>
    </div>
  )
}
