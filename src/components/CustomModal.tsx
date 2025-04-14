import React, { useState } from 'react';
import './CustomModal.css';

const CustomModal = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* FAQ Button */}
      <li style={{ cursor: 'pointer', color: 'white' }} onClick={handleShow}>
        FAQ
      </li>

      {/* Custom Modal */}
      {show && (
        <div className="modal-overlay">
          <div className="custom-modal">
            <div className="modal-header">
              <h3>Frequently Asked Questions (FAQ)</h3>
              <span className="close-btn" onClick={handleClose}>&times;</span>
            </div>

            <div className="modal-body">
              <h5>1. What is BGM Game?</h5>
              <p>BGM Game is a platform where you can get the latest game results, news, and updates.</p>

              <h5>2. Is BGM Game Legal?</h5>
              <p>Yes, BGM Game follows all legal guidelines and ensures the best experience for its users.</p>

              <h5>3. How can I contact support?</h5>
              <p>You can visit our <a href="/contact">Contact Page</a> for any assistance.</p>

              <h5>4. Is there any fee to play the game?</h5>
              <p>No, BGM Game is absolutely free to use for all users.</p>
            </div>

            <div className="modal-footer">
              <button className="close-btn-footer" onClick={handleClose}>Close</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;
