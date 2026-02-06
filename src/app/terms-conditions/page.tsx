import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";

export const metadata = {
    title: "Terms & Conditions - Navigator System"
};

const TermsPage = () => {
    return (
        <LayoutV1>
            <BreadCrumb title="Terms & Conditions" breadCrumb="Terms" />
            <div className="default-padding">
                <div className="container">
                    <div className="content">
                        <h2>Terms & Conditions</h2>
                        <p>Legal terms and conditions content goes here.</p>
                    </div>
                </div>
            </div>
        </LayoutV1>
    );
};

export default TermsPage;
