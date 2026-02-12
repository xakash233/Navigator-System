
import type { Metadata } from 'next';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import TermsContent from '@/components/terms/TermsContent';
import FooterV1 from '@/components/footer/Footer';
import HeaderV3 from '@/components/header/Header';

export const metadata: Metadata = {
    title: "Terms & Conditions - Navigator System",
    description: "Read our full terms and conditions for services, products, and Annual Maintenance Contracts."
}

const TermsConditions = () => {
    return (
        <>
            <HeaderV3 />
            <BreadCrumb title="Terms & Conditions" breadCrumb="terms-conditions" />
            <TermsContent />
            <FooterV1 />
        </>
    );
}

export default TermsConditions;
