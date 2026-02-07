import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import FaqPageContent from "@/components/faq/FaqPageContent";

export const metadata = {
    title: "FAQs - Navigator System",
    description: "Find answers to common questions about our Infrastructure Support and Technology Delivery services."
};

const FaqPage = () => {
    return (
        <LayoutV1>
            <BreadCrumb title="Frequently Asked Questions" breadCrumb="FAQs" />
            <FaqPageContent />
        </LayoutV1>
    );
};

export default FaqPage;
