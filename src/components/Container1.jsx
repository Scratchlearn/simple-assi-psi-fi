import { useMemo } from "react";
import PropTypes from "prop-types";
import "./Container1.css";

const Container1 = ({
  className = "",
  propPadding,
  lendersPlaceholderOne,
  propPadding1,
  lenders,
}) => {
  const container1Style = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const container2Style = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={`container131 ${className}`}>
      <div className="container132">
        <div className="backgroundhorizontalborder10">
          <div className="container133">
            <div className="container134" style={container1Style}>
              <b className="lenders-placeholder-one">{lendersPlaceholderOne}</b>
            </div>
            <div className="container135" style={container2Style}>
              <b className="lenders">{lenders}</b>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Container1.propTypes = {
  className: PropTypes.string,
  lendersPlaceholderOne: PropTypes.string,
  lenders: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
  propPadding1: PropTypes.any,
};

export default Container1;
