"use client";
import React from 'react';
import { siteContent } from "@/data/siteContent";
import SplitText from "../animation/SplitText";

const HowWeWorkV1 = () => {
    return (
        <div className="process-area default-padding">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <div className="site-heading text-center">
                            <h4 className="sub-title">Process</h4>
                            <h2 className="title">
                                <SplitText delay={50}>How We Work</SplitText>
                            </h2>
                            <div className="devider" />
                        </div>
                    </div>
                </div>
                <div className="row text-center position-relative">
                    {/* Visual Connector Line */}
                    <div className="process-connection-line d-none d-lg-block"></div>

                    {siteContent.home.howWeWork.map((item, index) => {
                        // Dynamically assign icon class based on step index (Assess -> Search, Plan -> Map, Execute -> Cogs)
                        const icons = ["fas fa-search-location", "fas fa-map-marked-alt", "fas fa-cogs"];
                        const iconClass = icons[index] || "fas fa-concierge-bell";

                        return (
                            <div className="col-lg-4 col-md-6 mb-30 single-process" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                                <div className="process-card">
                                    <div className="process-step-badge">{item.step}</div>
                                    <div className="process-icon">
                                        <i className={iconClass}></i>
                                    </div>
                                    <h4>{item.title}</h4>
                                    <p>{item.description}</p>
                                    <div className="process-bg-num">{item.step}</div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default HowWeWorkV1;
