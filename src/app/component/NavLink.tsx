import Link from 'next/link'
import { FC, MouseEventHandler } from 'react'

interface NavLinkProps {
    href: string
    title: string
}

const NavLink: FC<NavLinkProps> = ({ href, title}) => {
    return (

        <Link
            href={href}
            className="block py-3 pl-3 pr-3 text-slate-300 sm:text-xl rounded md:p-0 hover:text-white"
            scroll={false}
            >
                {title}
            
        </Link >

    );
};

export default NavLink;

