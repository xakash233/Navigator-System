import AboutV3 from "@/components/about/AboutV3";
import BannerV3 from "@/components/banner/BannerV3";
import FeatureV2 from "@/components/feature/FeatureV2";
import FooterV1 from "@/components/footer/FooterV1";
import HeaderV3 from "@/components/header/HeaderV3";
import ServiceV3 from "@/components/services/ServiceV3";
import Link from "next/link";

export const metadata = {
    title: "Navigator System - IT Support & Engineering",
    description: "Reliable IT Support and Modern Engineering for Growing Businesses."
};

const HomePage = () => {
    return (
        <>
            <HeaderV3 />
            <BannerV3 />
            {/* What We Do */}
            <FeatureV2 />
            {/* Why Navigator System & Industries (Combined in modified AboutV3) */}
            <AboutV3 />
            {/* Featured Services */}
            <ServiceV3 />

            {/* CTA Banner */}
            <div className="cta-style-one-area default-padding text-center bg-dark text-light" style={{ backgroundImage: 'url(/assets/img/shape/banner-8.jpg)' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h2 className="title">Ready to improve uptime or launch your next build?</h2>
                            <p>Talk to our team for a tailored plan and quote.</p>
                            <Link className="btn btn-theme btn-md mt-20" href="/contact">Get Started</Link>
                        </div>
                    </div>
                </div>
            </div>

            <FooterV1 />
        </>
    );
};

export default HomePage;