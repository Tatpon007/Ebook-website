import React from "react";
import './footer.css';


const Footer =()=>{
    return (
        <div className="footer">
            <div className="sb_footer section_padding">
                <div className="sb_footer-links">
                    <div className="sb_footer-links-div">
                        <h4>For Business</h4>  
                        <a href="/employer">
                            <p>Employer</p>
                            </a>
                        <a href="/Healthplan">
                            <p>Health Plan</p>
                            </a>
                        <a href="/Individual">
                            <p>Individual</p>
                        </a>                                       
                    </div>
                    <div className="sb_footer-links-div">
                        <h4>Resource</h4>
                        <a href="/resource">
                            <p>Resource center</p>
                        </a>
                        <a href="/resource">
                            <p>Testimonials</p>
                        </a>
                        <a href="/resource">
                            <p>STV</p>
                        </a>
                        </div>
                        <div className="sb_footer-links-div">
                        <h4>Partners</h4>
                        <a href="/employer">
                            <p>Swing Tech</p>
                        </a>
                     </div>
                    <div className="sb_footer-links-div"> 
                         <h4>Company</h4>
                        <a href="/about">
                        <p>About</p>
                        </a>
                        <a href="/press">
                            <p>Press</p>
                            </a>
                        <a href="/career">
                            <p>Career</p>
                            </a>
                            <a href="/contact">
                            <p>Contact</p>
                            </a>
                    </div>
            </div>
        </div>
        
        <hr></hr>
     </div>
    )
}

export default Footer;