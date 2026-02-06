import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";

export const metadata = {
    title: "Careers - Navigator System"
};

const CareersPage = () => {
    return (
        <LayoutV1>
            <BreadCrumb title="Careers" breadCrumb="Careers" />
            <div className="default-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 offset-lg-2 text-center">
                            <h2>Join Our Team</h2>
                            <p>We are always looking for talented individuals to join our team. Check back soon for open positions.</p>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutV1>
    );
};

export default CareersPage;
