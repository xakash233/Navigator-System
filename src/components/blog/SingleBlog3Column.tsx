
'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface DataType {
    id: number;
    thumb: string;
    author: string;
    date: string;
    title: string;
    excerpt: string;
}

const SingleBlog3Column = ({ blog }: { blog: DataType }) => {
    const { id, thumb, author, date, title, excerpt } = blog;

    // Determine initial image source
    const initialSrc = thumb.startsWith('http') ? thumb : `/assets/img/blog/${thumb}`;
    const [imgSrc, setImgSrc] = useState(initialSrc);
    const [hasError, setHasError] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    const handleError = () => {
        if (!hasError) {
            setImgSrc('/assets/img/blog/v1.jpg'); // Fallback image
            setHasError(true);
        }
    };

    return (
        <>
            <div
                className="blog-style-one item"
                style={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'all 0.4s ease',
                    transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
                    boxShadow: isHovered ? '0 15px 30px rgba(0,0,0,0.1)' : '0 0 0 rgba(0,0,0,0)',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    backgroundColor: '#fff'
                }}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="thumb" style={{ overflow: 'hidden', borderRadius: '8px 8px 0 0' }}>
                    <Link href={`/resources/blog/${id}`}>
                        <div style={{ overflow: 'hidden', position: 'relative', height: '250px' }}>
                            <Image
                                src={imgSrc}
                                alt="Thumb"
                                width={800}
                                height={600}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.6s ease',
                                    transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                                }}
                                onError={handleError}
                                unoptimized={imgSrc.startsWith('http') || hasError}
                            />
                            <div style={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                background: 'linear-gradient(to bottom, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)',
                                opacity: isHovered ? 1 : 0,
                                transition: 'opacity 0.4s ease'
                            }} />
                        </div>
                    </Link>
                </div>

                <div className="info" style={{ flex: 1, display: 'flex', flexDirection: 'column', padding: '30px' }}>
                    <div className="blog-meta" style={{ marginBottom: '15px' }}>
                        <ul style={{ padding: 0, display: 'flex', gap: '15px', fontSize: '13px', color: '#666' }}>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <i className="fas fa-user" style={{ color: '#1351d8' }} />
                                <span style={{ fontWeight: 500 }}>{author}</span>
                            </li>
                            <li style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                                <i className="fas fa-calendar-alt" style={{ color: '#1351d8' }} />
                                <span>{date}</span>
                            </li>
                        </ul>
                    </div>
                    <h4 style={{ marginBottom: '15px', fontSize: '22px', fontWeight: 600, lineHeight: 1.4 }}>
                        <Link href={`/resources/blog/${id}`} style={{
                            color: isHovered ? '#1351d8' : '#0e2769',
                            transition: 'color 0.3s ease',
                            textDecoration: 'none'
                        }}>
                            {title}
                        </Link>
                    </h4>
                    <p style={{ flex: 1, color: '#555', lineHeight: 1.7, marginBottom: '20px' }}>{excerpt}</p>
                    <Link
                        href={`/resources/blog/${id}`}
                        className="btn-simple"
                        style={{
                            marginTop: 'auto',
                            display: 'inline-flex',
                            alignItems: 'center',
                            gap: '8px',
                            fontWeight: 600,
                            color: '#1351d8',
                            transition: 'gap 0.3s ease'
                        }}
                    >
                        Read more <i className={`fas fa-arrow-right`} style={{
                            fontSize: '12px',
                            transition: 'transform 0.3s ease',
                            transform: isHovered ? 'translateX(5px)' : 'translateX(0)'
                        }} />
                    </Link>
                </div>
            </div>
        </>
    );
};

export default SingleBlog3Column;
