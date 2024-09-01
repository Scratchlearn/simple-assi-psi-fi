import { useCallback } from "react";
import PropTypes from "prop-types";
import "./Background2.css";

const Background2 = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://alphaafin.com.au/");
  }, []);

  return (

    <div className={`background5 ${className}`}>
      <div className="flexROw">
        <div className="footer-top">
          <div className="footer-content-wrapper">
            <div className="footer-content">
              <div className="container163">
                <div className="container164">
                  <div className="container165">
                    <div className="heading-31">
                      <b className="contact-us">Contact Us</b>
                    </div>
                    <div className="container166">
                      <div className="please-feel-free">
                        Please feel free to ask if you have any further questions.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container167">
                <div className="container168">
                  <div className="list2">
                    <div className="item4">
                      <div className="container169">
                        <img className="svg-icon5" alt="" src="/svg4.svg" />
                      </div>
                      <div className="container170">
                        <b className="sydney-australia">Sydney, Australia</b>
                      </div>
                    </div>
                    <div className="item5">
                      <div className="container169">
                        <img className="svg-icon5" alt="" src="/svg5.svg" />
                      </div>
                      <div className="container170">
                        <b className="b">0468328227</b>
                      </div>
                    </div>
                    <div className="item6">
                      <div className="container169">
                        <img className="svg-icon5" alt="" src="/svg6.svg" />
                      </div>
                      <div className="container170">
                        <b className="weekend-appointments-only">
                          Mon - Fri: 9:00am - 5:00pm
                        </b>
                      </div>
                    </div>
                    <div className="item7">
                      <div className="container169">
                        <img className="svg-icon5" alt="" src="/svg6.svg" />
                      </div>
                      <div className="container176">
                        <b className="weekend-appointments-only">
                          Weekend Appointments Only
                        </b>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          
                <div className="container179">
                  <div className="link4" onClick={onLinkContainerClick}>
                    <img className="svg-icon9" alt="" src="/svg7.svg" />
                  </div>
                  <div className="link4" onClick={onLinkContainerClick}>
                    <img className="svg-icon9" alt="" src="/svg8.svg" />
                  </div>
                  <div className="link4" onClick={onLinkContainerClick}>
                    <img className="svg-icon9" alt="" src="/svg9.svg" />
                  </div>
                  <div className="link4" onClick={onLinkContainerClick}>
                    <img className="svg-icon9" alt="" src="/svg10.svg" />
                  </div>
                  <div className="link4" onClick={onLinkContainerClick}>
                    <img className="svg-icon9" alt="" src="/svg11.svg" />
                  </div>
               
            </div>
          </div>
        </div>
        <div className="margin5">
          <div className="container180">
            <div className="container181">
              <div className="container182">
                <img
                  className="close-up-person-working-call-c-icon"
                  alt=""
                  src="/closeuppersonworkingcallcenter1024x683jpg@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Background2.propTypes = {
  className: PropTypes.string,
};

export default Background2;
