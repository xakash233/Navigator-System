"use client";
import Image from "next/image";
import Link from "next/link";
import NewsLetterForm from "../form/NewsLetterForm";
import SocialShareV1 from "../social/SocialShareV1";
import { siteContent } from "@/data/siteContent";

const FooterV1 = () => {
    return (
        <>

            <footer className="footer-enhanced-dark bg-dark text-light" style={{ backgroundImage: 'url(/assets/img/shape/map-light.png)', backgroundSize: 'contain', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="container">
                    <div className="f-items relative pt-80 pb-80 pt-xs-50 pb-xs-50">
                        <div className="row">
                            <div className="col-lg-4 col-md-6 footer-item pr-50 pr-xs-15">
                                <div className="f-item about">
                                    <Image className="logo mb-4" src={siteContent.brand.logo} alt="Logo" width={220} height={70} style={{ filter: 'brightness(0) invert(1)' }} />
                                    <p className="text-light opacity-75 mb-4">
                                        {siteContent.brand.tagline}
                                    </p>
                                    <div className="contact-info mt-4">
                                        <h5 className="text-white mb-4 position-relative pb-2 border-bottom border-secondary d-inline-block">Contact Us</h5>
                                        <ul className="text-light opacity-90">
                                            <li className="d-flex mb-3 align-items-start">
                                                <div className="icon me-3 mt-1">
                                                    <i className="fas fa-map-marker-alt text-primary"></i>
                                                </div>
                                                <div className="content">
                                                    <span className="d-block fw-bold text-white mb-1">Address:</span>
                                                    {siteContent.brand.address}
                                                </div>
                                            </li>
                                            <li className="d-flex mb-3 align-items-center">
                                                <div className="icon me-3">
                                                    <i className="fas fa-envelope text-primary"></i>
                                                </div>
                                                <div className="content">
                                                    <span className="fw-bold text-white me-2">Email:</span>
                                                    <a href={`mailto:${siteContent.brand.email}`} className="text-light hover-primary transition-all">{siteContent.brand.email}</a>
                                                </div>
                                            </li>
                                            <li className="d-flex align-items-center">
                                                <div className="icon me-3">
                                                    <i className="fas fa-phone text-primary"></i>
                                                </div>
                                                <div className="content">
                                                    <span className="fw-bold text-white me-2">Phone:</span>
                                                    <a href={`tel:${siteContent.brand.phone.replace(/\s+/g, '')}`} className="text-light hover-primary transition-all">{siteContent.brand.phone}</a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-6 footer-item">
                                <div className="f-item link">
                                    <h4 className="widget-title text-white mb-4">Company</h4>
                                    <ul className="text-light opacity-75 footer-links">
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
                                    <h4 className="widget-title text-white mb-4">Services</h4>
                                    <ul className="text-light opacity-75 footer-links">
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
                                <h4 className="widget-title text-white mb-4">Newsletter</h4>
                                <p className="text-light opacity-75 mb-4">
                                    Join our subscribers list to get the latest <br /> news and special offers.
                                </p>
                                <div className="f-item newsletter">
                                    <NewsLetterForm />
                                </div>
                                <ul className="footer-social mt-4">
                                    <SocialShareV1 />
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Start Footer Bottom */}
                <div className="footer-bottom bg-darker text-light py-4 border-top border-secondary">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <p className="mb-0 text-light opacity-75">&copy; Copyright {new Date().getFullYear()} {siteContent.brand.name}. All Rights Reserved</p>
                            </div>
                            <div className="col-lg-6 text-end">
                                <ul className="d-inline-flex gap-4 footer-bottom-links">
                                    <li><Link href="/terms-conditions" className="text-light opacity-75 hover-white">Terms</Link></li>
                                    <li><Link href="/privacy-policy" className="text-light opacity-75 hover-white">Privacy</Link></li>
                                    <li><Link href="/resources/faqs" className="text-light opacity-75 hover-white">FAQs</Link></li>
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
