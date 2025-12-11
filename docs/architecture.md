# 架构总览

该仓库是一个使用 pnpm workspace 维护的 React/Next.js 单体仓，核心思想是**多应用共享基础设施**。通过 `pnpm-workspace.yaml` 将 `apps/*` 与 `packages/*` 纳入统一依赖树，并在根目录持有 `tsconfig.base.json` 来暴露别名（`@repo/ui`, `@repo/utils`）。

## 应用层

- `apps/admin`、`apps/client`、`apps/vendor` 基于 Next.js App Router，统一 Tailwind、shadcn 设计语言。
- 默认场景是三个门户共用同一 Talent 模块，不同布局通过可组合组件调整。
- 建议一切页面状态使用 React Server Components + Client Components 的组合：数据请求在 Server 层，交互模块包裹 `"use client"`。

## 共享包

| Package       | 说明                                                                 | 规范要点                                                    |
|---------------|----------------------------------------------------------------------|-------------------------------------------------------------|
| `packages/ui` | shadcn 风格基础组件（Button, Card, Badge）与复合模块（AdminLayout） | 1. 组件放在 `src/<domain>`；2. 导出集中在 `src/index.ts`。  |
| `packages/utils` | 工具函数（`cn`、格式化等）                                          | 1. 纯函数，禁止引入 React；2. TypeScript 类型要完整。        |

> **扩展约定**：新增共享能力优先进入 `packages/*`，只有当业务组件高度专用才放到 app 内部。

## 样式系统

- Tailwind 负责布局与 spacing，复杂组件仍可封装在 `packages/ui`。
- 统一配色/半径在 `tailwind.config.ts` 内，App 级别的局部覆盖使用 CSS 变量。

## 构建与运行

| 命令              | 作用                                            |
|-------------------|-------------------------------------------------|
| `pnpm install`    | 在根目录安装所有 workspace 依赖                 |
| `pnpm dev(:app)`  | 启动对应 Next 应用，调试共享组件时也可 watch    |
| `pnpm build`      | 对所有 app 执行 `next build`，同时构建 packages |
| `pnpm lint/test`  | 聚合 lint / test，确保包级脚本正确挂载          |

## 依赖与路径

- 所有应用引用共享 UI/工具时只使用别名：`import { Button } from "@repo/ui"`。
- 各应用独立 `tsconfig.json` 继承 `tsconfig.base.json`，可按需声明 client/server 边界。
- 统一锁定 `pnpm-lock.yaml`，变更后请提交以保持环境一致。

## 数据流/状态建议

1. **Server-First**：数据获取、权限判断等逻辑优先放在 Server Components 或 `lib/` 中的 server helpers。
2. **Client Islands**：表单、拖拽、图表等交互模块放入 `packages/ui/src/modules`，通过 props 控制。
3. **共享 store**：若未来需要跨页面状态，建议新增 `packages/state`（zustand/jotai）而不是在多个 app 中复制逻辑。

## 目录演进指南

- 新增 app：在 `apps/<name>` 下建 Next.js 模板，`pnpm-workspace.yaml` 自动包含。
- 新增 package：使用 `pnpm --filter <pkg> init` 创建，并在根 `package.json` scripts 中挂钩 `build`/`lint`。
- 文档/设计规范集中在 `docs/`，方便 Onboarding。
