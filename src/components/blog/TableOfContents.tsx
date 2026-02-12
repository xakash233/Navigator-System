'use client';

import React, { useState, useEffect } from 'react';

interface TocItem {
    id: string;
    text: string;
    level: number;
}

const TableOfContents = ({ toc }: { toc: TocItem[] }) => {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                });
            },
            {
                rootMargin: '-100px 0px -60% 0px', // Offset for sticky header
                threshold: 0
            }
        );

        toc.forEach((item) => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => observer.disconnect();
    }, [toc]);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            const headerOffset = 140; // Approx header height
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // Optimistically set active
            setActiveId(id);
        }
    };

    if (toc.length === 0) return null;

    return (
        <nav className="toc-wrapper" style={{ position: 'sticky', top: '120px', zIndex: 10 }}>
            <div className="sidebar-item" style={{
                backgroundColor: '#fff',
                padding: '25px',
                borderRadius: '12px',
                boxShadow: '0 5px 30px rgba(0,0,0,0.08)',
                border: '1px solid #f0f0f0'
            }}>
                <div className="title" style={{
                    marginBottom: '10px',
                    paddingBottom: '10px',
                    borderBottom: '2px solid #f1f1f1'
                }}>
                    <h4 style={{
                        fontSize: '18px',
                        fontWeight: 700,
                        margin: 0,
                        color: '#0e2769',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}>
                        <i className="fas fa-list-ul" style={{ fontSize: '16px', color: '#1351d8' }}></i>
                        Table of Contents
                    </h4>
                </div>
                <ul className="sidebar-list" style={{ listStyle: 'none', padding: 0, margin: 0, maxHeight: 'calc(100vh - 250px)', overflowY: 'auto' }}>
                    {toc.map((item) => (
                        <li key={item.id} style={{
                            marginBottom: '6px',
                            marginLeft: item.level === 3 ? '12px' : '0'
                        }}>
                            <a
                                href={`#${item.id}`}
                                onClick={(e) => handleClick(e, item.id)}
                                style={{
                                    display: 'block',
                                    color: activeId === item.id ? '#1351d8' : '#555',
                                    textDecoration: 'none',
                                    fontSize: '14px',
                                    lineHeight: '1.5',
                                    fontWeight: activeId === item.id ? 600 : 400,
                                    borderLeft: `3px solid ${activeId === item.id ? '#1351d8' : 'transparent'}`,
                                    paddingLeft: '12px',
                                    paddingTop: '4px',
                                    paddingBottom: '4px',
                                    transition: 'all 0.2s ease',
                                    borderRadius: '0 4px 4px 0',
                                    backgroundColor: activeId === item.id ? 'rgba(19, 81, 216, 0.05)' : 'transparent'
                                }}
                            >
                                {item.text}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default TableOfContents;
