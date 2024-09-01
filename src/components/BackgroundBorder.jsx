import { useCallback } from "react";
import PropTypes from "prop-types";
import "./BackgroundBorder.css";

const BackgroundBorder = ({ className = "" }) => {
  const onLinkContainerClick = useCallback(() => {
    window.open("https://alphaafin.com.au/");
  }, []);

  return (
    <div className={`backgroundborder ${className}`}>
      <div className="container214">
        <div className="container215">
          <div className="copyright-and-social">
            <div className="container216">
              <div className="link12" onClick={onLinkContainerClick}>
                <img className="svg-icon17" alt="" src="/svg7.svg" />
              </div>
              <div className="link12" onClick={onLinkContainerClick}>
                <img className="svg-icon17" alt="" src="/svg8.svg" />
              </div>
              <div className="link12" onClick={onLinkContainerClick}>
                <img className="svg-icon17" alt="" src="/svg9.svg" />
              </div>
              <div className="link12" onClick={onLinkContainerClick}>
                <img className="svg-icon17" alt="" src="/svg10.svg" />
              </div>
              <div className="link12" onClick={onLinkContainerClick}>
                <img className="svg-icon17" alt="" src="/svg11.svg" />
              </div>
            </div>
          </div>
          <div className="container217">
            <div className="all-rights-reserved">{`2024 © All Rights Reserved | Developed with `}</div>
            <div className="heart-icon">
              <img className="svg-icon22" alt="" src="/2764svg.svg" />
            </div>
            <div className="by"> by </div>
            <a className="psyber-inc" href="https://psyber.co/" target="_blank">
              Psyber Inc
            </a>
            <div className="container218" />
          </div>
        </div>
      </div>
    </div>
  );
};

BackgroundBorder.propTypes = {
  className: PropTypes.string,
};

export default BackgroundBorder;
