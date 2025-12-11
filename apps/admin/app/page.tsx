import { AdminLayout, Badge, Button, Card, CardContent, CardHeader, CardTitle, TalentManager } from "@repo/ui";
import {
  Activity,
  BellRing,
  Calendar,
  KanbanSquare,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Users2,
  Workflow
} from "lucide-react";

const sidebarItems = [
  { label: "Talents", icon: Users2, active: true, badge: "12" },
  { label: "Pipelines", icon: Workflow },
  { label: "Insights", icon: TrendingUp }
];

const overviewMetrics = [
  {
    label: "活跃人才库",
    value: "128",
    delta: "+18.2%",
    description: "本月新增",
    icon: Users2,
    progress: 72
  },
  {
    label: "面试进行中",
    value: "9",
    delta: "4 场今天",
    description: "面试进度",
    icon: Calendar,
    progress: 45
  },
  {
    label: "签约成功率",
    value: "64%",
    delta: "+6.1%",
    description: "环比上月",
    icon: ShieldCheck,
    progress: 64
  },
  {
    label: "自动化任务",
    value: "23",
    delta: "5 个延迟",
    description: "Workflow 状态",
    icon: KanbanSquare,
    progress: 38
  }
];

const pipelineStages = [
  {
    title: "发现・评估",
    accent: "border-none bg-sky-100 text-sky-700",
    candidates: [
      { name: "Sora Lee", role: "产品经理", status: "简历待筛" },
      { name: "Dylan Zhang", role: "数据科学家", status: "已指派评审" }
    ]
  },
  {
    title: "面试・协作",
    accent: "border-none bg-violet-100 text-violet-700",
    candidates: [
      { name: "Jiro Tan", role: "前端工程师", status: "今日面试" },
      { name: "Nora Kim", role: "UX 研究员", status: "等待反馈" }
    ]
  },
  {
    title: "Offer・签约",
    accent: "border-none bg-emerald-100 text-emerald-700",
    candidates: [
      { name: "Leo Costa", role: "技术顾问", status: "Offer 已发出" },
      { name: "Ambre Felix", role: "运维专家", status: "法务审核" }
    ]
  }
];

const upcomingEvents = [
  {
    title: "AI 产品主管・二面",
    time: "09:30 - 10:30",
    owner: "Bella",
    type: "在线面试"
  },
  {
    title: "季度人才池复盘",
    time: "11:00 - 12:00",
    owner: "Ops 团队",
    type: "研讨会"
  },
  {
    title: "签约审批同步",
    time: "14:00 - 14:30",
    owner: "Legal",
    type: "审批"
  }
];

export default function Page() {
  return (
    <AdminLayout
      title="Talent Workspace"
      subtitle="集中管理候选人、合作伙伴与内部角色。"
      actions={
        <>
          <Button variant="ghost" size="sm">
            <BellRing className="mr-2 h-4 w-4" />
            即时提醒
          </Button>
          <Button size="sm">
            <Sparkles className="mr-2 h-4 w-4" />
            创建自动化
          </Button>
        </>
      }
      sidebarItems={sidebarItems}
    >
      <div className="space-y-8">
        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {overviewMetrics.map((metric) => (
            <Card key={metric.label} className="border-slate-200">
              <CardHeader className="flex flex-row items-center justify-between border-none pb-0">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">{metric.description}</p>
                  <CardTitle className="mt-1 text-base text-slate-600">{metric.label}</CardTitle>
                </div>
                <div className="rounded-full bg-slate-100 p-2 text-slate-600">
                  <metric.icon className="h-4 w-4" />
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-3xl font-semibold text-slate-900">{metric.value}</p>
                <p className="text-sm text-emerald-600">{metric.delta}</p>
                <div className="mt-4 h-2 rounded-full bg-slate-100">
                  <div
                    className="h-2 rounded-full bg-slate-900 transition-all"
                    style={{ width: `${metric.progress}%` }}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[2fr_1fr]">
          <Card className="border-slate-200">
            <CardHeader className="flex flex-row items-center justify-between border-none">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Workflow</p>
                <CardTitle className="text-xl">Pipeline 预览</CardTitle>
              </div>
              <Button variant="outline" size="sm">
                查看全部
              </Button>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-3">
              {pipelineStages.map((stage) => (
                <div key={stage.title} className="rounded-2xl border border-slate-100 bg-slate-50/70 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-semibold text-slate-700">{stage.title}</p>
                    <Badge variant="outline" className={stage.accent}>
                      {stage.candidates.length}
                    </Badge>
                  </div>
                  <div className="mt-4 space-y-3">
                    {stage.candidates.map((candidate) => (
                      <div key={candidate.name} className="rounded-xl bg-white p-3 shadow-sm">
                        <p className="text-sm font-semibold text-slate-900">{candidate.name}</p>
                        <p className="text-xs text-slate-500">{candidate.role}</p>
                        <Badge variant="outline" className="mt-2">
                          {candidate.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
          <div className="space-y-6">
            <Card className="border-slate-200">
              <CardHeader className="flex flex-row items-start justify-between border-none pb-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">事件</p>
                  <CardTitle className="text-xl">今日日程</CardTitle>
                </div>
                <Badge variant="outline" className="gap-1">
                  <Calendar className="h-3.5 w-3.5" /> 3
                </Badge>
              </CardHeader>
              <CardContent className="space-y-4">
                {upcomingEvents.map((event) => (
                  <div key={event.title} className="rounded-2xl border border-slate-100 p-4">
                    <div className="flex items-center justify-between">
                      <p className="font-semibold text-slate-900">{event.title}</p>
                      <Badge variant="outline">{event.type}</Badge>
                    </div>
                    <p className="mt-2 text-sm text-slate-600">{event.time}</p>
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{event.owner}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card className="border-slate-200">
              <CardHeader className="flex flex-row items-center gap-3 border-none">
                <div className="rounded-full bg-slate-900/90 p-2 text-white">
                  <Activity className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-slate-400">自动洞察</p>
                  <CardTitle className="text-xl">本周亮点</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="rounded-xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900">人才来源</p>
                  <p className="text-sm text-slate-500">社区推荐贡献 42% Offer，通过率最高。</p>
                </div>
                <div className="rounded-xl border border-slate-100 p-4">
                  <p className="font-semibold text-slate-900">流程健康度</p>
                  <p className="text-sm text-slate-500">面试反馈平均 4.2 小时，团队响应领先 87% 企业。</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <TalentManager />
      </div>
    </AdminLayout>
  );
}
