import Image from "next/image";
import Link from "next/link";


interface ServiceType {
    id: string;
    title: string;
    summary: string;
    category?: string;
    icon?: string;
    features?: string[];
}

const SingleServiceV3 = ({ service }: { service: ServiceType }) => {
    const { id, title, summary, category = "infrastructure", icon = "icon-1.png" } = service;

    return (
        <>
            <div className="services-style-three">
                <div className="info">
                    <div className="icon">
                        <Image src={`/assets/img/icon/${icon}`} alt={title} width={64} height={64} />
                    </div>
                    <h3 style={{ minHeight: '60px' }}><Link href={`/${category}/${id}`}>{title}</Link></h3>
                    <p style={{ minHeight: '120px' }}>
                        {summary.length > 100 ? summary.substring(0, 100) + "..." : summary}
                    </p>
                    <Link href={`/${category}/${id}`} className="btn-more">Read More <i className="fas fa-arrow-right"></i></Link>
                </div>
            </div>
        </>
    );
};

export default SingleServiceV3;