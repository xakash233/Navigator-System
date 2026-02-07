"use client";
import Link from "next/link";

const SocialShareV1 = () => {
    return (
        <>
            <li>
                <Link href="https://www.facebook.com/profile.php?id=100068520871071" target='_blank'>
                    <i className="fab fa-facebook-f" style={{ color: '#1351d8' }} />
                </Link>
            </li>
            <li>
                <Link href="https://x.com/navigatorsyste2" target='_blank'>
                    <i className="fab fa-twitter" style={{ color: '#1351d8' }} />
                </Link>
            </li>
            <li>
                <Link href="https://www.youtube.com/channel/UCZvxa4YPExjmoDSuaZ1KeQg" target='_blank'>
                    <i className="fab fa-youtube" style={{ color: '#1351d8' }} />
                </Link>
            </li>
            <li>
                <Link href="https://www.linkedin.com/company/nsplindia" target='_blank'>
                    <i className="fab fa-linkedin-in" style={{ color: '#1351d8' }} />
                </Link>
            </li>
        </>
    );
};

export default SocialShareV1;