import { Shield, Flag, FileText, Database } from "lucide-react";

export const metadata = { title: "Super Admin" };

const modules = [
  { icon: Shield, title: "RBAC Management", desc: "Roles, permissions, assignments" },
  { icon: FileText, title: "Audit Logs", desc: "System activity & compliance" },
  { icon: Flag, title: "Feature Flags", desc: "Toggle platform capabilities" },
  { icon: Database, title: "Backups & Exports", desc: "Data integrity & recovery" },
];

export default function SuperAdminPage() {
  return (
    <div className="min-h-screen bg-primary pt-28 pb-section-sm text-primary-foreground">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <p className="text-[10px] uppercase tracking-widest text-accent">Super Admin</p>
        <h1 className="mt-2 font-display text-display-md">System Control</h1>
        <p className="mt-2 text-primary-foreground/70">
          Enterprise governance — full implementation in Phase 5.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {modules.map((m) => (
            <div
              key={m.title}
              className="border border-primary-foreground/10 p-8 transition-colors hover:border-accent/50"
            >
              <m.icon className="h-6 w-6 text-accent" />
              <h2 className="mt-4 font-display text-xl">{m.title}</h2>
              <p className="mt-2 text-sm text-primary-foreground/60">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
