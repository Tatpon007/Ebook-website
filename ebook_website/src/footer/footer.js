import React from "react";
import './footer.css';


const Footer =()=>{
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h4>Categories</h4>  
                        <a href="/comics and Novels">
                            <p>Comics and Novels</p>
                            </a>
                        <a href="/sciences">
                            <p>Sciences</p>
                            </a>
                        <a href="/bussiness and Economics">
                            <p>Bussiness and Economics</p>
                        </a>                                       
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Help</h4>
                        <a href="/FAQ">
                            <p>FAQ</p>
                        </a>
                        <a href="/term of use">
                            <p>Term of use</p>
                        </a>
                        <a href="/privacy policy">
                            <p>Privacy policy</p>
                        </a>
                        </div>
                        <div className="sb_footer-links-div">
                        <h4>About us</h4>
                        <a href="/employer">
                            <p>Location</p>
                        </a>
                     </div>
                    <div className="sb_footer-links-div"> 
                         <h4>Contact</h4>
                        <a href="/about">
                        <p>Facebook</p>
                        </a>
                        <a href="/press">
                            <p>Instagram</p>
                            </a>
                        <a href="/career">
                            <p>Twitter</p>
                            </a>
                            <a href="/contact">
                            <p>Thread</p>
                            </a>
                    </div>
            </div>
        </div>
        
        <hr></hr>
        <div className ="sb_footer-below">
            <div className="sb_footer-copyright">
            <p>
                @{new Date().getFullYear()} CodeInn. All right reserved.
            </p>
            </div>
            <div className="sb_foot-below-links">
                <a href="/terms"><div><p>Terms & Conditions</p></div></a>
                <a href="/privacy"><div><p>Privacy</p></div></a>
                <a href="/security"><div><p>Security</p></div></a>
                <a href="/cookie"><div><p>Cookie Declaration</p></div></a>
            </div>
        </div>

        </div>
    )
}

export default Footer;