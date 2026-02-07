"use client"
import { siteContent } from "@/data/siteContent";
import SingleServiceV3 from "./SingleServiceV3";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Keyboard, Navigation, Pagination } from "swiper/modules";

const ServiceV3 = () => {
    // Collect all services
    const allServices = [...siteContent.services.infrastructure, ...siteContent.services.technology];

    // Requested Featured Services
    const featuredIds = [
        "server-maintenance-support",
        "amc-services",
        "network-maintenance",
        "data-center-solutions",
        "cloud-services",
        "ai-automation"
    ];

    const featuredServices = allServices.filter(s => featuredIds.includes(s.id));

    return (
        <>
            <div className="services-style-three-area default-padding-top half-bg-dark" style={{ backgroundImage: 'url(/assets/img/shape/service_bg_shape.png)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Featured Services</h4>
                                <h2 className="title">
                                    Comprehensive IT Solutions
                                </h2>
                                <div className="devider" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container container-stage">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper className="services-carousel" data-aos="fade-up" data-aos-delay="100"
                                loop={true}
                                freeMode={true}
                                grabCursor={true}
                                slidesPerView={1}
                                spaceBetween={30}
                                autoplay={{ delay: 3000, disableOnInteraction: false }}

                                // If we need pagination
                                pagination={{
                                    el: '.services-pagination',
                                    type: 'fraction',
                                    clickable: true,
                                }}
                                // Navigation arrows
                                navigation={{
                                    nextEl: ".services-button-next",
                                    prevEl: ".services-button-prev"
                                }}
                                breakpoints={{
                                    800: {
                                        slidesPerView: 2,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                    },
                                    1367: {
                                        slidesPerView: 3.6,
                                    },
                                }}
                                modules={[Pagination, Navigation, Keyboard, Autoplay]}
                            >
                                {featuredServices.map(service =>
                                    <SwiperSlide key={service.id}>
                                        <SingleServiceV3 service={service} />
                                    </SwiperSlide>
                                )}

                                <div className="services-swiper-nav">
                                    {/* Pagination */}
                                    <div className="services-pagination" />
                                    <div className="services-button-prev" />
                                    <div className="services-button-next" />
                                </div>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ServiceV3;