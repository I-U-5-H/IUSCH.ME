import { Button as ButtonPrimitive } from "@base-ui/react/button"
import { cva } from "class-variance-authority";
import { cn } from "cn"

const buttonVariants = cva(
  // Base styles: Chunky borders, bold uppercase text, and tactile click physics
  "group/button inline-flex shrink-0 items-center justify-center rounded-xl border-2 font-black uppercase tracking-widest transition-all outline-none select-none disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Main Space Button (Deep Purple/Indigo with bright shadow)
        default:
          "bg-indigo-500 text-white border-indigo-300 shadow-[4px_4px_0px_0px_#a5b4fc] hover:bg-indigo-400 hover:-translate-y-0.5 active:translate-y-[4px] active:translate-x-[4px] active:shadow-none",

        // Hologram Button (Dark with Neon Cyan borders and shadows)
        outline:
          "bg-zinc-950 text-sky-400 border-sky-400 shadow-[4px_4px_0px_0px_#38bdf8] hover:bg-zinc-900 hover:-translate-y-0.5 active:translate-y-[4px] active:translate-x-[4px] active:shadow-none",

        // Alien/Fun Button (Vibrant Fuchsia)
        secondary:
          "bg-fuchsia-500 text-white border-fuchsia-300 shadow-[4px_4px_0px_0px_#f0abfc] hover:bg-fuchsia-400 hover:-translate-y-0.5 active:translate-y-[4px] active:translate-x-[4px] active:shadow-none",

        // Simple floating text (No chunky borders, just bold text that hops)
        ghost:
          "text-zinc-300 hover:text-white hover:bg-white/10 hover:-translate-y-1 active:translate-y-0",

        // Danger/Rocket Button (Bright Orange/Red)
        destructive:
          "bg-rose-500 text-white border-rose-300 shadow-[4px_4px_0px_0px_#fda4af] hover:bg-rose-400 hover:-translate-y-0.5 active:translate-y-[4px] active:translate-x-[4px] active:shadow-none",

        // Text link with a cartoonish wavy underline
        link:
          "text-sky-400 underline decoration-wavy decoration-2 underline-offset-4 hover:text-sky-300",
      },
      size: {
        // Made the default sizes slightly taller/wider to accommodate the cartoonish bulk
        default: "h-12 px-6 text-sm",
        xs: "h-8 px-3 text-xs rounded-lg",
        sm: "h-10 px-4 text-xs",
        lg: "h-14 px-8 text-base rounded-2xl",
        icon: "size-12",
        "icon-xs": "size-8 rounded-lg",
        "icon-sm": "size-10",
        "icon-lg": "size-14 rounded-2xl",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant = "default",
  size = "default",
  ...props
}) {
  return (
    <ButtonPrimitive
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants }