import BlogV1Data from "@/assets/jsonData/blog/BlogV1Data.json";
import SingleBlog2Column from "./SingleBlog2Column";
import Pagination from "../pagination/Pagination";

const Blog2ColumnContent = () => {
    return (
        <>
            <div className="blog-area blog-grid default-padding">
                <div className="container">
                    <div className="blog-item-box">
                        <div className="row">
                            {BlogV1Data.slice(0, 4).map(blog =>
                                <div className="col-xl-6 col-md-6 single-item" key={blog.id}>
                                    <SingleBlog2Column blog={blog} />
                                </div>
                            )}
                        </div>
                    </div>
                    <Pagination />
                </div>
            </div>
        </>
    );
};

export default Blog2ColumnContent;