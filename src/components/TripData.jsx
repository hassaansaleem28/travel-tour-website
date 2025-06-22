function TripData({ image, heading }) {
  return (
    <div className="text-start shadow-2xl rounded-[8px] cursor-pointer px-[0.8rem] py-[1rem] w-[90%] md:px-5 md:py-5 md:w-[90%] md:mx-auto bg-slate-200">
      <div className="overflow-hidden rounded-[8px] h-[200px]">
        <img
          src={image}
          className="w-[100%] object-cover hover:transform hover:scale-[1.3] transition-all rounded-[8px] duration-0.3 ease-in-out h-[100%]"
          alt="trips to a place"
        />
      </div>
      <h3 className="text-[1.6rem] font-[700] my-5">{heading}</h3>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et expedita
        molestias iusto iste ex ipsum obcaecati, minima alias odio voluptatum
        dolor consectetur voluptate repellendus, incidunt, ipsam cum voluptas
        sed ratione.
      </p>
    </div>
  );
}

export default TripData;
