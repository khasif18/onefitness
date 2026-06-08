import { cn } from "@/lib/utils";

type SectionHeaderProps = {
  title: string;
  subtitle?: string;
  label?: string;
  align?: "center" | "left";
};

export function SectionHeader({
  title,
  subtitle,
  label,
  align = "center",
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" ? "mx-auto text-center" : "text-left"
      )}
    >
      {label && (
        <p className="text-sm font-medium uppercase tracking-widest text-primary">
          {label}
        </p>
      )}
      <h2
        className={cn(
          "text-2xl font-semibold tracking-tight text-white sm:text-3xl",
          label && "mt-3"
        )}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-sm text-slate-400 sm:text-base">{subtitle}</p>
      )}
    </div>
  );
}
