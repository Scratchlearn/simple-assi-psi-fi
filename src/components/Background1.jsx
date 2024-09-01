import { useCallback } from "react";
import PropTypes from "prop-types";
import "./Background1.css";

const Background1 = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://alphaafin.com.au/");
  }, []);

  const onLinkMenuContainerClick = useCallback(() => {
    window.open("https://alphaafin.com.au/services/");
  }, []);

  return (
    <div className={`background1 ${className}`}>
      <div className="container15">
        <div className="container16">
          <div className="container17">
            <div className="container18">
              <div className="container19">
                <div className="link" onClick={onLinkContainerClick}>
                  <img
                    className="e1723186410313-768x252png-icon"
                    alt=""
                    src="/2e1723186410313768x252png@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container20">
          <div className="container21">
            <div className="container22">
              <div className="list1">
                <div className="link1" onClick={onLinkContainerClick}>
                  <div className="link-paints" onClick={onLinkContainerClick} />
                  <b className="home">Home</b>
                </div>
                <div className="about-us-wrapper">
                  <a
                    className="about-us"
                    href="https://alphaafin.com.au/about-us/"
                    target="_blank"
                  >
                    About Us
                  </a>
                </div>
                <div className="link-menu" onClick={onLinkMenuContainerClick}>
                  <a
                    className="services"
                    href="https://alphaafin.com.au/services/"
                    target="_blank"
                  >
                    Services
                  </a>
                  <div className="services-dropdown-icon">
                    <img className="svg-icon4" alt="" src="/svg3.svg" />
                  </div>
                </div>
                <div className="about-us-wrapper">
                  <a
                    className="faqs"
                    href="https://alphaafin.com.au/faqs/"
                    target="_blank"
                  >
                    FAQ’s
                  </a>
                </div>
              </div>
            </div>
            <div className="phone-number-container">
              <div className="container23">
                <div className="container24">
                  <div className="link2" onClick={onLinkContainerClick}>
                    <div className="container25">
                      <div className="container26">
                        <b className="call-us-anytime">Call us anytime</b>
                      </div>
                    </div>
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

Background1.propTypes = {
  className: PropTypes.string,
};

export default Background1;
