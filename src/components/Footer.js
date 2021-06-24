import React from 'react';

const Footer = () => {

    return(

        <React.Fragment>
{/* ------------------------------------- Footer --------------------------------- */}

<footer id="footer">
    <div className="container">
      <h3>Mukesh Nagar</h3>
      <p>(MCA) Master of Computer Applications, Software Engineer and React js Developer.</p>
      <div className="social-links">
        <a href="https://www.linkedin.com/in/mukesh-naagar" className="linkedin"><i className="bx bxl-linkedin"></i></a>
        <a href="https://github.com/Mukesh-Naagar" className="Github"><i className="bx bxl-github"></i></a>
        <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
        <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
        
        
      </div>
     
      
    </div>
  </footer>



  {/* ----------------------------------------- End Footer ------------------------------------------- */}


  <a href="#" class="back-to-top"><i class="bx bx-up-arrow-alt"></i></a>
  <div id="preloader"></div>
        </React.Fragment>
    )
};

export default Footer;