import logo from "/chef-claude-icon.svg"

const Navbar = () => {
  return (
    <div className="py-6 px-3 shadow bg-white">
      <div className="flex justify-center items-center gap-4 p-2">
        <img
          src={logo}
          alt="logo"
          className="md:w-[2.5rem] sm:w-[2.25rem] w-[2rem]  h-auto"
        />
        <h1 className="md:text-[2rem] sm:text-[1.75rem] text-[1.5rem] font-inter font-normal">
          Chef Claude
        </h1>
      </div>
    </div>
  );
}

export default Navbar