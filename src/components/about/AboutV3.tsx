import Image from "next/image";
import { siteContent } from "@/data/siteContent";

const AboutV3 = () => {
    return (
        <>
            <div className="about-style-three-area overflow-hidden bg-gray default-padding-top shape-light-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 about-style-three">
                            <h4 className="sub-title">Why Navigator System</h4>
                            <h2 className="title">
                                Uptime-First IT Support & Modern Digital Solutions
                            </h2>
                            <p className="mt-20">
                                {siteContent.about.description}
                            </p>

                            <div className="list-item-style-two mt-30">
                                <ul>
                                    {siteContent.about.values.slice(0, 3).map((val, index) => (
                                        <li key={index}><i className="fas fa-check-circle"></i> {val.description}</li>
                                    ))}
                                </ul>
                            </div>

                            <div className="thumb mt-50 mt-xs-30">
                                <Image src="/assets/img/banner/9.jpg" alt="Image Not Found" width={1200} height={675} />
                            </div>
                        </div>
                        <div className="col-lg-5 offset-lg-1 about-style-three">

                            <div className="content">
                                <h3>Industries We Serve</h3>
                                <ul className="check-list-item">
                                    <li>IT & SaaS</li>
                                    <li>Manufacturing</li>
                                    <li>Healthcare</li>
                                    <li>Education</li>
                                    <li>Logistics</li>
                                    <li>Retail & E-commerce</li>
                                    <li>BFSI</li>
                                    <li>Professional Services</li>
                                </ul>
                            </div>

                            <div className="company-autor mt-50">
                                <div className="left-info">
                                    <div className="content">
                                        <h4>Need a Custom Plan?</h4>
                                        <span>Talk to our engineers today.</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutV3;