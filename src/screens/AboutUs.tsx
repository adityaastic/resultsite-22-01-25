// import { InfoCard } from "../components/Cards.tsx"
import Footer from "../components/Footer.tsx"
import Header from "../components/Header.tsx"
import "../App.css"
import { useEffect } from 'react';



const AboutUs = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); 
  return (
    <>
    <div className="main-content">
      <Header/>

      {/* ==========> ABOUT US CONTENT <========== */}
      <div className="card-container">
        <h1 className="text-4xl font-bold text-center my-10" style={{backgroundImage:'linear-gradient(to top, green,black)',padding:'10px',width:'100%',zIndex:'1',top:10,color:'white'}}>About Us</h1>
        {/* <InfoCard /> */}
        <p className="text-left text-lg text-gray-600 mb-12" style={{marginTop:'2%',marginBottom:'20%',color:'white'}}>
        Welcome to BGM GAME, the flagship brand of BGM GAME PRIVATE LIMITED, where skill, strategy, and precision take center stage! We are a platform dedicated to providing an engaging and rewarding experience for users who enjoy testing their analytical abilities, mathematical skills, and decision-making prowess.

<h2 className="text-pattern">Our Mission</h2>
At BGM GAME, our mission is to create a platform that celebrates skill, strategy, and fair play. We aim to provide users with an opportunity to showcase their abilities, learn new techniques, and compete in a transparent and secure environment.
<h2 className="text-pattern">Our Vision</h2>

We envision a gaming ecosystem where users can engage in intellectually stimulating activities, improve their skills, and enjoy the thrill of strategic gameplay.
<h2 className="text-pattern">What We Offer</h2>

<strong>Diverse Markets:</strong>BGM Game offers access to 15 exciting markets, each with its unique characteristics and opportunities. Our markets include:
Silver City, London Bazar, Dev Darshan, Delhi Bazaar, Shri Ganesh, HR // 20, Faridabad, India Club, Gaziabad, Nepal Border, Gali, Shiv Shakti, Mafiya Night, Disawar, Morning Star
Each market provides a unique gaming experience, allowing users to explore different strategies and techniques to maximize their winnings.
Customer Support

<strong>Skill-Based Games:</strong>Our platform features a variety of skill-based games that challenge your mind and test your abilities. Some of our popular games include:
<ul>Jodi</ul>
<ul>Harraf</ul>
<ul>Manual</ul>
<ul>Copy Paste</ul>
<ul>Crossing</ul>
These games are designed to reward strategic thinking, mathematical skills, and precision, ensuring that every user has the opportunity to excel based on their abilities.
<h2 className="text-pattern">Referral Program</h2>
We value our users and believe in rewarding them for spreading the word about BGM Games. Our Referral Program allows you to earn rewards by inviting friends and family to join the platform. 
Both you and your referred friends can enjoy exciting bonuses and rewards, making the gaming experience even more rewarding

<h2 className="text-pattern">Secure and Transparent Platform</h2>
At BGM Game, we prioritize user security and transparency. 
Our platform is built with state-of-the-art technology to ensure 
that all transactions and gameplay are secure and fair. 
We adhere to strict data protection measures, ensuring that your 
personal and financial information is always safe.

<h2 className="text-pattern">Responsible Gaming</h2>
We are committed to promoting responsible gaming and ensuring that our 
users play within their means. Our platform includes features that 
allow users to set limits on their gameplay and seek help if needed. 
We believe in creating a balanced and enjoyable gaming experience for everyone.

<h1 className="text-pattern">Technical Excellence and Innovation</h1>

<h2 className="text-pattern">Advanced Algorithms</h2>
Our platform is powered by advanced algorithms that ensure fair gameplay and accurate results. These algorithms are designed to prevent any form of manipulation or cheating, ensuring a level playing field for all users.

<h2 className="text-pattern">Secure Transactions</h2>
We use SSL encryption and other advanced security measures to protect
 your financial transactions. Whether you are depositing funds or
  withdrawing winnings, you can be confident that your information 
  is secure.

  <h2 className="text-pattern">Real-Time Data Processing</h2>
  Our platform is equipped with real-time data processing capabilities, ensuring that game results are calculated and displayed instantly. This provides a seamless and uninterrupted gaming experience for our users.
  
  <h2 className="text-pattern">Scalable Infrastructure</h2>
  BGM Game is built on a scalable infrastructure that can handle a large number of users simultaneously. This ensures that our platform remains fast, reliable, 
  and responsive, even during peak hours.

  <h1 className="text-pattern"><b>The BGM Game Experience: A Step-by-Step Guide</b></h1>
  <div className="step-pattern">
  <p className="text-pattern">
1. Registration and KYC Verification
<ul>Step 1: Sign up on BGM Game using your mobile number and email address.</ul>
<ul>Step 2: Complete the KYC verification process by providing your Aadhaar card, PAN card, and bank account details.</ul>
<ul>Step 3: Once verified, you can start exploring the platform and participating in games.</ul>
2. Depositing Funds
<ul>Step 1: Navigate to the "Wallet" section and select "Add Points."</ul>
<ul>Step 2: Choose your preferred payment method (e.g., UPI, bank transfer) and enter the amount you wish to deposit.</ul>
<ul>Step 3: Confirm the transaction. The deposited amount, after deducting GST, will be credited to your account.</ul>
3. Playing Games
<ul>Step 1: Select your preferred market and game from the list of options.</ul>
<ul>Step 2: Place your game play by selecting numbers and entering the amount you wish to play.</ul>
<ul>Step 3: Submit your game play and wait for the results. If you win, the winnings will be credited to your account instantly.</ul>
4. Withdrawing Winnings
<ul>Step 1: Navigate to the "Wallet" section and select "Withdraw."</ul>
<ul>Step 2: Enter the amount you wish to withdraw and confirm the transaction.</ul>
<ul>Step 3: The amount, after deducting TDS (if applicable), will be transferred to your bank account within 30-40 minutes.</ul>

</p>

</div>
<h1 className="text-pattern"><b>Workflows</b></h1>

<ul>A. Gameplay Flow</ul>
Select game mode → Play games → Confirm → Deduct points → Await result.
Win: 90× points added to .
<ul>B. KYC Flow</ul>
User submits Aadhaar/PAN/bank details → API validation → Admin approval (if mismatch).
<ul>C. Compliance</ul>
Age gate (DOB ≥18).
Daily withdrawal limits.
RBI-compliant payment gateways.
<ul>D. Deposit & Withdrawal Rules</ul>
Minimum Deposit: ₹100.
Minimum Withdrawal: ₹300.
Withdrawal Timings:
Processed daily between 9:00 AM to 8:00 PM.
Requests are completed within 30–40 minutes after approval.
Deposit Flexibility:
Users can add funds 24/7, but withdrawals are restricted to KYC-verified users only.
<ul>5. Tax Deductions</ul>
28% GST on Deposits:
Example:
Deposit amount: ₹100.
Total including GST: ₹128 (₹100 + 28% GST).
User’s usable balance: ₹78.12 (after deducting ₹21.88 as GST).
30% TDS on Withdrawals:
Tax applies to (Withdrawal Amount – Non-Taxable Deposit Amount).
Example:
Deposit: ₹100 (usable balance after GST: ₹78.12).
Withdrawal request: ₹1,000.
Taxable Amount: ₹1,000 – ₹78.12 = ₹921.88.
TDS: 30% of ₹921.88 = ₹276.56.
Final Payout: ₹1,000 – ₹276.56 = ₹723.44 transferred to the user’s bank account.
<ul>6. Game Results & Validity</ul>
Minimum Deposit: ₹100.
Minimum Withdrawal: ₹300.
Withdrawal Timings:
Processed daily between 9:00 AM to 8:00 PM.
Requests are completed within 30–40 minutes after approval.
Deposit Flexibility:
Users can add funds 24/7, but withdrawals are restricted to KYC-verified users only.
<ul>7. Winning Rate</ul>
Payout Multiplier: 90x of the bet amount for correct predictions.
Example: Game Play ₹10 → Win ₹900 (₹10 × 90).

<ul>8. Customer Support</ul>
Contact for Issues:
Use the "Contact Us" button for queries related to deposits, withdrawals, gameplay, or technical errors.
Support available during withdrawal hours (9:00 AM – 8:00 PM).

<ul>8. Customer Support</ul>

Contact for Issues:
Use the "Contact Us" button for queries related to deposits, withdrawals, gameplay, or technical errors.
Support available during withdrawal hours (9:00 AM – 8:00 PM).

<ul>9. Compliance & Security</ul>

Data Encryption: All financial and KYC data secured via AES-256 encryption.
Transaction Receipts: Auto-generated for deposits, withdrawals, and bets.


<h1 className="text-pattern">Why Choose a BGM Game?</h1>
1. Skill-Based Gaming
Unlike games of chance, BGM Game focuses on skill-based gaming, where your analytical abilities, mathematical skills, and strategic thinking determine your success. This makes our platform not only entertaining but also intellectually rewarding.
2. User-Friendly Interface
Our platform is designed with a user-friendly interface, making it easy for both beginners and experienced gamers to navigate and enjoy the games. Whether you are accessing BGM Game on your mobile device or desktop, the experience is seamless and intuitive.
3. Exciting Rewards
At BGM Game, we believe in rewarding our users for their skills and efforts. From referral bonuses to game winnings, there are plenty of opportunities to earn rewards and enhance your gaming experience.
4. 24/7 Customer Support
We are dedicated to providing exceptional customer support to ensure that your experience on BGM Game is smooth and hassle-free. Our support team is available 24/7 to assist you with any queries or concerns. You can reach us via email at support@bgmgame.in or through the in-app chat feature.
 
 
<h2 className="text-pattern">Our Commitment to Fair Play</h2>
At BGM Game, we are committed to maintaining a fair and transparent gaming environment. We use advanced algorithms and security measures to ensure that all games are conducted fairly and that every user has an equal opportunity to succeed. Our platform is regularly audited to ensure compliance with industry standards and regulations.
 
Join the BGM Game Community
BGM Game is more than just a gaming platform; it is a community of passionate gamers who share a love for skill-based games and strategic thinking. By joining BGM Game, you become part of a vibrant and supportive community where you can learn, grow, and excel.
Join the BGM Game Community
BGM Game is more than just a gaming platform; it is a community of passionate gamers who share a love for skill-based games and strategic thinking. By joining BGM Game, you become part of a vibrant and supportive community where you can learn, grow, and excel.
 
 
<h2 className="text-pattern">Contact Us</h2>
We are always here to assist you. If you have any questions, feedback, or concerns, please feel free to reach out to us.
Merchant Legal Entity Name: BGM Game Private Limited
Operational Address: Dev Associates, RIICO Industrial Area, Gheeloth, Alwar, Rajasthan, 301705
Email ID: support@bgmgame.in
 
 
Join Us Today!
If you enjoy games that challenge your mind, test your skills, and reward your strategic thinking, BGM Game is the perfect platform for you. Join us today and experience the thrill of skill-based gaming across 15 exciting markets. Whether you are a seasoned gamer or a beginner, BGM Game offers something for everyone.
2023 © BGM Game. All rights reserved.
 



</p>

      </div>

      <Footer/>
    </div>
    </>
  )
}

export default AboutUs;
