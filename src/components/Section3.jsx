import PropTypes from "prop-types";
import "./Section3.css";

const Section3 = ({ className = "" }) => {
  return (
    <div className={`section1 ${className}`}>
      <div className="container123">
        <div className="container124">
          <div className="container125">
            <div className="container126">
              <div className="container127">
                <div className="container128">
                  <img className="image-icon1" alt="" src="/image1@2x.png" />
                </div>
              </div>
              <div className="container129">
                <img
                  className="imageborder-icon"
                  alt=""
                  src="/imageborder@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container130">
          <div className="background2" />
        </div>
      </div>
    </div>
  );
};

Section3.propTypes = {
  className: PropTypes.string,
};

export default Section3;
