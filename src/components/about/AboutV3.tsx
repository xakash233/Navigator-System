import { siteContent } from "@/data/siteContent";
import SplitText from "../animation/SplitText";

const AboutV3 = () => {
    return (
        <>
            <div className="about-style-three-area overflow-hidden bg-gray default-padding-top">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 about-style-three">
                            <h4 className="sub-title">Why Navigator System</h4>
                            <h2 className="title">
                                <SplitText delay={50}>Uptime-First IT Support & Modern Digital Solutions</SplitText>
                            </h2>
                            <p className="mt-20" data-aos="fade-up">
                                {siteContent.about.description}
                            </p>

                            <div className="row mt-30">
                                <div className="col-lg-6" data-aos="fade-right">
                                    <h4 className="mb-20">What We Stand For</h4>
                                    <ul className="list-unstyled">
                                        {siteContent.about.values.map((val, index) => (
                                            <li key={index} className="mb-2"><i className="fas fa-check-circle text-primary"></i> {val.description}</li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="col-lg-6" data-aos="fade-left">
                                    <h4 className="mb-20">What Makes Us Different</h4>
                                    <ul className="list-unstyled">
                                        {siteContent.about.differentiators?.map((text, index) => (
                                            <li key={index} className="mb-2"><i className="fas fa-check-circle text-primary"></i> {text}</li>
                                        ))}
                                    </ul>
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