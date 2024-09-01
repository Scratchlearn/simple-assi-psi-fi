import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Container.css";

const Container = ({
  className = "",
  propPadding,
  propGap,
  maskGroup,
  propHeight,
  propWidth,
  propMinWidth,
  refinancing,
  propPadding1,
  propFlex,
  propDisplay,
  refinancingIsTheProcessOfRepla,
  loanWithANewOneTypicallyTo,
  ofBetterTerms,
}) => {
  const backgroundHorizontalBorderStyle = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const maskGroupIconStyle = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  const containerStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const refinancingDescriptionStyle = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const refinancingIsTheContainerStyle = useMemo(() => {
    return {
      flex: propFlex,
      display: propDisplay,
    };
  }, [propFlex, propDisplay]);

  return (
    <div className={`container48 ${className}`}>
      <div className="container49">
        <div
          className="backgroundhorizontalborder2"
          style={backgroundHorizontalBorderStyle}
        >
          <div className="content-wrapper">
            <div className="icon-wrapper">
              <div className="container50">
                <img
                  className="mask-group-icon"
                  alt=""
                  src={maskGroup}
                  style={maskGroupIconStyle}
                />
              </div>
              <div className="container51" style={containerStyle}>
                <b className="refinancing">{refinancing}</b>
              </div>
            </div>
            <div className="description-wrapper">
              <div className="container52">
                <div className="horizontal-divider" />
              </div>
            </div>
          </div>
          <div
            className="refinancing-description"
            style={refinancingDescriptionStyle}
          >
            <div
              className="refinancing-is-the-container"
              style={refinancingIsTheContainerStyle}
            >
              <p className="refinancing-is-the">
                {refinancingIsTheProcessOfRepla}
              </p>
              <p className="refinancing-is-the">{loanWithANewOneTypicallyTo}</p>
              <p className="refinancing-is-the">{ofBetterTerms}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  refinancing: PropTypes.string,
  refinancingIsTheProcessOfRepla: PropTypes.string,
  loanWithANewOneTypicallyTo: PropTypes.string,
  ofBetterTerms: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propGap: PropTypes.any,
  propHeight: PropTypes.any,
  propWidth: PropTypes.any,
  propMinWidth: PropTypes.any,
  propPadding1: PropTypes.any,
  propFlex: PropTypes.any,
  propDisplay: PropTypes.any,
};

export default Container;
