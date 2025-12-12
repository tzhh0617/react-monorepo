"use client";

import * as React from "react";
import { Button } from "../button";
import { Card, CardContent, CardHeader, CardTitle } from "../card";
import { Badge } from "../badge";
import { Input } from "../input";
import { Label } from "../label";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "../select";

export interface Talent {
  id: number;
  name: string;
  role: string;
  email: string;
  status: "Active" | "Inactive" | "Interview";
}

export interface TalentManagerProps {
  initialTalents?: Talent[];
}

const defaultTalents: Talent[] = [
  { id: 1, name: "Aria Winters", role: "Product Designer", email: "aria@example.com", status: "Active" },
  { id: 2, name: "Noah Patel", role: "Frontend Engineer", email: "noah@example.com", status: "Interview" },
  { id: 3, name: "Lucia Gomez", role: "Customer Success", email: "lucia@example.com", status: "Inactive" }
];

export const TalentManager: React.FC<TalentManagerProps> = ({ initialTalents = defaultTalents }) => {
  const [talents, setTalents] = React.useState(initialTalents);
  const [form, setForm] = React.useState<Omit<Talent, "id"> & { id?: number }>({
    id: undefined,
    name: "",
    role: "",
    email: "",
    status: "Active"
  });

  const isEditing = typeof form.id === "number";

  const resetForm = () =>
    setForm({
      id: undefined,
      name: "",
      role: "",
      email: "",
      status: "Active"
    });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim() || !form.role.trim()) {
      return;
    }

    if (isEditing && typeof form.id === "number") {
      setTalents((current) =>
        current.map((talent) =>
          talent.id === form.id ? { ...talent, ...form, id: form.id } : talent
        )
      );
    } else {
      const nextId = talents.length ? Math.max(...talents.map((t) => t.id)) + 1 : 1;
      setTalents((current) => [
        ...current,
        { id: nextId, name: form.name, role: form.role, email: form.email, status: form.status }
      ]);
    }

    resetForm();
  };

  const handleEdit = (talent: Talent) => {
    setForm(talent);
  };

  const handleDelete = (id: number) => {
    setTalents((current) => current.filter((talent) => talent.id !== id));
    if (form.id === id) {
      resetForm();
    }
  };

  return (
    <div className="grid gap-6 lg:grid-cols-[320px_1fr]">
      <Card>
        <CardHeader>
          <CardTitle>{isEditing ? "更新 Talent" : "新增 Talent"}</CardTitle>
          <p className="text-sm text-slate-500">维护候选人及合作伙伴信息。</p>
        </CardHeader>
        <CardContent>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="space-y-2">
              <Label htmlFor="talent-name">姓名</Label>
              <Input
                id="talent-name"
                name="name"
                value={form.name}
                onChange={(event) => setForm((prev) => ({ ...prev, name: event.target.value }))}
                placeholder="例如：Alex Chen"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="talent-role">角色</Label>
              <Input
                id="talent-role"
                name="role"
                value={form.role}
                onChange={(event) => setForm((prev) => ({ ...prev, role: event.target.value }))}
                placeholder="Product Manager"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="talent-email">邮箱</Label>
              <Input
                id="talent-email"
                type="email"
                name="email"
                value={form.email}
                onChange={(event) => setForm((prev) => ({ ...prev, email: event.target.value }))}
                placeholder="name@company.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="talent-status">状态</Label>
              <Select
                value={form.status}
                onValueChange={(value) => setForm((prev) => ({ ...prev, status: value as Talent["status"] }))}
              >
                <SelectTrigger>
                  <SelectValue placeholder="选择状态" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">Active</SelectItem>
                  <SelectItem value="Interview">Interview</SelectItem>
                  <SelectItem value="Inactive">Inactive</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex gap-3">
              <Button type="submit" className="flex-1">
                {isEditing ? "保存" : "添加"}
              </Button>
              {isEditing ? (
                <Button type="button" variant="secondary" onClick={resetForm}>
                  取消
                </Button>
              ) : null}
            </div>
          </form>
        </CardContent>
      </Card>
      <Card className="overflow-hidden">
        <CardHeader>
          <CardTitle>Talent 列表</CardTitle>
          <p className="text-sm text-slate-500">共 {talents.length} 位</p>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="w-full min-w-[420px] text-left text-sm">
            <thead className="border-b text-xs uppercase tracking-wide text-slate-500">
              <tr>
                <th className="pb-2">姓名</th>
                <th className="pb-2">角色</th>
                <th className="pb-2">邮箱</th>
                <th className="pb-2">状态</th>
                <th className="pb-2 text-right">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {talents.map((talent) => (
                <tr key={talent.id}>
                  <td className="py-3 font-medium text-slate-900">{talent.name}</td>
                  <td className="py-3 text-slate-600">{talent.role}</td>
                  <td className="py-3 text-slate-500">{talent.email}</td>
                  <td className="py-3">
                    <Badge variant={talent.status === "Active" ? "default" : talent.status === "Interview" ? "secondary" : "outline"}>
                      {talent.status}
                    </Badge>
                  </td>
                  <td className="py-3 text-right">
                    <div className="flex justify-end gap-3">
                      <button className="text-sm text-primary" onClick={() => handleEdit(talent)}>
                        编辑
                      </button>
                      <button className="text-sm text-red-500" onClick={() => handleDelete(talent.id)}>
                        删除
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {talents.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-6 text-center text-slate-500">
                    暂无数据
                  </td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </CardContent>
      </Card>
    </div>
  );
};
