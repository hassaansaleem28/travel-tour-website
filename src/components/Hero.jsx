import { NavLink } from "react-router-dom";

function Hero({
  styles,
  imageUrl,
  heading,
  text,
  route,
  btnStyle,
  btnName,
  imgStyle,
  textStyle,
  headingStyle,
}) {
  return (
    <div className={styles}>
      <img
        alt="hero section image with a jeep inside."
        src={imageUrl}
        className={imgStyle}
      />
      <div className="absolute top-60 left-40">
        <h1 className={headingStyle}>{heading}</h1>
        <p className={textStyle}>{text}</p>
        <NavLink to={route} className={btnStyle}>
          {btnName}
        </NavLink>
      </div>
    </div>
  );
}

export default Hero;
