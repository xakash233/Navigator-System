import { siteContent } from "@/data/siteContent";
import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import ServiceDetail from "@/components/services/ServiceDetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return siteContent.services.technology.map((service) => ({
        slug: service.id,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const service = siteContent.services.technology.find(s => s.id === slug);

    if (!service) {
        return {
            title: "Service Not Found - Navigator System"
        };
    }

    return {
        title: `${service.title} - Navigator System`,
        description: service.summary,
    };
}

const TechnologyServicePage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    const service = siteContent.services.technology.find(s => s.id === slug);

    if (!service) {
        notFound();
    }

    return (
        <LayoutV1>
            <BreadCrumb title={service.title} breadCrumb="Technology" />
            <ServiceDetail service={service} />
        </LayoutV1>
    );
};

export default TechnologyServicePage;
