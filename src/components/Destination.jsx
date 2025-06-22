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
      <h1 className="md:text-4xl text-3xl font-bold lg:font-extrabold mb-2.5">
        {heading}
      </h1>
      <p className="md:text-xl text-[1rem] font-[400]">{text}</p>
      <div className={secContainerStyle}>
        <div className="md:w-[45%] w-[100%] md:px-3 px-9 text-start font-[1.1rem]">
          <h2 className="lg:text-3xl text-2xl font-[700] mb-6">{secHeading}</h2>
          <p className="lg:text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
            ducimus nesciunt minus tempore quas dolores aperiam nihil. Velit rem
            aspernatur repellendus aut ab temporibus reiciendis quasi. Impedit
            neque soluta porro.Lorem. Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Iure ducimus nesciunt minus tempore quas dolores
            aperiam nihil.
          </p>
        </div>
        <div className="relative md:w-[50%] md:px-2 px-9 w-[100%] mb-10 flex justify-between z-[-99]">
          <img
            src={image1}
            alt="Mountain with lakes"
            className="w-[49%] h-[350px] object-cover rounded-[6px] shadow-2xl"
          />
          <img
            src={image2}
            alt="people in the boats"
            className="w-[45%] md:w-[49%] h-[350px] object-cover rounded-[6px] shadow-2xl absolute top-[-10%] right-0 md:mr-0 mr-7"
          />
        </div>
      </div>
    </div>
  );
}

export default Destination;
