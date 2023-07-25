const NavBar = () => {
  return (
    <div className="flex justify-between items-center h-28  mx-auto max-w-[1400px] font-universalFont">
      <h1 className="text-3xl pl-20 ">
        <span className="font-bold">A+</span> Studio
      </h1>
      <ul className="flex items-center font-semibold pr-20">
        <li className="p-6">Home</li>
        <li className="p-6">What Do We Do</li>
        <li className="p-6">Service</li>
        <li className="p-6">Project</li>
        <li className="p-6">Blog</li>
        <li className="p-6">Contact</li>
      </ul>
    </div>
  );
};
export default NavBar;
