import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata = { title: "Sign In" };

export default function AuthPage() {
  return (
    <div className="flex min-h-[80vh] items-center justify-center px-6 pt-28">
      <div className="w-full max-w-md border border-border bg-card p-10 shadow-luxury-sm">
        <h1 className="font-display text-3xl text-primary">Welcome Back</h1>
        <p className="mt-2 text-sm text-secondary">
          Sign in to save properties, schedule viewings, and track inquiries.
        </p>
        <form className="mt-8 space-y-4">
          <input
            type="email"
            placeholder="Email"
            className="w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-accent"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border-b border-border bg-transparent py-3 text-sm outline-none focus:border-accent"
          />
          <Button type="submit" variant="accent" className="w-full">
            Sign In
          </Button>
        </form>
        <p className="mt-6 text-center text-xs text-secondary">
          No account?{" "}
          <Link href="/auth" className="text-accent underline-offset-4 hover:underline">
            Create one
          </Link>
        </p>
        <p className="mt-4 text-center text-[10px] text-secondary/70">
          Phase 2 will connect Supabase Auth
        </p>
      </div>
    </div>
  );
}
