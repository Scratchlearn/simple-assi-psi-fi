import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Container1 from './Container1';
import './Section.css';

const Section = ({ className = '' }) => {
  // State to handle animation
  const [animate, setAnimate] = useState(false);

  // Function to handle click event
  const handleClick = () => {
    setAnimate(true);
    setTimeout(() => setAnimate(false), 300); // Remove the class after animation duration
  };

  return (
    <div className={`section2 ${className}`}>
      <div className="container136">
        <div className="container137">
          <div className="background3">
            <div className="container138">
              <div className="container139">
                <div className="container140">
                  <div className="container141">
                    <img
                      className="mask-group-icon9"
                      alt=""
                      src="/mask-group10@2x.png"
                    />
                  </div>
                  <div className="container142">
                    <div className="heading-21">
                      <b className="we-believe-youre">
                        We believe you're bright
                      </b>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container143">
          <div className="background4">
            <div className="container144">
              <div className="container145">
                <img className="image-icon2" alt="" src="/image2@2x.png" />
              </div>
            </div>
            <div
              className={`container146 ${animate ? 'animate-click' : ''}`}
              onClick={handleClick} // Trigger animation on click
            >
              <div className="container147">
                <Container1 lendersPlaceholderOne="320+" lenders="Lenders" />
                <Container1
                  propPadding="0rem var(--padding-46xl) var(--padding-12xs-7)"
                  lendersPlaceholderOne="20+"
                  propPadding1="0rem var(--padding-12xl)"
                  lenders="Years Experience"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Section.propTypes = {
  className: PropTypes.string,
};

export default Section;
