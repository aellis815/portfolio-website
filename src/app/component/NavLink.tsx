import Link from 'next/link'
import { FC, MouseEvent } from 'react'

interface NavLinkProps {
    href: string
    title: string
}

const NavLink: FC<NavLinkProps> = ({ href, title }) => {
    //event handler for smoothly scrolling to the target element
    const handleScroll = (e: MouseEvent<HTMLAnchorElement>) => {
        //stop the default behavior of the tag (might be unncessary for NextJs LINK)
        e.preventDefault();

        
        const href = e.currentTarget.href;
        if (href.includes('#')) {
            const targetId = href.replace(/.*\#/, '');
            const elem = document.getElementById(targetId);
            elem?.scrollIntoView({ behavior: 'smooth' });
        }  else {
            // If href doesn't contain '#', navigate to the page normally
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }
    };
        return (

            <Link
                href={href}
                className="block py-3 pl-3 pr-3 text-slate-300 sm:text-xl rounded md:p-0 hover:text-white"
                onClick={handleScroll}
            >
                {title}

            </Link >

        );
    };

    export default NavLink;

