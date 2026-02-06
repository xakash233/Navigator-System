import { siteContent } from "@/data/siteContent";
import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import ServiceDetail from "@/components/services/ServiceDetail";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
    return siteContent.services.infrastructure.map((service) => ({
        slug: service.id,
    }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
    const { slug } = await params;
    const service = siteContent.services.infrastructure.find(s => s.id === slug);

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

const InfrastructureServicePage = async ({ params }: { params: { slug: string } }) => {
    const { slug } = await params;
    const service = siteContent.services.infrastructure.find(s => s.id === slug);

    if (!service) {
        notFound();
    }

    return (
        <LayoutV1>
            <BreadCrumb title={service.title} breadCrumb="Infrastructure" />
            <ServiceDetail service={service} />
        </LayoutV1>
    );
};

export default InfrastructureServicePage;
