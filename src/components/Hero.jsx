import { NavLink } from "react-router-dom";

function Hero({
  styles,
  imageUrl,
  heading,
  span,
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
      <div className="absolute px-2 flex flex-col items-center w-full left-1/2 transform -translate-x-1/2  top-50">
        <h1 className={headingStyle}>
          {heading.split(" ").slice(0, 2).join(" ")}
          <br className="block sm:hidden" />
          {span}
        </h1>
        <p className={textStyle}>{text}</p>
        <NavLink to={route} className={btnStyle}>
          {btnName}
        </NavLink>
      </div>
    </div>
  );
}

export default Hero;
