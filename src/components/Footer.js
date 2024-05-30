import React from "react";
import twitterLogo from "../images/twitter.png";
import fbLogo from "../images/facebook.png";
import instaLogo from "../images/instagram.png";
import gitHubLogo from "../images/github.png";

export default function Footer() {
    return (
        <footer className="footer">
            <img src={twitterLogo}></img>
            <img src={fbLogo}></img>
            <img src={instaLogo}></img>
            <img src={gitHubLogo}></img>
        </footer>
    );
}
