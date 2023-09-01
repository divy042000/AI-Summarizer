import { logo } from "../assets";
const Hero = () => {
  return (
 
      <header className="w-full flex justify-center items-center flex-col border-black">
        <nav className="flex justify-between items-center flex-col">
       <img src={logo} alt="sumz_logo" className="w-28 object-contain"/>
        </nav>
      </header>
 
  );
};

export default Hero;
