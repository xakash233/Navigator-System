
import React from 'react';
import Link from "next/link";
import { siteContent } from "@/data/siteContent";

const CtaBannerV1 = () => {
    const { ctaBanner } = siteContent.home;
    return (
        <div className="cta-style-one-area default-padding text-center bg-dark text-light" style={{ backgroundImage: `url(${ctaBanner.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 offset-lg-2">
                        <h2 className="title">{ctaBanner.title}</h2>
                        <p>{ctaBanner.subtitle}</p>
                        <Link className="btn btn-theme btn-md mt-20" href={ctaBanner.btnLink}>{ctaBanner.btnText}</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CtaBannerV1;
