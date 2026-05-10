import Link from "next/link";

type Variant = "primary" | "secondary" | "tertiary";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-sage-400 text-sage-50 border border-sage-400 hover:bg-olive-800 hover:border-olive-800",
  secondary:
    "bg-sage-50 text-sage-400 border border-sage-400 hover:bg-sage-100",
  tertiary: "bg-transparent text-sage-400 underline hover:text-olive-800",
};

const base =
  "font-heading text-sm tracking-[0.05em] uppercase px-8 py-3 rounded-full transition-colors inline-block";

export default function Button({
  href,
  onClick,
  variant = "primary",
  children,
  className = "",
  external = false,
}: ButtonProps) {
  const classes = `${base} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
