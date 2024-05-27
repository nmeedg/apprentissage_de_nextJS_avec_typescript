export default function DashboardLayout({
  children,
  revenu,
  notifictions,
  users,
}: {
  children: React.ReactNode;
  revenu: React.ReactNode;
  notifictions: React.ReactNode;
  users: React.ReactNode;
}) {
  return <div>
    <div>{children}</div>;
    <div className=" grid grid-cols-2 font-bold">
        <div className="h-[160px]">{users}</div>
        <div className="h-full row-start-1 row-end-3">{notifictions}</div>
        <div className="h-[160px]">{revenu}</div>
    </div>
  </div>
}
