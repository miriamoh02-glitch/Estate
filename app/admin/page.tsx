import { Building2, Users, Calendar, BarChart3 } from "lucide-react";

export const metadata = { title: "Admin" };

const modules = [
  { icon: Building2, title: "Listings", desc: "Create, edit, approve properties", stat: "2,847" },
  { icon: Users, title: "Inquiries", desc: "Track leads and conversions", stat: "142 new" },
  { icon: Calendar, title: "Viewings", desc: "Manage schedules & confirmations", stat: "28 today" },
  { icon: BarChart3, title: "Analytics", desc: "Traffic, conversions, trends", stat: "+12%" },
];

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-muted/20 pt-28 pb-section-sm">
      <div className="mx-auto max-w-editorial px-6 lg:px-10">
        <p className="text-[10px] uppercase tracking-widest text-accent">Admin Portal</p>
        <h1 className="mt-2 font-display text-display-md text-primary">Operations Dashboard</h1>
        <p className="mt-2 text-secondary">
          RBAC-protected admin area — full implementation in Phase 5.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {modules.map((m) => (
            <div
              key={m.title}
              className="border border-border bg-card p-6 transition-shadow hover:shadow-luxury-sm"
            >
              <m.icon className="h-6 w-6 text-accent" />
              <p className="mt-4 text-2xl font-display text-primary">{m.stat}</p>
              <h2 className="mt-1 font-medium text-primary">{m.title}</h2>
              <p className="mt-1 text-xs text-secondary">{m.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
