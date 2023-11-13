'use client';

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { Interface } from "readline";

interface SideBarProps { children: React.ReactNode }

const Sidebar: React.FC<SideBarProps> = ({ children }) => {
    const pathName = usePathname();

    const routes = useMemo(() => [
        {
            label: 'Home',
            href: '/',
            active: pathName === '/'
        },
        {
            label: 'Search',
            hrefL: '/search',
            active: pathName === '/search'
        }
    ], [pathName]) // when pathName changes, useMemo will re-run

    return (
        <div>
            {children}
        </div>
    )
}

export default Sidebar;