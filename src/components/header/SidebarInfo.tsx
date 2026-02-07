import Image from "next/image";
import Link from "next/link";
import HeaderNewsLetter from "../form/HeaderNewsLetter";
import SocialShareV4 from "../social/SocialShareV4";

import { siteContent } from "@/data/siteContent";

interface SidebarInfoProps {
    openInfoBar: () => void;
    isInfoOpen: boolean;
    closeInfoBar: () => void;
    searchOpen: () => void;
}

const SidebarInfo = ({ isInfoOpen, openInfoBar, closeInfoBar, searchOpen }: SidebarInfoProps) => {
    return (
        <>
            <div className="attr-right">
                <div className="attr-nav attr-box">
                    <ul>
                        <li className="search">
                            <Link href="#" onClick={searchOpen}>
                                <i className="far fa-search" />
                            </Link>
                        </li>
                        <li className="side-menu">
                            <Link href="#" scroll={false} onClick={openInfoBar}>
                                <span className="bar-2" />
                                <span className="bar-3" />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            <div className={`side ${isInfoOpen ? "on" : ""}`}>
                <Link href="#" className="close-side" onClick={closeInfoBar}><i className="icon_close" /></Link>
                <div className="widget">
                    <div className="logo">
                        <Image src={siteContent.brand.logo} alt="Logo" width={545} height={185} />
                    </div>
                    <p>
                        Navigator System is a leading technology services company specializing in IT infrastructure support and modern digital solutions. With over 20 years of experience, we ensure your critical systems stay uptime-first while you focus on building what’s next.
                    </p>
                </div>
                <div className="widget address">
                    <div>
                        <ul>
                            <li>
                                <div className="content">
                                    <p>Address</p>
                                    <strong>{siteContent.brand.address}</strong>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <p>Email</p>
                                    <strong>{siteContent.brand.email}</strong>
                                </div>
                            </li>
                            <li>
                                <div className="content">
                                    <p>Contact</p>
                                    <strong>{siteContent.brand.phone}</strong>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="widget newsletter">
                    <h4>Get Subscribed!</h4>
                    <HeaderNewsLetter />
                </div>
                <div className="widget social">
                    <ul className="link">
                        <SocialShareV4 />
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SidebarInfo;