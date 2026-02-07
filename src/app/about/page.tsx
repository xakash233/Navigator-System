import About from '@/components/about/About';
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
                <BreadCrumb title="About Us" breadCrumb="About" bgImage="/assets/img/banner/about-us.png" />
                <About />
                {/* Team Section - optional, keeping as per structure suggestion */}
                <TeamV2 hasTitle={true} />
            </LayoutV1>
        </>
    );
};

export default AboutUsPage;