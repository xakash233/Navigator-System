import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";

export const metadata = {
    title: "Privacy Policy - Navigator System"
};

const PrivacyPage = () => {
    return (
        <LayoutV1>
            <BreadCrumb title="Privacy Policy" breadCrumb="Privacy" />
            <div className="default-padding">
                <div className="container">
                    <div className="content">
                        <h2>Privacy Policy</h2>
                        <p>Privacy policy content goes here.</p>
                    </div>
                </div>
            </div>
        </LayoutV1>
    );
};

export default PrivacyPage;
