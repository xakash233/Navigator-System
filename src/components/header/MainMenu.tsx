import Link from "next/link";
import { siteContent } from "@/data/siteContent";

interface DataType {
    navbarPlacement?: string;
}

const MainMenu = ({ navbarPlacement }: DataType) => {
    return (
        <>
            <ul className={`nav navbar-nav ${navbarPlacement ? navbarPlacement : ""}`} data-in="fadeInDown" data-out="fadeOutUp">
                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" >Company</Link>
                    <ul className="dropdown-menu">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/leadership-team">Leadership / Team</Link></li>
                        <li><Link href="/partners">Strategic Partners</Link></li>
                        <li><Link href="/careers">Careers</Link></li>
                        <li><Link href="/contact">Contact</Link></li>
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" >Infrastructure Support</Link>
                    <ul className="dropdown-menu">
                        {siteContent.services.infrastructure.map(service => (
                            <li key={service.id}><Link href={`/infrastructure/${service.id}`}>{service.title}</Link></li>
                        ))}
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" >Technology Delivery</Link>
                    <ul className="dropdown-menu">
                        {siteContent.services.technology.map(service => (
                            <li key={service.id}><Link href={`/technology/${service.id}`}>{service.title}</Link></li>
                        ))}
                    </ul>
                </li>

                <li className="dropdown">
                    <Link href="#" className="dropdown-toggle" data-toggle="dropdown" >Resources</Link>
                    <ul className="dropdown-menu">
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
