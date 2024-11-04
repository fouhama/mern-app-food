import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <div>
      <img
        src={hero}
        alt='hero'
        className='object-cover w-full max-h-[600px]: '
      />
    </div>
  );
};

export default Hero;
