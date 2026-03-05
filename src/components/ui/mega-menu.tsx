import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export type MegaMenuItem = {
    id: number;
    label: string;
    subMenus?: {
        title: string;
        items: {
            label: string;
            description: string;
            icon: React.ElementType;
            link?: string;
        }[];
    }[];
    link?: string;
};

export interface MegaMenuProps extends React.HTMLAttributes<HTMLUListElement> {
    items: MegaMenuItem[];
    className?: string;
}

const MegaMenu = React.forwardRef<HTMLUListElement, MegaMenuProps>(
    ({ items, className, ...props }, ref) => {
        const [openMenu, setOpenMenu] = React.useState<string | null>(null);
        const [isHover, setIsHover] = React.useState<number | null>(null);

        const handleHover = (menuLabel: string | null) => {
            setOpenMenu(menuLabel);
        };

        return (
            <ul
                ref={ref}
                className={`relative flex items-center space-x-0 ${className || ""}`}
                {...props}
            >
                {items.map((navItem) => (
                    <li
                        key={navItem.label}
                        className="static"
                        onMouseEnter={() => handleHover(navItem.label)}
                        onMouseLeave={() => handleHover(null)}
                    >
                        <button
                            className="relative flex cursor-pointer items-center justify-center gap-1 py-1.5 px-4 text-sm text-white/50 transition-colors duration-300 hover:text-white group"
                            onMouseEnter={() => setIsHover(navItem.id)}
                            onMouseLeave={() => setIsHover(null)}
                        >
                            <span>{navItem.label}</span>
                            {navItem.subMenus && (
                                <ChevronDown
                                    className={`h-4 w-4 transition-transform duration-300 group-hover:rotate-180 ${openMenu === navItem.label ? "rotate-180" : ""
                                        }`}
                                />
                            )}
                            {(isHover === navItem.id || openMenu === navItem.label) && (
                                <motion.div
                                    layoutId="hover-bg"
                                    className="absolute inset-0 size-full bg-white/10"
                                    style={{
                                        borderRadius: 99,
                                    }}
                                />
                            )}
                        </button>

                        <AnimatePresence>
                            {openMenu === navItem.label && navItem.subMenus && (
                                <div className="fixed left-0 top-[60px] md:top-[80px] w-full pt-2 z-50 px-4 md:px-8 flex justify-start">
                                    <motion.div
                                        className="w-full max-w-[1400px] border border-white/10 bg-[#0A0A0A]/95 backdrop-blur-md p-6 shadow-2xl"
                                        style={{
                                            borderRadius: 16,
                                        }}
                                        layoutId="menu"
                                    >
                                        <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
                                            {navItem.subMenus.map((sub) => (
                                                <motion.div layout className="w-full" key={sub.title}>
                                                    <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-white/40">
                                                        {sub.title}
                                                    </h3>
                                                    <ul className="space-y-3">
                                                        {sub.items.map((item) => {
                                                            const Icon = item.icon;
                                                            return (
                                                                <li key={item.label}>
                                                                    <a
                                                                        href={item.link || "#"}
                                                                        className="flex items-start space-x-2 group"
                                                                    >
                                                                        <div className="flex size-7 shrink-0 items-center justify-center rounded border border-white/20 text-white/70 transition-colors duration-300 group-hover:bg-white group-hover:text-[#0A0A0A]">
                                                                            <Icon className="h-4 w-4 flex-none" />
                                                                        </div>
                                                                        <div className="w-full leading-tight">
                                                                            <p className="shrink-0 text-xs mt-1 font-medium text-white/80 group-hover:text-white transition-colors duration-300">
                                                                                {item.label}
                                                                            </p>
                                                                            {item.description && (
                                                                                <p className="shrink-0 text-[10px] text-white/40 transition-colors duration-300 group-hover:text-white/70 mt-0.5">
                                                                                    {item.description}
                                                                                </p>
                                                                            )}
                                                                        </div>
                                                                    </a>
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                </div>
                            )}
                        </AnimatePresence>
                    </li>
                ))}
            </ul>
        );
    }
);

MegaMenu.displayName = "MegaMenu";

export default MegaMenu;
