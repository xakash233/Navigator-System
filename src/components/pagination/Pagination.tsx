'use client';
import React from 'react';

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
    }

    const handlePageChange = (e: React.MouseEvent<HTMLAnchorElement>, page: number) => {
        e.preventDefault();
        onPageChange(page);
    };

    return (
        <div className="row">
            <div className="col-md-12 pagi-area text-center">
                <nav aria-label="navigation">
                    <ul className="pagination">
                        <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                            <a
                                className="page-link"
                                href="#"
                                onClick={(e) => currentPage > 1 && handlePageChange(e, currentPage - 1)}
                                style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
                            >
                                <i className="fas fa-angle-double-left" />
                            </a>
                        </li>

                        {pageNumbers.map(number => (
                            <li key={number} className={`page-item ${currentPage === number ? 'active' : ''}`}>
                                <a
                                    className="page-link"
                                    href="#"
                                    onClick={(e) => handlePageChange(e, number)}
                                >
                                    {number}
                                </a>
                            </li>
                        ))}

                        <li className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                            <a
                                className="page-link"
                                href="#"
                                onClick={(e) => currentPage < totalPages && handlePageChange(e, currentPage + 1)}
                                style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
                            >
                                <i className="fas fa-angle-double-right" />
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    );
};

export default Pagination;