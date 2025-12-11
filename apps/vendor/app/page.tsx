import { AdminLayout, Button, TalentManager } from "@repo/ui";
import { ActivitySquare, ShieldCheck, UsersRound } from "lucide-react";

const sidebarItems = [
  { label: "Vendors", icon: UsersRound, active: true, badge: "24" },
  { label: "Compliance", icon: ShieldCheck },
  { label: "Operations", icon: ActivitySquare }
];

export default function VendorPage() {
  return (
    <AdminLayout
      title="Vendor Talent Console"
      subtitle="面向供应商团队的候选人/合作伙伴统一视图。"
      actions={
        <div className="flex gap-3">
          <Button variant="ghost">同步目录</Button>
          <Button variant="secondary">导入</Button>
        </div>
      }
      sidebarItems={sidebarItems}
    >
      <TalentManager />
    </AdminLayout>
  );
}
