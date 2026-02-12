import React from 'react';
import { notFound } from 'next/navigation';
import BlogV1Data from '@/assets/jsonData/blog/BlogV1Data.json';
import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Image from "next/image";
import Link from "next/link";

export async function generateStaticParams() {
    return BlogV1Data.map((blog) => ({
        id: blog.id.toString(),
    }));
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const blog = BlogV1Data.find(b => b.id === parseInt(id));
    return {
        title: blog ? `${blog.title} | Navigator System` : "Blog Details"
    };
}

const BlogDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params;
    const blogId = parseInt(id);
    const blog = BlogV1Data.find(b => b.id === blogId);

    if (!blog) {
        notFound();
    }

    return (
        <LayoutV1>
            <BreadCrumb title={blog.title} breadCrumb="blog-details" />
            <div className="blog-area single full-blog right-sidebar full-blog default-padding">
                <div className="container">
                    <div className="blog-items clearfix">
                        <div className="row">
                            <div className="col-lg-10 offset-lg-1 info">
                                <div className="item" style={{ border: 'none', boxShadow: 'none' }}>

                                    {/* Back Button */}
                                    <div style={{ marginBottom: '40px' }}>
                                        <Link href="/resources/blog" style={{
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
                                            <i className="fas fa-arrow-left" style={{ color: '#1351d8', fontSize: '14px' }}></i>
                                            BACK TO BLOGS
                                        </Link>
                                    </div>

                                    {/* Header Section */}
                                    <div className="content-box" style={{ padding: '0 0 40px 0' }}>
                                        <div className="meta" style={{ marginBottom: '20px' }}>
                                            <ul style={{ display: 'flex', gap: '25px', listStyle: 'none', padding: 0, fontSize: '14px', color: '#666', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <i className="fas fa-user-circle" style={{ color: '#1351d8', fontSize: '16px' }}></i>
                                                    <span>{blog.author}</span>
                                                </li>
                                                <li style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                                                    <i className="fas fa-calendar-alt" style={{ color: '#1351d8', fontSize: '16px' }}></i>
                                                    <span>{blog.date}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <h1 style={{ fontSize: '42px', fontWeight: 800, color: '#0e2769', lineHeight: '1.2', marginBottom: '10px' }}>
                                            {blog.title}
                                        </h1>
                                    </div>

                                    {/* Featured Image */}
                                    <div className="thumb" style={{ marginBottom: '50px', position: 'relative', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                                        <Image
                                            src={blog.thumb}
                                            alt={blog.title}
                                            width={1200}
                                            height={600}
                                            style={{ width: '100%', height: 'auto', display: 'block' }}
                                            unoptimized={blog.thumb.startsWith('http')}
                                            priority
                                        />
                                    </div>

                                    {/* Content Body */}
                                    <div className="blog-content" style={{ fontSize: '19px', lineHeight: '1.85', color: '#2C3E50', fontFamily: 'Outfit, sans-serif' }}>
                                        <div dangerouslySetInnerHTML={{ __html: blog.fullContent || `<p>${blog.excerpt}</p>` }} />
                                    </div>

                                    {/* Footer */}
                                    <div style={{ marginTop: '60px', paddingTop: '40px', borderTop: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: '20px' }}>
                                        <div style={{ width: '60px', height: '60px', background: '#eef2f7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', color: '#1351d8' }}>
                                            <i className="fas fa-user-tie"></i>
                                        </div>
                                        <div>
                                            <h5 style={{ margin: 0, fontSize: '18px', fontWeight: 700 }}>Written by Navigator System</h5>
                                            <p style={{ margin: 0, fontSize: '15px', color: '#777' }}>Experts in Server Maintenance & IT Infrastructure Solutions.</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </LayoutV1>
    );
};

export default BlogDetails;
