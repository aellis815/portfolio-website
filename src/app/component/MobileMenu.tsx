import { FC } from 'react'
import NavLink from './NavLink';
import { MouseEventHandler } from 'react';

interface Link {
    path: string;
    title: string;
}

interface MobileMenuProps {
    //props for MobileMenu
    links: Link[];
    onClick?: MouseEventHandler<HTMLButtonElement>;
}


const MobileMenu: FC<MobileMenuProps> = ({ links, onClick}) => {
    return (
        <ul className="flex flex-col py-4 items-center">
            {/* mapping navLinks array for mobile menu */}
            {
                links.map((link, index) => (
                    <button onClick={onClick}>
                        <li key={index}>
                            <NavLink href={link.path} title={link.title} />
                        </li>
                    </button>
                ))}
        </ul>
    );
};

export default MobileMenu;
