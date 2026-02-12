"use client"
import Link from "next/link";
import { siteContent } from "@/data/siteContent";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import SplitText from "../animation/SplitText";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import React, { useState } from 'react';

const BannerV3 = () => {
    const { heroSlider } = siteContent.home;
    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

    return (
        <>
            <div className="banner-area banner-style-three-area overflow-hidden">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation, EffectFade]}
                    effect="fade"
                    loop={true}
                    autoplay={{ delay: 5000, disableOnInteraction: false }}
                    pagination={{ clickable: true }}
                    navigation={{
                        prevEl,
                        nextEl,
                    }}
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
                                                <h4 className="sub-title" style={{ textTransform: 'uppercase', fontWeight: 700, color: '#3182CE', letterSpacing: '1px' }}>
                                                    {slide.tagline}
                                                </h4>
                                                <h2 className="title" style={{ fontSize: '60px', lineHeight: '1.1', fontWeight: 800, marginBottom: '20px' }}>
                                                    <SplitText delay={50}>{slide.title}</SplitText>
                                                </h2>
                                                <p className="description" style={{ fontSize: '18px', color: '#4A5568', marginBottom: '30px', maxWidth: '600px' }}>
                                                    {slide.subtitle}
                                                </p>

                                                <div className="button mt-30">
                                                    <Link className="btn btn-theme btn-md animation" href="/contact">{slide.ctaPrimary}</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                    {/* Custom Nav Buttons - Bottom Right */}
                    <div ref={(node) => setPrevEl(node)} className="banner-button-prev" style={{
                        position: 'absolute',
                        right: '120px',
                        bottom: '100px',
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#fff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                        transition: 'transform 0.3s ease'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        <i className="fas fa-angle-left" style={{ fontSize: '40px', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}></i>
                    </div>
                    <div ref={(node) => setNextEl(node)} className="banner-button-next" style={{
                        position: 'absolute',
                        right: '50px',
                        bottom: '100px',
                        width: '60px',
                        height: '60px',
                        backgroundColor: 'transparent',
                        border: 'none',
                        color: '#fff',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        zIndex: 10,
                        transition: 'transform 0.3s ease'
                    }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = 'scale(1.2)';
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = 'scale(1)';
                        }}
                    >
                        <i className="fas fa-angle-right" style={{ fontSize: '40px', textShadow: '0 2px 10px rgba(0,0,0,0.3)' }}></i>
                    </div>
                </Swiper>
            </div>

            {/* Trust/Proof Bar Section - Placing it right below Hero */}
            <div className="features-area default-padding-bottom bottom-less bg-gray" style={{ paddingBottom: '30px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="feature-style-two-items" style={{ marginTop: '-30px', position: 'relative', zIndex: 10, background: 'white', padding: '40px', borderRadius: '10px', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
                                <div className="row">
                                    <div className="col-lg-3 col-md-6 feature-item" data-aos="fade-up">
                                        <div className="info" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                            <i className="fas fa-history" style={{ fontSize: '30px', color: '#3182CE' }}></i>
                                            <div>
                                                <h4 style={{ margin: 0 }}>20+ Years</h4>
                                                <p style={{ margin: 0 }}>In Business Experience</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 feature-item" data-aos="fade-up" data-aos-delay="100">
                                        <div className="info" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                            <i className="fas fa-server" style={{ fontSize: '30px', color: '#3182CE' }}></i>
                                            <div>
                                                <h4 style={{ margin: 0 }}>Multi-OEM</h4>
                                                <p style={{ margin: 0 }}>Integrated Support</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 feature-item" data-aos="fade-up" data-aos-delay="200">
                                        <div className="info" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                            <i className="fas fa-hand-holding-usd" style={{ fontSize: '30px', color: '#3182CE' }}></i>
                                            <div>
                                                <h4 style={{ margin: 0 }}>Cost Effective</h4>
                                                <p style={{ margin: 0 }}>Max Value Support</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6 feature-item" data-aos="fade-up" data-aos-delay="300">
                                        <div className="info" style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
                                            <i className="fas fa-map-marked-alt" style={{ fontSize: '30px', color: '#3182CE' }}></i>
                                            <div>
                                                <h4 style={{ margin: 0 }}>Pan-India</h4>
                                                <p style={{ margin: 0 }}>Coverage & Response</p>
                                            </div>
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