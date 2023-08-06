import Button from "../Button/Button"

const Navbar = () => {
  return (
    <div className=" w-[1440px] iphone:w-full iphone:flex-col iphone:items-center iphone:gap-8  justify-start items-start gap-20 inline-flex">
      <div className=" grow shrink basis-0 flex-col justify-start items-start gap-8 inline-flex">
        <div className=" self-stretch h-[62px] flex-col justify-start items-start gap-2 flex">
          <div className=" self-stretch text-white text-[56px] iphone:text-[32px] font-extrabold leading-[61.60px]">
            The best of the best
          </div>
        </div>
      </div>
      <Button text={"Sign up now"} className={"w-[233px] iphone:w-[233px] iphone:h-16 h-16 px-6 py-5 rounded-lg border-2 border-white justify-center items-center flex text-white text-2xl font-bold leading-normal tracking-wide"}></Button>
    </div>
  );
};

export default Navbar;
