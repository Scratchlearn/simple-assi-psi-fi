import PropTypes from "prop-types";
import "./Section2.css";

const Section2 = ({ className = "" }) => {
  return (
    <div className={`section3 ${className}`}>
      <div className="container148">
        <div className="container149">
          <div className="container150">
            <img
              className="mask-group-icon10"
              alt=""
              src="/mask-group11@2x.png"
            />
          </div>
          <div className="margin3">
            <div className="container151">
              <div className="container152">
                <b className="meet-our-founder">Meet our Founder</b>
              </div>
            </div>
          </div>
          <div className="container153">
            <div className="container154">
              <div className="container155">
                <div className="container156">
                  <div className="margin4">
                    <div className="container157">
                      <div className="container158">
                        <img
                          className="pawan-panjabi-e1724242619180j-icon"
                          alt=""
                          src="/pawanpanjabie1724242619180jpg@2x.png"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="container159">
                    <div className="backgroundhorizontalborder11">
                      <div className="container160">
                        <div className="container161">
                          <b className="mr-pawan-punjabi">Mr. Pawan Punjabi</b>
                        </div>
                        <div className="container162">
                          <div className="founder">Founder</div>
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

Section2.propTypes = {
  className: PropTypes.string,
};

export default Section2;
