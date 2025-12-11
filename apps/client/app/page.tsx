import { AdminLayout, Button, TalentManager } from "@repo/ui";
import { Building2, Link2, Users } from "lucide-react";

const sidebarItems = [
  { label: "Talent", icon: Users, active: true, badge: "8" },
  { label: "Partnerships", icon: Link2 },
  { label: "Studios", icon: Building2 }
];

export default function ClientPage() {
  return (
    <AdminLayout
      title="Client Talent Hub"
      subtitle="面向客户成功团队，维护服务专家与顾问资源池。"
      actions={<Button variant="outline">导出 CSV</Button>}
      sidebarItems={sidebarItems}
    >
      <TalentManager />
    </AdminLayout>
  );
}
