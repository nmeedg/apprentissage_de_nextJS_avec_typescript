import Link from "next/link"

export default function ArchivedNotification() {
  return (
    <div className="w-full gap-2 h-full justify-center flex-col flex items-center shadow-xl">
        <h2>Archived Notification</h2>
        <Link href="/complex-dashboard" className=" text-red-500 hover:underline">Default</Link>
    </div>
  )
}
