'use client';
import React, { useState } from 'react';
import BlogV1Data from "@/assets/jsonData/blog/BlogV1Data.json"
import SingleBlog3Column from "./SingleBlog3Column";
import Pagination from "../pagination/Pagination";
import Link from "next/link";
import Image from "next/image";

const Blog3ColumnContent = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 6;
    const totalPages = Math.ceil(BlogV1Data.length / itemsPerPage);

    const currentBlogs = BlogV1Data.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
        // Optional: scroll to top of blog list or page
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <>
            <style jsx>{`
                @keyframes fadeInUp {
                    from {
                        opacity: 0;
                        transform: translateY(30px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .blog-item-animated {
                    opacity: 0;
                    animation: fadeInUp 0.8s ease forwards;
                }
            `}</style>
            <div className="blog-area blog-grid default-padding" style={{ position: 'relative', overflow: 'hidden' }}>

                {/* Background Shapes */}
                <div style={{ position: 'absolute', top: '5%', left: '-5%', zIndex: -1, opacity: 0.1 }}>
                    <Image src="/assets/img/shape/44.png" alt="Shape" width={300} height={300} />
                </div>
                <div style={{ position: 'absolute', bottom: '10%', right: '-5%', zIndex: -1, opacity: 0.1 }}>
                    <Image src="/assets/img/shape/45.png" alt="Shape" width={300} height={300} />
                </div>

                <div className="container">

                    {/* Back to Home Button */}
                    <div style={{ marginBottom: '40px', position: 'relative', zIndex: 1 }}>
                        <Link href="/" style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '12px',
                            fontSize: '15px',
                            fontWeight: 700,
                            color: '#0e2769',
                            background: '#ffffff',
                            padding: '12px 28px',
                            borderRadius: '50px',
                            border: '1px solid #e0e0e0',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                            textDecoration: 'none',
                            transition: '0.3s'
                        }}>
                            <i className="fas fa-home" style={{ color: '#1351d8', fontSize: '14px' }}></i>
                            BACK TO HOME
                        </Link>
                    </div>

                    <div className="blog-item-box">
                        <div className="row">
                            {currentBlogs.map((blog, index) =>
                                <div
                                    className="col-xl-4 col-md-6 single-item blog-item-animated"
                                    key={blog.id}
                                    style={{ animationDelay: `${index * 0.15}s` }}
                                >
                                    <SingleBlog3Column blog={blog} />
                                </div>
                            )}
                        </div>
                    </div>

                    {totalPages > 1 && (
                        <div className="row">
                            <Pagination
                                currentPage={currentPage}
                                totalPages={totalPages}
                                onPageChange={handlePageChange}
                            />
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Blog3ColumnContent;