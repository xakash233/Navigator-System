"use client";
import React from 'react';
import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import SplitText from "../animation/SplitText";

const Partners = () => {
    return (
        <div className="partner-style-one-area default-padding-bottom bg-gray">
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
                        <div className="partner-carousel" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '50px' }}>
                            {siteContent.home.partners?.map((partner, index) => (
                                <div className="partner-item text-center" key={index} data-aos="fade-up" data-aos-delay={index * 100} style={{ maxWidth: '200px' }}>
                                    <div className="thumb mb-3" style={{
                                        background: '#fff',
                                        padding: '20px',
                                        borderRadius: '10px',
                                        boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
                                        height: '100px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        transition: '0.3s'
                                    }}>
                                        <Image
                                            src={partner.logo}
                                            alt={partner.name}
                                            width={150}
                                            height={60}
                                            style={{ objectFit: 'contain', width: 'auto', maxHeight: '60px' }}
                                        />
                                    </div>

                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Partners;
