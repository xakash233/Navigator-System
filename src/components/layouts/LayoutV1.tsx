import FooterV1 from "../footer/FooterV1";
import HeaderV3 from "../header/HeaderV3";

interface LayoutProps {
    children?: React.ReactNode;
}

const LayoutV1 = ({ children }: LayoutProps) => {
    return (
        <>
            <HeaderV3 />
            {children}
            <FooterV1 />
        </>
    );
};

export default LayoutV1;