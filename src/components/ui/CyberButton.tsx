import { cn } from "@/lib/utils";
import Icon from "@mdi/react";
import { Slot } from "@radix-ui/react-slot";

interface CyberButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  variant?: "solid" | "outline";
  size?: "small" | "medium" | "large";
  icon?: string;
  iconClassName?: string;
  showIcon?: boolean;
  animate?: boolean;
  asChild?: boolean;
}

const CyberButton = ({
  text = "A-man 2005",
  variant = "solid",
  size = "large",
  icon,
  iconClassName,
  showIcon = true,
  animate = true,
  className,
  asChild = false,
  ...props
}: CyberButtonProps) => {
  const Comp = asChild ? Slot : "button";
  const variantStyles = variant === "solid"
    ? "bg-primary hover:bg-secondary border-none"
    : "bg-transparent border-2 border-primary hover:bg-primary/10 text-white";

  const sizeStyles = {
    small: "px-4 py-2 text-xs",
    medium: "px-4 py-3 text-sm",
    large: "px-[30px] py-[13px] text-lg",
  }[size];

  const iconSizes = {
    small: "w-2.5 h-2.5",
    medium: "w-3 h-3",
    large: "w-3.5 h-3.5",
  }[size];

  return (
    <Comp
      className={cn(
        "group relative cursor-pointer transition-all duration-300 ease-in-out flex items-center justify-center overflow-hidden flex-shrink-0",
        variantStyles,
        sizeStyles,
        className
      )}
      style={{
        clipPath: "polygon(0% 0%, 64% 0%, 64% 10%, 70% 10%, 75% 1%, 100% 0%, 100% 80%, 95% 100%, 42% 100%, 42% 90%, 34% 90%, 34% 100%, 5% 100%, 0% 80%)"
      }}
      {...props}
    >
      <div className={cn(
        "flex items-center justify-center transition-all duration-[350ms]",
        animate && "animate-cyber-shine"
      )}
        style={{
          WebkitMaskImage: animate ? "linear-gradient(-75deg, rgb(0 0 0) 30%, #000 50%, rgba(0, 0, 0, 0.2) 70%)" : "none",
          WebkitMaskSize: animate ? "200%" : "auto"
        }}>
        <span className="text-inherit text-white mr-[10px] leading-none">
          {text}
        </span>
        {showIcon && (
          <div className={cn("transition-all duration-300 flex items-center justify-center", iconSizes)}>
            {icon ? (
              <Icon path={icon} size={0.8} className={iconClassName} />
            ) : (
              <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
                <path d="M5.536 21.886a1.004 1.004 0 0 0 1.033-.064l13-9a1 1 0 0 0 0-1.644l-13-9A.998.998 0 0 0 5 3v18a1 1 0 0 0 .536.886zM7 4.909 17.243 12 19.091V4.909z" />
              </svg>
            )}
          </div>
        )}
      </div>
    </Comp>
  );
}

export default CyberButton;
