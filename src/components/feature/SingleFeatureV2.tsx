interface DataType {
    title: string;
    description: string;
}

const SingleFeatureV2 = ({ feature }: { feature: DataType }) => {
    const { title, description } = feature

    return (
        <>
            <div className="feature-style-two" style={{ height: '100%' }}>
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