import { cn } from "../../lib/util";
import { NavItemType } from "../Header/MainNav";
import { Button, type ButtonProps } from "./Button";
import FlipLink from "./FlipLink";
import Magnetic from "./Magnetic";
//======================================Shiny Background

export interface ShinyBgButtonProps extends ButtonProps {
	content: string;
  handleClick: () => void;
  navItem: NavItemType;
  isActive?: boolean;
	linkClassName?: string;
}

export const ShinyBgButton = ({  navItem, linkClassName, content, handleClick, ...props }: ShinyBgButtonProps) => {
  return (
    <Magnetic>
      <Button
        {...props}
        className={cn(
					`${props.className}`,
          "relative rounded-lg tracking-wide overflow-hidden duration-[2200ms] shadow-md",
          " text-white bg-gfc-accent hover:bg-neutral-800 uppercase font-black",
          "before:absolute before:inset-0 before:bg-[length:200%_100%] before:animate-bg-shine",
          "before:bg-[linear-gradient(110deg,transparent,45%,rgba(255,255,255,0.4),55%,transparent)]"
        )}
      >
        <FlipLink
          item={navItem}
          isActive={false}
          fontSize="20px"
          secondTextColor="text-gray-50"
          className={linkClassName}
          handleClick={handleClick}
        >
          {content}
        </FlipLink>
      </Button>
    </Magnetic>
  );
};
