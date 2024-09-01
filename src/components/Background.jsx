import PropTypes from "prop-types";
import "./Background.css";

const Background = ({ className = "" }) => {
  return (
    <div className={`background ${className}`}>
      <div className="container2">
        <div className="container3">
          <div className="container4">
            <div className="container5">
              <div className="container6">
                <div className="list">
                  <div className="itemmargin">
                    <div className="item">
                      <div className="container7">
                        <img className="svg-icon" alt="" src="/svg.svg" />
                      </div>
                      <div className="container8">
                        <div className="sydney-austrailia">
                          Sydney, Austrailia
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="itemmargin">
                    <div className="item">
                      <div className="container7">
                        <img className="svg-icon" alt="" src="/svg1.svg" />
                      </div>
                      <div className="container8">
                        <div className="find-equipment-or">0468328227</div>
                      </div>
                    </div>
                  </div>
                  <div className="itemmargin">
                    <div className="item">
                      <div className="container7">
                        <img className="svg-icon" alt="" src="/svg2.svg" />
                      </div>
                      <div className="container8">
                        <div className="mon-fri">
                          Mon - Fri: 9:00am - 5:00pm
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="itemmargin3">
                    <div className="item3">
                      <div className="container7">
                        <img className="svg-icon" alt="" src="/svg2.svg" />
                      </div>
                      <div className="container14">
                        <div className="weekends-appointments-only">
                          Weekends Appointments Only
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

Background.propTypes = {
  className: PropTypes.string,
};

export default Background;
