import { type ReactNode } from "react";

type ContactInfoCardProps = {
  title: string;
  value: string;
  icon?: ReactNode;
  href?: string;
};

export function ContactInfoCard({ title, value, icon, href }: ContactInfoCardProps) {
  return (
    <div className="flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 transition hover:border-white/20 hover:bg-white/[0.07]">
      {/* Icon */}
      {icon && (
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
          {icon}
        </div>
      )}

      {/* Text content */}
      <div className="space-y-1">
        <p className="text-xs font-medium uppercase tracking-wider text-slate-400">
          {title}
        </p>
        {href ? (
          <a
            href={href}
            className="text-sm font-medium text-white transition hover:text-primary"
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            {value}
          </a>
        ) : (
          <p className="text-sm font-medium text-white">{value}</p>
        )}
      </div>
    </div>
  );
}
