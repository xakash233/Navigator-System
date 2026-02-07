import Image from "next/image";

interface DataType {
    icon: string;
    title: string;
    description: string;
}

const SingleFeatureV2 = ({ feature }: { feature: DataType }) => {
    const { icon, title, description } = feature

    const isImage = icon.toLowerCase().endsWith('.png') || icon.toLowerCase().endsWith('.svg') || icon.toLowerCase().endsWith('.jpg');

    return (
        <>
            <div className="feature-style-two" style={{ height: '100%' }} data-aos="fade-up">
                <div className="icon">
                    {isImage ? (
                        <Image
                            src={`/assets/img/icon/${icon}`}
                            alt={title}
                            width={50}
                            height={50}
                            style={{ objectFit: 'contain' }}
                        />
                    ) : (
                        <i className={icon} />
                    )}
                </div>
                <div className="info">
                    <h4>{title}</h4>
                    <p>
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default SingleFeatureV2;