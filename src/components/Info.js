import React from "react";
import photo from "../images/photo.png";
import mail from "../images/mail.png";
import linkedin from "../images/linkedin.png";

export default function Info() {
    return (
        <>
            <img src={photo}></img>
            <h2 className="name"> Laura Smith </h2>
            <p className="role">Frontend Developer</p>
            <p className="website"> laurasmith.website</p>
            <section className="buttons">
                <button className="mail-btn">
                    <img className="mail-logo" src={mail}></img> Email
                </button>
                <button className="linkedin-btn">
                    <img className="linkedin-logo" src={linkedin}></img>
                    Linkedin
                </button>
            </section>
        </>
    );
}
