import React from "react";
import './Footer.css';


function C(){ 
    return(
        <div className="C">
            <div className="Upper_part_footer">
                <div className="Left_part_footer">
                    <div className="Tell_us_container">
                        <p className="Tell_us_par">Tell us you were here / report an issue</p>
                    </div>
                    <div className="Form_container">
                        <form action="">
                            <input type="text" placeholder="Please write your email" />
                            
                            <input type="text" placeholder="Please write your subject" />
                            <button className="Send_footer_button">Send</button> 
                        </form>
                    </div>
                </div>
                <div className="Middle_part_footer">
                   <div className="About_us_container">
                        <p className="About_us_header">About Us</p>
                    </div>
                    <div className="About_us_par_container">
                        <p className="about_us_p">CIO is an independent company dedicated to revolutionizing the e-commerce landscape. Here, we curate a diverse selection of products, each chosen for its exceptional quality, style, and innovation. Our commitment to providing unparalleled shopping experiences drives us to constantly evolve and adapt to meet the ever-changing needs of our customers. With a focus on individuality and customer satisfaction, we invite you to explore our platform and embark on a journey of discovery, where every purchase tells a unique story. Join us at CIO and experience the true essence of online shopping.</p>
                    </div>
                </div>
                <div className="Right_part_footer">
                    <div className="Contact_container">
                        <p className="contact_header">Contact:</p>
                    </div>
                    <div className="Phone_and_email_container">
                        <p className="phone">
                            <i class="tel_ico fa fa-phone" aria-hidden="true"></i>+467132122
                        </p>
                        <p className="email">
                            <i class="mail_ico fa fa-envelope" aria-hidden="true"></i>CIO@gmail.com                            
                        </p>
                        <div className="Icons_container">
                            <p className="Social_media_border"><i class="Instagram fab fa-instagram" aria-hidden="true"></i></p>
                            <p className="Social_media_border"><i class="Twitter fab fa-twitter" aria-hidden="true"></i></p>
                            <p className="Social_media_border"><i class="Whatsapp fab fa-whatsapp" aria-hidden="true"></i></p>
                            <p className="Social_media_border"><i class="Linkedin fab fa-linkedin" aria-hidden="true"></i></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Lower_part_footer">
                <p className="Copyright_par">Copyright © 2024, CIO. All Rights Reserved</p>
            </div>
        </div>
    )
}

export default C; 