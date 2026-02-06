import AboutV3 from '@/components/about/AboutV3';
import BreadCrumb from '@/components/breadCrumb/BreadCrumb';
import LayoutV1 from '@/components/layouts/LayoutV1';
import TeamV2 from '@/components/team/TeamV2';

export const metadata = {
    title: "About Us - Navigator System"
};

const AboutUsPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="About Us" breadCrumb="About" />
                <AboutV3 />
                {/* Team Section - optional, keeping as per structure suggestion */}
                <TeamV2 hasTitle={true} />
            </LayoutV1>
        </>
    );
};

export default AboutUsPage;