import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";

export const metadata = {
    title: "FAQs - Navigator System"
};

const FaqPage = () => {
    return (
        <LayoutV1>
            <BreadCrumb title="Frequently Asked Questions" breadCrumb="FAQs" />
            <div className="default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2">
                            <h2>Common Questions</h2>
                            <p>Find answers to common questions about our services and support.</p>
                            {/* FAQ Content to be added here */}
                        </div>
                    </div>
                </div>
            </div>
        </LayoutV1>
    );
};

export default FaqPage;
