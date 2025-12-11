# 代码规范与协作约定

## 通用原则

1. **TypeScript First**：所有模块都开启 `strict`，不要使用 `any`。如需绕过类型，必须在代码中解释原因。
2. **单一职责**：组件/函数长度控制在可读范围，必要时拆分为 hooks (`useXYZ`) 或 util。
3. **默认 ASCII**：除展示文案外，代码中避免奇怪字符，确保跨平台一致。

## React & Next.js

- 客户端交互组件首行写 `"use client"`，并限制在必须的文件。
- 使用函数组件 + Hooks；复杂副作用封装成自定义 hooks。
- App Router 下的 `page.tsx` 保持「数据准备 + 布局」的角色，业务组件下沉到 `components/` 或共享包。
- 异步数据获取优先用 Server Component `async` 函数或 `fetch`/`getX` helpers，不在客户端重复请求。

## 命名与文件

- 文件统一 kebab-case：`talent-board.tsx`。
- 组件/Hook 分别用 PascalCase/`use` 前缀，类型接口用 PascalCase。
- UI primitives 放在 `packages/ui/src/<category>`，并从 `src/index.ts` 导出。
- 页面内局部组件放在 `apps/<app>/app/(sections)/components/`。

## 样式规范

- Tailwind 规则：由外到内描述布局（尺寸→排版→状态），尽量保持 class 顺序稳定。
- 可复用的配色、阴影等抽到 `packages/ui` 中的组件 props，避免魔法数散落各处。
- 少量全局样式写在 `app/globals.css`，避免修改 `node_modules`。

## 测试&质量

- 新增复杂组件（含状态切换/异步）的同时编写 `*.test.ts(x)`，使用 React Testing Library。
- 所有 PR 在本地运行 `pnpm lint`，必要时补充 `pnpm test`。
- 若引入第三方库，更新 README/docs，并解释用途。

## Git 流程

1. 分支命名：`feat/<scope>-<summary>`、`fix/…`、`chore/…`。
2. Commit 信息使用祈使句：`feat: add vendor talent layout`。
3. PR 描述包括：变更摘要、影响范围、测试命令（如 `pnpm dev:admin`、`pnpm lint`）以及 UI 截图。

## 代码评审清单

- ✅ props/状态是否严格类型化？
- ✅ 是否复用了 `@repo/ui` / `@repo/utils`？
- ✅ 是否存在重复逻辑可抽象？
- ✅ 是否提供必要的无障碍（aria、语义标签）？
- ✅ 是否在 docs/ 或 README 中同步了新增规范？
