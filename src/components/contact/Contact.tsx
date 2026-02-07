import Image from "next/image";
import CounterForm from "../form/CounterForm";

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
                                <ul>
                                    <li data-aos="fade-up">
                                        <div className="icon">
                                            <i className="fas fa-server" />
                                        </div>
                                        <div className="content">
                                            <h5 className="title">Support &amp; Maintenance</h5>
                                            <p>Request AMC / Server / Network support</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay="300">
                                        <div className="icon">
                                            <i className="fas fa-code" />
                                        </div>
                                        <div className="info">
                                            <h5 className="title">Engineering Delivery</h5>
                                            <p>Website, apps, cloud, automation</p>
                                        </div>
                                    </li>
                                    <li data-aos="fade-up" data-aos-delay="500">
                                        <div className="icon">
                                            <i className="fas fa-handshake" />
                                        </div>
                                        <div className="info">
                                            <h5 className="title">Partnerships</h5>
                                            <p>Vendor and integration opportunities</p>
                                        </div>
                                    </li>
                                </ul>
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