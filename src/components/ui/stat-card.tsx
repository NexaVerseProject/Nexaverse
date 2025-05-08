import { cva, type VariantProps } from "class-variance-authority";
import { Card, CardContent, CardHeader, CardTitle } from "./card";
import { cn } from "@/lib/utils";

const statCardVariants = cva(
  "overflow-hidden transition-all duration-200 hover:shadow-md",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        primary: "card-gradient text-white",
        secondary: "bg-secondary text-secondary-foreground",
        outline: "border border-border bg-transparent",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface StatCardProps extends VariantProps<typeof statCardVariants> {
  title: string;
  value: string | number;
  icon?: React.ReactNode;
  className?: string;
  valueClassName?: string;
  children?: React.ReactNode;
}

export function StatCard({
  title,
  value,
  icon,
  variant,
  className,
  valueClassName,
  children,
  ...props
}: StatCardProps) {
  return (
    <Card className={cn(statCardVariants({ variant }), className)} {...props}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon && <div className="h-5 w-5 text-muted-foreground">{icon}</div>}
      </CardHeader>
      <CardContent>
        <div className={cn("text-2xl font-bold", valueClassName)}>{value}</div>
        {children && <p className="text-xs text-muted-foreground">{children}</p>}
      </CardContent>
    </Card>
  );
}
