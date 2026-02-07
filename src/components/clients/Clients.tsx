
"use client"
import React from 'react';
import Image from "next/image";
import { siteContent } from "@/data/siteContent";

const ClientsV1 = () => {
    return (
        <div className="partner-style-one-area default-padding bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">Trusted By</h4>
                            <h2 className="title">Our Clients</h2>
                            <div className="devider" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <div className="partner-carousel" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '40px' }}>
                            {siteContent.home.clients.map((client, index) => (
                                <div className="item" key={index} style={{ maxWidth: '180px', filter: 'grayscale(100%)', opacity: 0.7, transition: '0.3s' }}
                                    onMouseEnter={(e) => { e.currentTarget.style.filter = 'grayscale(0%)'; e.currentTarget.style.opacity = '1'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.filter = 'grayscale(100%)'; e.currentTarget.style.opacity = '0.7'; }}>
                                    <Image src={client.logo} alt={client.name} width={150} height={80} style={{ objectFit: 'contain', width: 'auto', maxHeight: '80px' }} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ClientsV1;
