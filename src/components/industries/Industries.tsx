"use client";
import React from 'react';
import { siteContent } from "@/data/siteContent";
import SplitText from "../animation/SplitText";

const IndustriesV1 = () => {
    return (
        <div className="industries-area default-padding-bottom bg-gray" style={{ paddingTop: '80px' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">Sectors</h4>
                            <h2 className="title">
                                <SplitText delay={50}>Industries We Serve</SplitText>
                            </h2>
                            <div className="devider" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {siteContent.home.industries.map((item, index) => (
                        <div className="col-lg-3 col-md-6 mb-30" key={index} data-aos="fade-up" data-aos-delay={index * 100}>
                            <div className="item text-center p-4 bg-white shadow rounded industry-card" style={{ height: '100%' }}>
                                <div className="icon mb-3">
                                    <i className={`${item.icon} fa-3x text-primary`}></i>
                                </div>
                                <h4 style={{ fontWeight: 600 }}>{item.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default IndustriesV1;
