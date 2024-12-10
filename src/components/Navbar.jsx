import logo from "/chef-AI-icon.svg";

const Navbar = () => {
  return (
    <div className="py-6 px-3 shadow bg-white">
      <div className="flex justify-center items-center gap-4 p-2">
        <img
          src={logo}
          alt="logo"
          className="md:w-[2.5rem] sm:w-[2.25rem] w-[2rem] h-auto "
        />
        <h1 className="md:text-[2rem] sm:text-[1.75rem] text-[1.5rem] font-inter font-medium">
          Chef Mistral
        </h1>
      </div>
      <div>

      <p className="text-center text-gray-400 text-xs">
        An AI Recipe Generator Presented By{" "}
        <a className="text-gray-600 hover:transition duration-200 hover:ease-in-out hover:text-amber-600 " href="https://github.com/bikki10" target="_blank">
          Bikram Bhusal
        </a>
      </p>
      </div>
    </div>
  );
};

export default Navbar;
