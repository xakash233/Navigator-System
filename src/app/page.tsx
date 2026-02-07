import AboutV3 from "@/components/about/About";
import BannerV3 from "@/components/banner/Banner";
import FeatureV2 from "@/components/feature/Feature";
import FooterV1 from "@/components/footer/Footer";
import HeaderV3 from "@/components/header/Header";
import ServiceV3 from "@/components/services/Service";
import IndustriesV1 from "@/components/industries/Industries";
import HowWeWorkV1 from "@/components/process/HowWeWork";
import ClientsV1 from "@/components/clients/Clients";
import CtaBannerV1 from "@/components/cta/CtaBanner";


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
            {/* Why Navigator System */}
            <AboutV3 />
            {/* Industries */}
            <IndustriesV1 />
            {/* Featured Services */}
            <ServiceV3 />
            {/* How We Work */}
            <HowWeWorkV1 />
            {/* CTA Banner */}
            <CtaBannerV1 />
            {/* Clients */}
            <ClientsV1 />
            <FooterV1 />
        </>
    );
};

export default HomePage;