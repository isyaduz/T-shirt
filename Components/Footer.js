import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import '../Styles/Footer.css'

function Footer() {
    return (
        <div className="Footer">
            <div className="SocialMedia">
                <InstagramIcon /> <TwitterIcon />
                <a> &copy; 2023 T-shirts.com </a>
            </div>
        </div>
    )
}

export default Footer