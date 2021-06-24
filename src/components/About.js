import React from 'react';

const About = () => {

    return(

        <React.Fragment>



            {/* ------------------------------ About Section ------------------------------ */}


    <section id="about" className="about">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>About</h2>
          
        </div>

        <div className="row">
          <div className="col-lg-4 pt-4 pt-lg-0 content">
          <h3>About</h3><br></br>
          <p> I'm (MCA) Master of Computer Applications &amp; Front-End Develpoer Ability to create innovative, creative, &amp; interactive web designs to boost customer engagement. Sound knowledge in React.js, &amp; other UI frameworks. Build reusable code for future use while optimising web performance.</p>
          </div>
          <div className="col-lg-8 pt-4 pt-lg-0 content">
            <h3>Front-End React js Web Developer.</h3><br></br>
            <p className="font-italic">
            
            </p>
            <div className="row">
              <div className="col-lg-6">
                <ul>
                  
                  
                  <li><i className="icofont-rounded-right"></i> <strong>Phone:</strong> +91 9999 0500 34</li>
                  <li><i className="icofont-rounded-right"></i> <strong>City:</strong> City : New Delhi, India</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Website:</strong><span className="fnt"> https://github.com/Mukesh-Naagar/Myportfolio.github.io</span></li>
                </ul>
              </div>
              <div className="col-lg-6">
                <ul>
                  
                  
                  <li><i className="icofont-rounded-right"></i> <strong>Email-ID:</strong> MukeshNaagarr@gmail.com</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Freelance:</strong> Available</li>
                  <li><i className="icofont-rounded-right"></i> <strong>Degree:</strong> (MCA) Master of Computer Applications</li>
                 
                </ul>
              </div>
            </div>
           
          </div>
        </div>

      </div>
    </section>


    {/* ------------------------ End About Section --------------------------- */}



        </React.Fragment>
    )
};

export default About;