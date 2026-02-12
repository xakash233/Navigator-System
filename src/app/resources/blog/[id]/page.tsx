import React from 'react';
import { notFound } from 'next/navigation';
import BlogV1Data from '@/assets/jsonData/blog/BlogV1Data.json';
import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import Image from "next/image";
import Link from "next/link";
import TableOfContents from "@/components/blog/TableOfContents";

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

    // Process content to add IDs to headings and generate TOC
    const toc: { id: string; text: string; level: number }[] = [];
    let processedContent = blog.fullContent || `<p>${blog.excerpt}</p>`;

    // Simple regex to find h2 and h3
    processedContent = processedContent.replace(/<(h[23])>(.*?)<\/\1>/g, (match, tag, content) => {
        const id = content.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
        toc.push({ id, text: content, level: parseInt(tag.charAt(1)) });
        return `<${tag} id="${id}">${content}</${tag}>`;
    });

    return (
        <LayoutV1>
            <BreadCrumb title={blog.title} breadCrumb="blog-details" />
            <div className="blog-area single full-blog right-sidebar full-blog default-padding">
                <div className="container">
                    <div className="blog-items clearfix">
                        <div className="row">
                            {/* TOC Sidebar - Sticky on Desktop */}
                            <div className="col-lg-3 order-lg-last">
                                <TableOfContents toc={toc} />
                            </div>

                            {/* Main Content Area */}
                            <div className="col-lg-9 order-lg-first info">
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
                                            padding: '8px 20px',
                                            borderRadius: '50px',
                                            border: '1px solid #e0e0e0',
                                            boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                                            textDecoration: 'none',
                                            transition: '0.3s'
                                        }}>
                                            <i className="fas fa-arrow-left" style={{ color: '#1351d8', fontSize: '14px' }}></i>
                                            BACK
                                        </Link>
                                    </div>

                                    {/* Header Section */}
                                    <div className="content-box" style={{ padding: '0 0 30px 0' }}>
                                        <div className="meta" style={{ marginBottom: '15px' }}>
                                            <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', padding: 0, fontSize: '13px', color: '#666', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '1px' }}>
                                                <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                    <i className="fas fa-user-circle" style={{ color: '#1351d8', fontSize: '14px' }}></i>
                                                    <span>{blog.author}</span>
                                                </li>
                                                <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                                    <i className="fas fa-calendar-alt" style={{ color: '#1351d8', fontSize: '14px' }}></i>
                                                    <span>{blog.date}</span>
                                                </li>
                                            </ul>
                                        </div>
                                        <h1 style={{ fontSize: '32px', fontWeight: 800, color: '#0e2769', lineHeight: '1.2', marginBottom: '10px' }}>
                                            {blog.title}
                                        </h1>
                                    </div>

                                    {/* Featured Image - Smaller Size */}
                                    <div className="thumb" style={{
                                        marginBottom: '30px',
                                        position: 'relative',
                                        borderRadius: '10px',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
                                        maxWidth: '100%',
                                        height: '350px' // Constrain height
                                    }}>
                                        <Image
                                            src={blog.thumb}
                                            alt={blog.title}
                                            fill
                                            style={{ objectFit: 'cover' }}
                                            unoptimized={blog.thumb.startsWith('http')}
                                            priority
                                        />
                                    </div>

                                    {/* Content Body */}
                                    <div className="blog-content" style={{ fontSize: '17px', lineHeight: '1.75', color: '#2C3E50', fontFamily: 'Outfit, sans-serif' }}>
                                        <div dangerouslySetInnerHTML={{ __html: processedContent }} />
                                    </div>

                                    {/* Footer */}
                                    <div style={{ marginTop: '50px', paddingTop: '30px', borderTop: '1px solid #e0e0e0', display: 'flex', alignItems: 'center', gap: '15px' }}>
                                        <div style={{ width: '50px', height: '50px', background: '#eef2f7', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', color: '#1351d8' }}>
                                            <i className="fas fa-user-tie"></i>
                                        </div>
                                        <div>
                                            <h5 style={{ margin: 0, fontSize: '16px', fontWeight: 700 }}>Written by Navigator System</h5>
                                            <p style={{ margin: 0, fontSize: '14px', color: '#777' }}>Experts in Server Maintenance & IT Infrastructure Solutions.</p>
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
