interface DataType {
    icon: string;
    title: string;
    description: string;
}

const SingleFeatureV2 = ({ feature }: { feature: DataType }) => {
    const { icon, title, description } = feature

    return (
        <>
            <div className="feature-style-two" style={{ height: '100%' }} data-aos="fade-up">
                <div className="icon">
                    <i className={icon} />
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