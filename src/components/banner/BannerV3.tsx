"use client"
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";

const BannerV3 = () => {
    const { heroSlider } = siteContent.home;

    return (
        <>
            <div className="banner-area banner-style-three-area overflow-hidden">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    effect="fade"
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={true}
                    className="banner-style-three-carousel"
                >
                    {heroSlider.map((slide) => (
                        <SwiperSlide key={slide.id}>
                            <div className="banner-style-three">
                                <div className="banner-thumb bg-cover" style={{ background: `url(${slide.bgImage})` }} />
                                <div className="container">
                                    <div className="row align-center">
                                        <div className="col-xl-8 col-lg-9 col-md-11">
                                            <div className="content">
                                                <h4 className="sub-title" data-animation="fadeInDown" data-delay="500ms" style={{ textTransform: 'uppercase', fontWeight: 700, color: '#3182CE', letterSpacing: '1px' }}>{slide.tagline}</h4>
                                                <h2 className="title" data-animation="fadeInLeft" data-delay="800ms" style={{ fontSize: '60px', lineHeight: '1.1', fontWeight: 800, marginBottom: '20px' }}>{slide.title}</h2>

                                                <div className="button mt-30" data-animation="fadeInUp" data-delay="1200ms">
                                                    <Link className="btn btn-theme btn-md animation" href="/contact">{slide.ctaPrimary}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Trust/Proof Bar Section - Placing it right below Hero */}
            <div className="features-area default-padding-bottom bottom-less bg-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="feature-style-two-items" style={{ marginTop: '-80px', position: 'relative', zIndex: 10, background: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 feature-item">
                                        <div className="info">
                                            <h4>20+ Years</h4>
                                            <p>In Business Experience</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 feature-item">
                                        <div className="info">
                                            <h4>Multi-OEM</h4>
                                            <p>Servers, Storage, Network Support</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 feature-item">
                                        <div className="info">
                                            <h4>Cost Effective</h4>
                                            <p>Third-party support vs OEM renewals</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 feature-item">
                                        <div className="info">
                                            <h4>Pan-India</h4>
                                            <p>Coverage with fast response</p>
                                        </div>
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

export default BannerV3;