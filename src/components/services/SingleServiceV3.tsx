import Image from "next/image";
import Link from "next/link";
import { siteContent } from "@/data/siteContent";

interface ServiceType {
    id: string;
    title: string;
    summary: string;
    features?: string[];
}

const SingleServiceV3 = ({ service }: { service: ServiceType }) => {
    const { id, title, summary } = service;

    // Mapping IDs to generic icons if we don't have specific ones
    const icon = "icon-1.png"; // Default

    return (
        <>
            <div className="services-style-three">
                <div className="info">
                    <div className="icon">
                        <Image src={`/assets/img/icon/${icon}`} alt="Icon" width={64} height={64} />
                    </div>
                    <h3 style={{ minHeight: '60px' }}><Link href={`/services/${id}`}>{title}</Link></h3>
                    <p style={{ minHeight: '120px' }}>
                        {summary.length > 100 ? summary.substring(0, 100) + "..." : summary}
                    </p>
                    <Link href={`/services/${id}`} className="btn-more">Read More <i className="fas fa-arrow-right"></i></Link>
                </div>
            </div>
        </>
    );
};

export default SingleServiceV3;