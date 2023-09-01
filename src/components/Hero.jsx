import { logo } from "../assets";
const Hero = () => {
  return (
 
      <header className="w-full flex justify-center items-center flex-col border-black">
        <nav className="flex justify-between  items-center w-full mb-10 pt-3 flex-col">
        <img src={logo} alt="sumz_logo" className="w-28 object-contain"/>
        <button type="button"  className="black_btn"  onClick={() => window.open('https://github.com/divy042000')}>Github</button>
        </nav>
              
      </header>

 
  );
};

export default Hero;
