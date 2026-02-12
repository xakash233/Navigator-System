import Image from "next/image";
import CounterForm from "../form/CounterForm";
import { siteContent } from "@/data/siteContent";

const ContactV2 = () => {
    return (
        <>
            <div className="contact-style-one-area overflow-hidden default-padding">
                <div className="contact-shape">
                    <Image src="/assets/img/shape/37.png" alt="Image Not Found" width={670} height={420} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="contact-stye-one col-lg-5 mb-md-50 mb-xs-20">
                            <div className="contact-style-one-info">
                                <h2 className="split-text" data-aos="fade-up">Let&rsquo;s discuss your uptime goals or project build.</h2>
                                <p data-aos="fade-up" data-aos-delay="100">
                                    Whether you need to maintain critical infrastructure or build modern digital solutions, we are here to help.
                                </p>

                                <div className="row mt-50">
                                    {/* Corporate Office */}
                                    <div className="col-md-6 item text-center mb-30" data-aos="fade-up" data-aos-delay="200">
                                        <div className="icon mb-20">
                                            <i className="far fa-building fa-3x" style={{ color: '#1351d8' }}></i>
                                        </div>
                                        <h4 className="title mb-15" style={{ fontSize: '22px', fontWeight: '700', color: '#0e2769' }}>Corporate Office</h4>
                                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#666' }}>
                                            <strong>NAVIGATOR SYSTEMS PRIVATE LIMITED</strong><br />
                                            {siteContent.brand.address}
                                        </p>
                                    </div>

                                    {/* Direct Contact */}
                                    <div className="col-md-6 item text-center mb-30" data-aos="fade-up" data-aos-delay="400">
                                        <div className="icon mb-20">
                                            <i className="fas fa-mobile-alt fa-3x" style={{ color: '#1351d8' }}></i>
                                        </div>
                                        <h4 className="title mb-15" style={{ fontSize: '22px', fontWeight: '700', color: '#0e2769' }}>Direct Contact</h4>
                                        <p style={{ fontSize: '15px', lineHeight: '1.6', color: '#666' }}>
                                            Sales: <a href={`tel:${siteContent.brand.phone.replace(/\s+/g, '')}`} style={{ color: '#666' }}>{siteContent.brand.phone}</a><br />
                                            Email: <a href={`mailto:${siteContent.brand.email}`} style={{ color: '#1351d8' }}>{siteContent.brand.email}</a>
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="contact-stye-one col-lg-7 pl-60 pl-md-15 pl-xs-15">
                            <div className="contact-form-style-one">
                                <h5 className="sub-title">Have Questions?</h5>
                                <h2 className="title">Send us a Message</h2>
                                <CounterForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ContactV2;