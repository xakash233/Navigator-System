import { siteContent } from "@/data/siteContent";
import SingleFeatureV2 from "./SingleFeatureV2";

const FeatureV2 = () => {
    return (
        <>
            <div className="feature-style-two-area default-padding bottom-less">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <div className="site-heading text-center">
                                <h4 className="sub-title">Overview</h4>
                                <h2 className="title">What We Do</h2>
                                <div className="devider" />
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {siteContent.home.servicesOverview.items.map((feature, index) =>
                            <div className="col-lg-6 mb-30" key={index}>
                                <SingleFeatureV2 feature={feature} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV2;