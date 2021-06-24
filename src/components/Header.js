import React from 'react';

const Header = () => {

    return(

        <React.Fragment>

            {/* ------------------- Mobile nav toggle button ---------------- */}


<button type="button" className="mobile-nav-toggle d-xl-none"><i className="icofont-navigation-menu"></i></button>


{/* ---------------- Header Start ------------------ */}
<header id="header" className="d-flex flex-column justify-content-center">

  <nav className="nav-menu">
    <ul>
      <li className="active"><a href="#hero"><i className="bx bx-home"></i> <span>Home</span></a></li>
      <li><a href="#about"><i className="bx bx-user"></i> <span>About</span></a></li>
      <li><a href="#resume"><i className="bx bx-file-blank"></i> <span>Resume</span></a></li>
      <li><a href="#portfolio"><i className="bx bx-book-content"></i> <span>Portfolio</span></a></li>
      <li><a href="#services"><i className="bx bx-server"></i> <span>Services</span></a></li>
      <li><a href="#contact"><i className="bx bx-envelope"></i> <span>Contact</span></a></li>
    </ul>
  </nav>

</header>


{/* ---------------- Hero Section Start ------------------- */}

<section id="hero" className="d-flex flex-column justify-content-center">
  <div className="container" data-aos="zoom-in" data-aos-delay="100">
    <h1>Mukesh Nagar</h1>
    <p>I'm <span className="typed" data-typed-items="Web Designer, Front-End Developer, React js Developer, Freelancer"></span></p>
    <div className="social-links">
      <a href="https://www.linkedin.com/in/mukesh-naagar" className="linkedin"><i className="bx bxl-linkedin"></i></a>
      <a href="https://github.com/Mukesh-Naagar" className="Github"><i className="bx bxl-github"></i></a> 
      <a href="#" className="twitter"><i className="bx bxl-twitter"></i></a>
      <a href="#" className="facebook"><i className="bx bxl-facebook"></i></a>
      <a href="#" className="instagram"><i className="bx bxl-instagram"></i></a>
      
    </div>
  </div>


  

</section>

        </React.Fragment>
    )
};

export default Header;