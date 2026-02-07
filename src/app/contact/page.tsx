import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import ContactV2 from "@/components/contact/Contact";
import LayoutV1 from "@/components/layouts/LayoutV1";
import Map from "@/components/map/Map";

export const metadata = {
    title: "Contact Us - Navigator System",
    description: "Let’s discuss your uptime goals or project build."
};

const ContactPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Contact Us" breadCrumb="Contact" />
                <ContactV2 />
                <Map />
            </LayoutV1>
        </>
    );
};

export default ContactPage;