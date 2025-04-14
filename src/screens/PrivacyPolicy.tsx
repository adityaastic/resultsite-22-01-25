import React from "react";
import Footer from "../components/Footer.tsx";
import Header from "../components/Header.tsx";
import { useEffect } from 'react';

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  return (
    <>
      <div className="main-content">
        <Header />

        <div className="container">
          <h1 style={{ textAlign: "center", margin: "20px 0", color: "white" ,backgroundImage:'linear-gradient(to top, green,black)',width:'100%'}}>
            Privacy Policy
          </h1>
          <p style={{ color: "white", lineHeight: "1.8" }}>
            This Privacy Policy describes how we collect, use, and protect your
            personal information when you visit our website. By using our
            services, you agree to the terms outlined in this policy.
          </p>

          <h3 style={{ color: "white" }}>Information We Collect</h3>
          <p style={{ color: "white" }}>
            We may collect personal information such as your name, email
            address, and contact details when you interact with our website. We
            also collect non-personal information like IP addresses, browser
            type, and access times.
          </p>

          <h3 style={{ color: "white" }}>How We Use Your Information</h3>
          <p style={{ color: "white" }}>
            We use the collected information to provide, maintain, and improve
            our services. This includes responding to your inquiries, sending
            updates, and improving user experience.
          </p>

          <h3 style={{ color: "white" }}>Data Security</h3>
          <p style={{ color: "white" }}>
            We take appropriate measures to protect your personal information
            from unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h3 style={{ color: "white" }}>Third-Party Links</h3>
          <p style={{ color: "white" }}>
            Our website may contain links to third-party websites. We are not
            responsible for the privacy practices or content of those sites.
          </p>

          <h3 style={{ color: "white" }}>Changes to Privacy Policy</h3>
          <p style={{ color: "white" }}>
            We may update our Privacy Policy from time to time. Any changes will
            be posted on this page, and your continued use of our services
            constitutes acceptance of those changes.
          </p>

          <h3 style={{ color: "white" }}>Contact Us</h3>
          <p style={{ color: "white" }}>
            If you have any questions or concerns about our Privacy Policy,
            please contact us.
          </p>
        </div>

        <Footer />
      </div>
    </>
  );
};

export default PrivacyPolicy;
