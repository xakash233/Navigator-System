import Blog3ColumnContent from "@/components/blog/Blog3ColumnContent";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import LayoutV1 from "@/components/layouts/LayoutV1";

export const metadata = {
    title: "Navigator System - Blog"
};


const Blog3ColumnPage = () => {
    return (
        <>
            <LayoutV1>
                <BreadCrumb title="Blog" breadCrumb="blog" />
                <Blog3ColumnContent />
            </LayoutV1>
        </>
    );
};

export default Blog3ColumnPage;