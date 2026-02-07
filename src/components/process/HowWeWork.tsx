
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
                <div className="row text-center">
                    {siteContent.home.howWeWork.map((item, index) => (
                        <div className="col-lg-4 col-md-4 single-process" key={index} data-aos="fade-up" data-aos-delay={index * 200}>
                            <div className="item">
                                <div className="step-number" style={{ fontSize: '4rem', fontWeight: 800, color: '#f0f0f0', position: 'absolute', top: '-20px', left: '50%', transform: 'translateX(-50%)', zIndex: -1 }}>
                                    {item.step}
                                </div>
                                <div className="icon mt-4 mb-4">
                                    <i className="fas fa-cog fa-3x text-gradient"></i>
                                </div>
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HowWeWorkV1;
