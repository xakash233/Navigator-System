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
            <div className="services-style-three" style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                padding: '40px',
                background: '#fff',
                boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                borderRadius: '15px',
                transition: '0.4s'
            }}>
                <div className="info" style={{
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%'
                }}>
                    <div className="icon" style={{
                        marginBottom: '25px',
                        width: '70px',
                        height: '70px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: '#f8fafc',
                        borderRadius: '12px'
                    }}>
                        <Image src={`/assets/img/icon/${icon}`} alt={title} width={50} height={50} style={{ objectFit: 'contain' }} />
                    </div>
                    <h3 style={{
                        fontSize: '22px',
                        fontWeight: '700',
                        marginBottom: '15px',
                        minHeight: '54px',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <Link href={`/${category}/${id}`} style={{ color: '#1a202c' }}>{title}</Link>
                    </h3>
                    <p style={{
                        fontSize: '15px',
                        color: '#718096',
                        lineHeight: '1.6',
                        marginBottom: '25px',
                        flexGrow: 1
                    }}>
                        {summary.length > 110 ? summary.substring(0, 110) + "..." : summary}
                    </p>
                    <Link href={`/${category}/${id}`} className="btn-more" style={{
                        fontWeight: '600',
                        color: '#3182CE',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px'
                    }}>
                        Read More <i className="fas fa-arrow-right"></i>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleServiceV3;