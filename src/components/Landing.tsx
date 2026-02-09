import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import { config } from "../config";

const Landing = ({ children }: PropsWithChildren) => {
  const nameParts = config.developer.fullName.split(" ");
  const firstName = nameParts[0] || config.developer.name;
  const lastName = nameParts.slice(1).join(" ") || "";

  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container split-layout">
          {/* Left Side: All Text */}
          <div className="landing-left">
            <h2>Hello! I'm</h2>
            <h1>
              {firstName.toUpperCase()}
              {' '}
              <br />
              {lastName && <span>{lastName.toUpperCase()}</span>}
            </h1>
            <div className="landing-location">
              <p>Based in {config.social.location}</p>
            </div>

            <div className="landing-specialties-group">
              <h3>Specializing in</h3>
              <h2 className="landing-info-h2">
                <div className="landing-h2-1">{config.developer.title}</div>
              </h2>
              <div className="landing-description">
                <p>{config.developer.description}</p>
              </div>
            </div>
          </div>

          {/* Right Side: Hero Image */}
          <div className="landing-right">
            <div className="hero-photo-floating">
              <img src="/images/profile_circle.jpeg" alt={config.developer.fullName} />
            </div>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
