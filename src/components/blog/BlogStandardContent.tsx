import Pagination from "../pagination/Pagination";
import BlogStandardData from "@/assets/jsonData/blog/BlogStandardData.json"
import SingleBlogStandard from "./SingleBlogStandard";

const BlogStandardContent = () => {
    return (
        <>
            <div className="blog-area full-blog blog-standard default-padding">
                <div className="container">
                    <div className="row">
                        <div className="blog-content col-xl-10 offset-xl-1 col-md-12">
                            <div className="blog-item-box">
                                {BlogStandardData.map(blog =>
                                    <SingleBlogStandard blog={blog} key={blog.id} />
                                )}
                            </div>
                            <Pagination />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogStandardContent;