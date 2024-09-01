import { useCallback } from "react";
import PropTypes from "prop-types";
import "./BackgroundHorizontalBorder.css";

const BackgroundHorizontalBorder = ({ className = "" }) => {
  const onItemLinkClick = useCallback(() => {
    window.open("https://alphaafin.com.au/");
  }, []);

  return (
    <div className={`backgroundhorizontalborder12 ${className}`}>
      <div className="container193">
        <div className="container194">
          <div className="container195">
            <div className="margin8">
              <div className="container196">
                <div className="container196">
                  <b className="quick-contact">Quick Contact</b>
                </div>
              </div>
            </div>
            <div className="margin9">
              <div className="container198">
                <div className="container199">
                  <div className="at-alphaa-financial-container7">
                    <p className="with-our-premium">
                      At Alphaa Financial Solutions, we believe in empowering
                      your property dreams
                    </p>
                    <p className="with-our-premium">
                      with our premium financial services. 
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="container200">
              <div className="list3">
                <div className="item8">
                  <div className="container201">
                    <img className="svg-icon14" alt="" src="/svg4.svg" />
                  </div>
                  <div className="container202">
                    <b className="sydney-austrailia1">Sydney, Austrailia</b>
                  </div>
                </div>
                <div className="item9">
                  <div className="container201">
                    <img className="svg-icon14" alt="" src="/svg5.svg" />
                  </div>
                  <div className="container202">
                    <b className="b1">0468328227</b>
                  </div>
                </div>
                <div className="item10">
                  <div className="container201">
                    <img className="svg-icon14" alt="" src="/svg12.svg" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container206">
          <div className="background6">
            <b className="opening-hours">Opening Hours</b>
            <div className="schedule">
              <div className="item-link" onClick={onItemLinkClick}>
                <div className="container207">
                  <div className="container208">
                    <b className="mon-to-fri">Mon to Fri</b>
                  </div>
                  <div className="schedule-hours">
                    <div className="margin10">
                      <div className="horizontal-divider8" />
                    </div>
                  </div>
                  <div className="am-500pm">9:00am | 5:00pm</div>
                </div>
              </div>
              <div className="item-link1" onClick={onItemLinkClick}>
                <div className="container207">
                  <div className="container208">
                    <b className="sat-to-sun">Sat to Sun:</b>
                  </div>
                  <div className="margin-wrapper">
                    <div className="margin10">
                      <div className="horizontal-divider8" />
                    </div>
                  </div>
                  <div className="appointments-only">Appointments Only</div>
                </div>
              </div>
            </div>
            <div className="container211">
              <div className="link11" onClick={onItemLinkClick}>
                <div className="container212">
                  <div className="container213">
                    <b className="schedule-a-visit">Schedule a visit</b>
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

BackgroundHorizontalBorder.propTypes = {
  className: PropTypes.string,
};

export default BackgroundHorizontalBorder;
