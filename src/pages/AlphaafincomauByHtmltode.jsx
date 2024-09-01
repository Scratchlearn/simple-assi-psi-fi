import Background from "../components/Background";
import Background1 from "../components/Background1";
import Container2 from "../components/Container2";
import FrameComponent from "../components/FrameComponent";
import FrameComponent1 from "../components/FrameComponent1";
import Section3 from "../components/Section3";
import Section from "../components/Section";
import Section2 from "../components/Section2";
import Background2 from "../components/Background2";
import Section1 from "../components/Section1";
import BackgroundHorizontalBorder from "../components/BackgroundHorizontalBorder";
import BackgroundBorder from "../components/BackgroundBorder";
import "./AlphaafincomauByHtmltode.css";

const AlphaafincomauByHtmltode = () => {
  return (
    <div className="alphaafincomau-by-htmltode">
      <div className="content">
        <Background />
        <div className="background-parent">
          <Background1 />
          <Container2 />
        </div>
        <FrameComponent />
        <FrameComponent1 />
        <div className="container">
          <div className="rectangle" />
        </div>
        <Section3 />
        <div className="section-parent">
          <Section />
          <Section2 />
        </div>
        <Background2 />
        <div className="section-group">
          <Section1 />
          <BackgroundHorizontalBorder />
        </div>
        
      </div>
      <BackgroundBorder className="background-border" /> {/* Footer */}
    </div>
  );
};

export default AlphaafincomauByHtmltode;
