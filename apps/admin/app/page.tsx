import { AdminLayout, Button, TalentManager } from "@repo/ui";
import { BarChart2, Users2, Workflow } from "lucide-react";

const sidebarItems = [
  { label: "Talents", icon: Users2, active: true, badge: "12" },
  { label: "Pipelines", icon: Workflow },
  { label: "Reports", icon: BarChart2 }
];

export default function Page() {
  return (
    <AdminLayout
      title="Talent Workspace"
      subtitle="集中管理候选人、合作伙伴与内部角色。"
      actions={<Button>邀请成员</Button>}
      sidebarItems={sidebarItems}
    >
      <TalentManager />
    </AdminLayout>
  );
}
