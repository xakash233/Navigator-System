import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";


interface ServiceData {
    id: string;
    title: string;
    summary: string;
    features: string[];
    whoIsItFor?: string[];
    keyBenefits?: string[];
    ctaLine?: string;
    heroImage?: string;
    category?: string; // also good to have
}

const ServiceDetail = ({ service }: { service: ServiceData }) => {
    const allServices = [...siteContent.services.infrastructure, ...siteContent.services.technology];

    // Filter out current service for "Other Services" list
    const otherServices = allServices.filter(s => s.id !== service.id).slice(0, 5);

    return (
        <div id="service-details-section" className="services-details-area overflow-hidden default-padding" style={{ scrollMarginTop: '140px' }}>
            <div className="container">
                <div className="services-details-items">
                    <div className="row">
                        <div className="col-xl-8 col-lg-7 order-lg-last pl-50 pl-md-15 pl-xs-15">
                            <div className="thumb" style={{ position: 'relative', height: '450px', width: '100%', overflow: 'hidden', borderRadius: '10px', marginBottom: '30px' }}>

                                {(() => {
                                    // Use dynamic image if available, otherwise fallback
                                    const imagePath = service.heroImage ||
                                        (siteContent.services.infrastructure.some(s => s.id === service.id)
                                            ? "/assets/img/banner/infra-service.jpg"
                                            : "/assets/img/banner/tech-service.jpg");
                                    return (
                                        <Image
                                            src={imagePath}
                                            alt={service.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            priority
                                        />
                                    );
                                })()}
                            </div>
                            <h2>{service.title}</h2>
                            <p className="lead">
                                {service.summary}
                            </p>

                            <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                                <div className="row">
                                    <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
                                        <div className="content">
                                            <h3>What&apos;s Included</h3>
                                            <ul className="feature-list-modern">
                                                {service.features.map((feature, index) => (
                                                    <li key={index}>{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {service.whoIsItFor && (
                                        <div className="col-lg-12 mt-40" data-aos="fade-up" data-aos-delay="200">
                                            <div className="content">
                                                <h3>Who It&apos;s For</h3>
                                                <ul className="audience-list">
                                                    {service.whoIsItFor.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}

                                    {service.keyBenefits && (
                                        <div className="col-lg-12 mt-40" data-aos="fade-up" data-aos-delay="300">
                                            <div className="content">
                                                <h3>Key Benefits</h3>
                                                <ul className="benefits-list">
                                                    {service.keyBenefits.map((item, index) => (
                                                        <li key={index}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    )}

                                    {service.ctaLine && (
                                        <div className="col-lg-12 mt-40">
                                            <div className="alert alert-info text-center">
                                                <h4>{service.ctaLine}</h4>
                                                <Link className="btn mt-20 circle btn-sm btn-gradient" href="/contact">Get a Proposal</Link>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <div className="services-more mt-40">
                                <h2>Other Services</h2>
                                <div className="row">
                                    {otherServices.slice(0, 2).map(s => (
                                        <div className="col-md-6" key={s.id}>
                                            <div className="item">
                                                <div className="info">
                                                    <h4><Link href={`/${s.category}/${s.id}`}>{s.title}</Link></h4>
                                                    <p>{s.summary.substring(0, 80)}...</p>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-5 mt-md-120 mt-xs-50 services-sidebar">

                            {/* Service List Widget */}
                            <div className="single-widget services-list-widget">
                                <h4 className="widget-title">All Services</h4>
                                <div className="content">
                                    <ul>
                                        {allServices.map(s => (
                                            <li key={s.id} className={s.id === service.id ? "current-item" : ""}>
                                                <Link href={`/${s.category}/${s.id}#service-details-section`} scroll={true}>{s.title}</Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>

                            {/* Contact Widget */}
                            <div className="single-widget bg-dark quick-contact-widget text-light"
                                style={{ backgroundImage: 'url(/assets/img/shape/15.png)' }}>
                                <div className="content">
                                    <h3 style={{ color: '#ffffffff' }}>Need Help?</h3>
                                    <p>
                                        Speak with an engineer or get a quote for your infrastructure needs.
                                    </p>
                                    <h2><a href={`tel:${siteContent.brand.phone.replace(/\s+/g, '')}`}>{siteContent.brand.phone}</a></h2>
                                    <h4><a href="mailto:sales@navigatorsystem.com">sales@navigatorsystem.com</a></h4>
                                    <Link className="btn mt-30 circle btn-sm btn-gradient" href="/contact">Contact Us</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default ServiceDetail;
