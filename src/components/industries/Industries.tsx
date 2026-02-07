
import React from 'react';
import { siteContent } from "@/data/siteContent";

const IndustriesV1 = () => {
    return (
        <div className="industries-area default-padding-bottom bg-gray">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">Sectors</h4>
                            <h2 className="title">Industries We Serve</h2>
                            <div className="devider" />
                        </div>
                    </div>
                </div>
                <div className="row">
                    {siteContent.home.industries.map((item, index) => (
                        <div className="col-lg-3 col-md-6 mb-30" key={index}>
                            <div className="item text-center p-4 bg-white shadow rounded" style={{ height: '100%', transition: '0.3s' }}>
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
