import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useEffect } from 'react';


const Disclaimer = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
  return (
    <>
      <div className="main-content">
        <Header />
        <div className="card-container">
          <h1 style={{ textAlign: 'center', marginBottom: '20px',color:'white' }}>
            Disclaimer
          </h1>
          <div className='content-box'>
          <p style={{ textAlign: 'justify', marginBottom: '10px' ,color:'white'}}>
            The information provided on this website is for general informational purposes only. 
            All information on the site is provided in good faith, however we make no representation 
            or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, 
            reliability, availability or completeness of any information on the site.
          </p>

          <p style={{ textAlign: 'justify', marginBottom: '10px' ,color:'white' }}>
            Under no circumstance shall we have any liability to you for any loss or damage of any 
            kind incurred as a result of the use of the site or reliance on any information provided 
            on the site. Your use of the site and your reliance on any information on the site is 
            solely at your own risk.
          </p>

          <p style={{ textAlign: 'justify', marginBottom: '10px',color:'white' }}>
            This website may contain links to other external websites that are not provided or maintained 
            by or in any way affiliated with our company. Please note that we do not guarantee the accuracy, 
            relevance, timeliness, or completeness of any information on these external websites.
          </p>

          <p style={{ textAlign: 'justify', marginBottom: '10px' ,color:'white' }}>
            If you have any questions or concerns about our disclaimer or any content on our website, 
            feel free to contact us at:
          </p>


          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Disclaimer;

