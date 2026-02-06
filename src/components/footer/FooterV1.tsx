import Image from "next/image";
import Link from "next/link";
import NewsLetterForm from "../form/NewsLetterForm";
import SocialShareV1 from "../social/SocialShareV1";
import { siteContent } from "@/data/siteContent";

const FooterV1 = () => {
    return (
        <>
            <footer className="bg-dark text-light bg-cover" style={{ backgroundImage: 'url(/assets/img/shape/banner-8.jpg)' }}>
                <div className="footer-shape">
                    <div className="item">
                        <Image src="/assets/img/shape/7.png" alt="Shape" width={282} height={748} />
                    </div>
                    <div className="item">
                        <Image src="/assets/img/shape/9.png" alt="Shape" width={100} height={100} />
                    </div>
                </div>
                <div className="container">
                    <div className="f-items relative pt-70 pb-120 pt-xs-0 pb-xs-50">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                                <div className="f-item about">
                                    <Image className="logo" src="/assets/img/logo-light-solid.png" alt="Logo" width={545} height={185} />
                                    <p>
                                        {siteContent.brand.tagline}
                                    </p>
                                    <div className="opening-hours">
                                        <h5>We are available</h5>
                                        <ul>
                                            <li>
                                                <div className="working-day">Monday – Friday:</div>
                                                <div className="marker" />
                                                <div className="working-hour">9am – 6pm</div>
                                            </li>
                                            <li>
                                                <div className="working-day">Saturday - Sunday:</div>
                                                <div className="marker" />
                                                <div className="working-hour">Closed</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Company</h4>
                                    <ul>
                                        <li><Link href="/about">About Us</Link></li>
                                        <li><Link href="/leadership-team">Leadership</Link></li>
                                        <li><Link href="/careers">Careers</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                        <li><Link href="/resources/case-studies">Case Studies</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title">Services</h4>
                                    <ul>
                                        {/* Displaying a mix of top services to save space */}
                                        <li><Link href="/infrastructure/server-maintenance-support">Server Maintenance</Link></li>
                                        <li><Link href="/infrastructure/amc-services">AMC Services</Link></li>
                                        <li><Link href="/technology/website-development">Web Development</Link></li>
                                        <li><Link href="/technology/cloud-services">Cloud Services</Link></li>
                                        <li><Link href="/technology/ai-automation">AI & Automation</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-item">
                                <h4 className="widget-title">Newsletter</h4>
                                <p>
                                    Join our subscribers list to get the latest <br /> news and special offers.
                                </p>
                                <div className="f-item newsletter">
                                    <NewsLetterForm />
                                </div>
                                <ul className="footer-social">
                                    <SocialShareV1 />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start Footer Bottom */}
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <p>&copy; Copyright {new Date().getFullYear()} {siteContent.brand.name}. All Rights Reserved</p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul>
                                    <li><Link href="/terms-conditions">Terms</Link></li>
                                    <li><Link href="/privacy-policy">Privacy</Link></li>
                                    <li><Link href="/resources/faqs">FAQs</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;
