function Destination({
  heading,
  text,
  secHeading,
  image1,
  image2,
  containerStyle,
  secContainerStyle,
}) {
  return (
    <div className={containerStyle}>
      <h1 className="text-4xl font-extrabold mb-2.5">{heading}</h1>
      <p className="text-xl font-[400]">{text}</p>
      <div className={secContainerStyle}>
        <div className="w-[45%] text-start font-[1.1rem]">
          <h2 className="text-2xl font-[700] mb-6">{secHeading}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            ducimus nesciunt minus tempore quas dolores aperiam nihil. Velit rem
            aspernatur repellendus aut ab temporibus reiciendis quasi. Impedit
            neque soluta porro.Lorem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iure ducimus nesciunt minus tempore quas dolores
            aperiam nihil. Velit rem aspernatur repellendus aut ab temporibus
            reiciendis quasi. Impedit neque soluta porro.Lorem
          </p>
        </div>
        <div className="relative w-[50%] flex justify-between z-[-99]">
          <img
            src={image1}
            alt="Mountain with lakes"
            className="w-[49%] h-[350px] object-cover rounded-[6px] shadow-2xl"
          />
          <img
            src={image2}
            alt="people in the boats"
            className="w-[49%] h-[350px] object-cover rounded-[6px] shadow-2xl absolute top-[-10%] right-0"
          />
        </div>
      </div>
    </div>
  );
}

export default Destination;
