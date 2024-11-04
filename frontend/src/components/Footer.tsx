const Footer = () => {
  return (
    <div className=' py-10 bg-orange-600 text-white'>
      <div className='container mx-auto gap-4 flex flex-col items-center  md:flex-row  justify-between '>
        <span className='font-bold text-3xl tracking-tight '>MearEat.com</span>
        <div className='flex gap-4  font-bold '>
          <span>Privacy Policy</span>
          <span>Terms of Service</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
