
"use client"
import React from 'react';

import Image from "next/image";
import { siteContent } from "@/data/siteContent";
import SplitText from "../animation/SplitText";

const ClientsV1 = () => {
    return (
        <div className="partner-style-one-area default-padding-bottom bg-gray" style={{ paddingTop: '10px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">Trusted By</h4>
                            <h2 className="title">
                                <SplitText delay={50}>Our Clients</SplitText>
                            </h2>
                            <div className="devider" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="partner-slider">
                            <div className="client-track">
                                {/* Duplicate the clients to ensure smooth infinite scroll */}
                                {[...siteContent.home.clients, ...siteContent.home.clients].map((client, index) => (
                                    <div className="client-slide" key={index}>
                                        <div className="item" style={{
                                            width: '180px',
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
                                                src={client.logo}
                                                alt={client.name}
                                                width={150}
                                                height={80}
                                                style={{
                                                    objectFit: 'contain',
                                                    maxHeight: '80px',
                                                    maxWidth: '150px',
                                                    width: 'auto',
                                                    height: 'auto'
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


export default ClientsV1;
