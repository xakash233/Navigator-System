import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import useSubMenuToggle from "@/hooks/useSubMenuToggle";

interface DataType {
    navbarPlacement?: string;
}

const MainMenu = ({ navbarPlacement }: DataType) => {
    const { toggleSubMenu, isMenuOpen, getMenuStyle } = useSubMenuToggle();

    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className={`dropdown ${isMenuOpen('company') ? 'on' : ''}`}>
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={() => toggleSubMenu('company')}>Company</Link>
                    <ul className="dropdown-menu" style={getMenuStyle('company')}>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/leadership-team">Leadership / Team</Link></li>
                        <li><Link href="/partners">Strategic Partners</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                        <li><Link href="/terms-conditions">Terms and Conditions</Link></li>
                    </ul>
                </li>

                <li className={`dropdown ${isMenuOpen('infrastructure') ? 'on' : ''}`}>
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={() => toggleSubMenu('infrastructure')}>Infrastructure Support</Link>
                    <ul className="dropdown-menu" style={getMenuStyle('infrastructure')}>
                        {siteContent.services.infrastructure.map(service => (
                            <li key={service.id}><Link href={`/infrastructure/${service.id}`}>{service.title}</Link></li>
                        ))}
                    </ul>
                </li>

                <li className={`dropdown ${isMenuOpen('technology') ? 'on' : ''}`}>
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={() => toggleSubMenu('technology')}>Technology Delivery</Link>
                    <ul className="dropdown-menu" style={getMenuStyle('technology')}>
                        {siteContent.services.technology.map(service => (
                            <li key={service.id}><Link href={`/technology/${service.id}`}>{service.title}</Link></li>
                        ))}
                    </ul>
                </li>

                <li className={`dropdown ${isMenuOpen('resources') ? 'on' : ''}`}>
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" onClick={() => toggleSubMenu('resources')}>Resources</Link>
                    <ul className="dropdown-menu" style={getMenuStyle('resources')}>
                        <li><Link href="/resources/case-studies">Case Studies</Link></li>
                        <li><Link href="/resources/blog">Blog</Link></li>
                        <li><Link href="/resources/faqs">FAQs</Link></li>
                    </ul>
                </li>
            </ul>
        </>
    );
};

export default MainMenu;
