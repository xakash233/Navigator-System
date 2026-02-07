
import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Partners from "@/components/partners/Partners";

export const metadata = {
    title: "Our Partners - Navigator System",
    description: "Leading technology partners working with Navigator System to deliver excellence."
};

const PartnersPage = () => {
    return (
        <LayoutV1>
            <BreadCrumb title="Our Strategic Partners" breadCrumb="Partners" />
            <div className="default-padding">
                <Partners />
            </div>
        </LayoutV1>
    );
};

export default PartnersPage;
