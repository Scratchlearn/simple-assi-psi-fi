import { useCallback } from "react";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://alphaafin.com.au/about-us/");
  }, []);

  return (
    <div className={`section-wrapper ${className}`}>
      <div className="section">
        <div className="container29">
          <div className="container30">
            <div className="container31">
              <div className="container32">
                <div className="container33">
                  <div className="backgroundhorizontalborder">
                    <div className="margin">
                      <div className="container34">
                        <div className="container35">
                          <div className="container36">
                            <b className="our-story">Our Story</b>
                          </div>
                          <div className="container37">
                            <div className="alpha-financial-solutions-container">
                              <p className="alpha-financial-solutions">
                                Alpha Financial Solutions provides bespoke
                                mortgage and finance
                              </p>
                              <p className="alpha-financial-solutions">
                                services. We believe that financial freedom is
                                not just a goal but a journey,
                              </p>
                              <p className="alpha-financial-solutions">
                                and we are here to guide you every step of the
                                way.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="container38">
                      <div className="container39">
                        <div className="container40">
                          <div className="link3" onClick={onLinkContainerClick}>
                            <div className="container41">
                              <div className="container42">
                                <a
                                  className="know-more"
                                  href="https://alphaafin.com.au/about-us/"
                                  target="_blank"
                                >
                                  Know More
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="container43">
                  <div className="backgroundhorizontalborder1">
                    <div className="container44">
                      <div className="container35">
                        <div className="container36">
                          <b className="our-story">Our Mission</b>
                        </div>
                        <div className="container37">
                          <div className="at-alpha-financial-container">
                            <p className="alpha-financial-solutions">
                              At Alpha Financial Solutions, our mission is to
                              empower individuals and
                            </p>
                            <p className="alpha-financial-solutions">
                              businesses to achieve their financial aspirations
                              through tailored
                            </p>
                            <p className="alpha-financial-solutions">
                              solutions, expert advice, and exceptional service.
                              We strive to build
                            </p>
                            <p className="alpha-financial-solutions">
                              lasting relationships based on trust, integrity,
                              and mutual success.
                            </p>
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
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
