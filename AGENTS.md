# Repository Guidelines

## Project Structure & Module Organization
- Root `package.json`, `pnpm-workspace.yaml`, and `tsconfig.base.json` define the pnpm workspace spanning `apps/*` and `packages/*`.
- Next.js apps reside in `apps/admin`, `apps/client`, and `apps/vendor`; each app uses the `/app` directory (App Router), Tailwind, and shadcn-inspired layouts.
- Shared UI and utilities live in `packages/ui` and `packages/utils`; consume them via path aliases (`@repo/ui`, `@repo/utils`). Prefer expanding shared primitives in these packages before duplicating code inside apps.

## Build, Test, and Development Commands
- `pnpm install`: installs dependencies for every workspace. Run after pulling new changes.
- `pnpm dev`: starts all app dev servers concurrently (Next defaults to ports 3000/3001/3002; adjust via `NEXT_PUBLIC_PORT` if needed).
- `pnpm dev:admin|client|vendor`: focus on a single portal while iterating.
- `pnpm build`: executes `next build` for each app plus TypeScript builds for shared packages.
- `pnpm lint` / `pnpm test`: cascades linting or test commands across workspaces (add package-level scripts to hook in tooling).

## Coding Style & Naming Conventions
- TypeScript + React across the repo; prefer functional components and hooks. Use strict typing—no `any` unless justified in code comments.
- Follow shadcn UI conventions: Tailwind utility-first styling, `AdminLayout`/`TalentManager` compose shared UI.
- Keep filenames kebab-case (e.g., `talent-manager.tsx`), React components in PascalCase, hooks prefixed with `use`.
- Run `pnpm lint` before pushing to catch TypeScript errors; Tailwind classes should describe layout from outside in.

## Testing Guidelines
- Add component-level tests via React Testing Library/Jest if behavior grows complex; place alongside source as `*.test.ts(x)`.
- Prefer scenario-driven test names (`renders empty state`, `handles talent deletion`). Ensure pnpm scripts invoke your tests so `pnpm test` covers them.

## Commit & Pull Request Guidelines
- Commit messages: short imperative summary (`feat: add vendor talent layout`). Reference issues with `Refs #123` when applicable.
- PRs should describe scope, testing performed (`pnpm dev:admin`, `pnpm lint`), and include screenshots for UI changes. Request review from owners of affected packages/apps when touching shared code.
