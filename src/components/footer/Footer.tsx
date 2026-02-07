import Image from "next/image";
import Link from "next/link";
import NewsLetterForm from "../form/NewsLetterForm";
import SocialShareV1 from "../social/SocialShareV1";
import { siteContent } from "@/data/siteContent";

const FooterV1 = () => {
    return (
        <>
            <style jsx>{`
                .footer-item ul li a:hover {
                    color: #3182CE !important;
                }
                .footer-bottom ul li a:hover {
                    color: #fff !important;
                }
            `}</style>
            <footer className="bg-light" style={{ backgroundImage: 'url(/assets/img/shape/map-light.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="container">
                    <div className="f-items relative pt-70 pb-120 pt-xs-0 pb-xs-50">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                                <div className="f-item about">
                                    <Image className="logo" src={siteContent.brand.logo} alt="Logo" width={545} height={185} />
                                    <p className="text-secondary">
                                        {siteContent.brand.tagline}
                                    </p>
                                    <div className="opening-hours">
                                        <h5 className="text-dark">We are available</h5>
                                        <ul className="text-secondary">
                                            <li>
                                                <div className="working-day text-dark">Monday – Friday:</div>
                                                <div className="marker" />
                                                <div className="working-hour text-secondary">9am – 6pm</div>
                                            </li>
                                            <li>
                                                <div className="working-day text-dark">Saturday - Sunday:</div>
                                                <div className="marker" />
                                                <div className="working-hour text-secondary">Closed</div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title text-dark">Company</h4>
                                    <ul className="text-secondary">
                                        <li><Link href="/about" className="text-secondary">About Us</Link></li>
                                        <li><Link href="/leadership-team" className="text-secondary">Leadership</Link></li>
                                        <li><Link href="/careers" className="text-secondary">Careers</Link></li>
                                        <li><Link href="/contact" className="text-secondary">Contact</Link></li>
                                        <li><Link href="/resources/case-studies" className="text-secondary">Case Studies</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title text-dark">Services</h4>
                                    <ul className="text-secondary">
                                        {/* Displaying a mix of top services to save space */}
                                        <li><Link href="/infrastructure/server-maintenance-support" className="text-secondary">Server Maintenance</Link></li>
                                        <li><Link href="/infrastructure/amc-services" className="text-secondary">AMC Services</Link></li>
                                        <li><Link href="/technology/website-development" className="text-secondary">Web Development</Link></li>
                                        <li><Link href="/technology/cloud-services" className="text-secondary">Cloud Services</Link></li>
                                        <li><Link href="/technology/ai-automation" className="text-secondary">AI & Automation</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 footer-item">
                                <h4 className="widget-title text-dark">Newsletter</h4>
                                <p className="text-secondary">
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
                <div className="footer-bottom bg-dark text-light">
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
