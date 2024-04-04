import { FC } from 'react'
import NavLink from './NavLink';


interface Link {
    path: string;
    title: string;
}

interface MobileMenuProps {
    //props for MobileMenu
    links: Link[];
}


const MobileMenu: FC<MobileMenuProps> = ({ links }) => {
    return(
        <ul className="flex flex-col py-4 items-center">
            {/* mapping navLinks array for mobile menu */}
            {
                links.map((link, index) => (
                    <li key={index}>
                        <NavLink href={link.path} title={link.title} />
                    </li>
                ))}
        </ul>
    );
};

export default MobileMenu;
