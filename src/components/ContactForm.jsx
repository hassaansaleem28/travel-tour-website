function ContactForm({ placeholder, heading, btnName, type, textarea }) {
  return (
    <div className="mx-[6rem] my-[4rem] text-stone-900">
      <h1 className="text-4xl font-[700] text-center mb-5">{heading}</h1>
      <form className="pt-[3rem] flex flex-col w-[50%] mx-auto my-auto">
        <input
          placeholder="Name"
          required
          type="text"
          className="h-[3rem] px-[1rem] mb-[2rem] rounded-[3rem] outline-none border-2"
        />
        <input
          placeholder="Email"
          required
          type="text"
          className="h-[3rem] px-[1rem] mb-[2rem] rounded-[3rem] outline-none border-2"
        />
        <input
          placeholder={placeholder}
          type={type}
          required
          className="h-[3rem] px-[1rem] mb-[2rem] rounded-[3rem] outline-none border-2"
        />
        <div>{textarea}</div>
        <button className="bg-stone-900 text-slate-100 px-7 font-[600] text-xl cursor-pointer hover:text-slate-100 hover:bg-teal-500 transition-all duration-0.3 ease-in-out rounded-md py-3 mx-[10rem]">
          {btnName}
        </button>
      </form>
    </div>
  );
}

export default ContactForm;
