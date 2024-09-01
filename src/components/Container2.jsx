import PropTypes from "prop-types";
import "./Container2.css";

const Container2 = ({ className = "" }) => {
  return (
    <div className={`container27 ${className}`}>
      <div className="container28">
        <div className="rs-slide">
          <img
            className="rs-sbg-px-rs-sbg-wrap-outd"
            alt=""
            src="/rssbgpx--rssbgwrap--outdoorportraitofcheerfulindianfamilysitting20240213021757utc11jpegscaledjpg@2x.png"
          />
          <div className="empowering-financial-security-container">
            <span className="empowering-financial-security-container1">
              <p className="empowering-financial-security">
                Empowering Financial Security
              </p>
              <p className="empowering-financial-security">for Everyone</p>
            </span>
          </div>
          <div className="testimonial-author-container">
            <div className="we-are-committed">
              We are committed to providing accessible and reliable financial
              services to help individuals and families.
            </div>
          </div>
        </div>
        <div className="rs-arrow">
          <img className="icon" alt="" src="/icon.svg" />
        </div>
        <div className="rs-arrow1">
          <img className="icon1" alt="" src="/icon1.svg" />
        </div>
      </div>
    </div>
  );
};

Container2.propTypes = {
  className: PropTypes.string,
};

export default Container2;
