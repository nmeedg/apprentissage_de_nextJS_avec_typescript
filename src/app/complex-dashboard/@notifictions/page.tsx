import Link from "next/link"

export default function Notification() {
  return (
    <div className="w-full h-full justify-center flex flex-col items-center shadow-xl">
        <h2 className=" block p-2">Notification</h2>
        <Link href="/complex-dashboard/archived" className=" text-red-500 hover:underline">Archived</Link>
    </div>
  )
}
