
import React from 'react';
import LayoutV1 from "@/components/layouts/LayoutV1";
import BreadCrumb from "@/components/breadCrumb/BreadCrumb";
import QuoteFormV1 from "@/components/contact/QuoteForm";

const TalkToTeamPage = () => {
    return (
        <LayoutV1>
            <BreadCrumb title="Talk to Our Team" breadCrumb="Get a Quote" />
            <QuoteFormV1 />
        </LayoutV1>
    );
};

export default TalkToTeamPage;
