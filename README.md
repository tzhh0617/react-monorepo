# React Monorepo Boilerplate

使用 pnpm workspace + TypeScript + React，提供一个开箱即用的 Admin / Client / Vendor Web 端以及共享 UI & Utils 库，可继续扩展更多 SaaS 模块。

## 项目结构

```
react-monorepo
├── apps
│   ├── admin   # Next.js + Tailwind + shadcn 风格组件
│   ├── client  # Vite + React + Tailwind
│   └── vendor  # Vite + React + Tailwind
├── packages
│   ├── ui      # 共享 shadcn 风格 UI 组件
│   └── utils   # 共享工具函数 (cn / formatCurrency 等)
├── package.json
├── pnpm-workspace.yaml
└── tsconfig.base.json
```

## 快速开始

1. 安装依赖（在仓库根目录）

   ```bash
   pnpm install
   ```

2. 开发模式

   ```bash
   pnpm dev:admin   # Next.js Admin Portal
   pnpm dev:client  # Vite Client Portal
   pnpm dev:vendor  # Vite Vendor Console
   ```

   也可以通过 `pnpm dev` 并行启动所有 workspace。

3. 构建

   ```bash
   pnpm build
   ```

## 说明

- 所有应用及共享包共享 `tsconfig.base.json` 中的路径别名 (`@repo/ui`, `@repo/utils`)，无需相对路径地狱。
- Admin 应用预置 Tailwind + shadcn 常用依赖（`class-variance-authority`, `tailwindcss-animate`, `tailwind-merge`），可直接按 shadcn 文档扩展组件。
- Client/Vendor 基于 Vite + React，已经接入 Tailwind，并演示如何直接使用共享 UI 组件和工具函数。
- `pnpm dev`/`pnpm build`/`pnpm lint` 会递归到所有 workspace，方便统一管理。

根据需要继续添加更多 packages (如 `api`, `config` 等) 即可保持结构清晰。
