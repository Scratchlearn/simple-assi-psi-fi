import { useCallback } from "react";
import PropTypes from "prop-types";
import "./Section1.css";

const Section1 = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://alphaafin.com.au/");
  }, []);

  return (
    <div className={`section4 ${className}`}>
      <img className="imageblur-icon" alt="" src="/imageblur@2x.png" />
      <div className="container183">
        <div className="cta-content-wrapper">
          <div className="container184">
            <img
              className="mask-group-icon11"
              alt=""
              src="/mask-group12@2x.png"
            />
          </div>
          <div className="margin6">
            <div className="container185">
              <div className="heading-22">
                <b className="talk-to-pawan">Talk to PAWAN now!</b>
              </div>
            </div>
          </div>
        </div>
        <div className="margin7">
          <div className="container186">
            <div className="container187">
              <div className="link9" onClick={onLinkContainerClick}>
                <div className="container188">
                  <div className="container189">
                    <b className="contact-us1">Contact us</b>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="cta-description">
          <div className="cta-description-wrapper">
            <div className="container190">
              <div className="feel-free-to">
                Feel Free to Get in Touch for a No Obligations
              </div>
            </div>
            <div className="container191">
              <div className="container192">
                <div className="link10" onClick={onLinkContainerClick}>
                  <div className="call-pawan-container">
                    <span>{`Call `}</span>
                    <b>PAWAN</b>
                    <span> !!!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Section1.propTypes = {
  className: PropTypes.string,
};

export default Section1;
