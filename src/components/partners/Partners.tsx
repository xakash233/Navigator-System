"use client";
import React from 'react';
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import SplitText from "../animation/SplitText";

const Partners = () => {
    return (
        <div className="partner-style-one-area bg-gray" style={{ paddingBottom: '10px', paddingTop: '50px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">Technology Partners</h4>
                            <h2 className="title">
                                <SplitText delay={50}>Our Strategic Partners</SplitText>
                            </h2>
                            <div className="devider" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="partner-slider">
                            <div className="partner-track">
                                {/* Duplicate the partners to ensure smooth infinite scroll */}
                                {[...siteContent.home.partners, ...siteContent.home.partners].map((partner, index) => (
                                    <div className="partner-slide" key={index}>
                                        <div className="thumb mb-3" style={{
                                            width: '200px',
                                            padding: '20px',
                                            height: '100px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            filter: 'grayscale(100%)',
                                            opacity: 0.7,
                                            transition: '0.3s'
                                        }}
                                            onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.opacity = '1'; }}
                                            onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.7'; }}>
                                            <Image
                                                src={partner.logo}
                                                alt={partner.name}
                                                width={150}
                                                height={60}
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    objectFit: 'contain',
                                                    maxHeight: '80px',
                                                    maxWidth: '150px'
                                                }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
