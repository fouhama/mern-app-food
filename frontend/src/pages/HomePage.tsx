import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
const HomePage = () => {
  return (
    <div className='flex flex-col  gap-12'>
      <div className=' md:px-32 flex flex-col  gap-5 -mt-16 shadow-md text-center py-8 rounded-lg bg-white'>
        <h3 className='text-5xl text-orange-600 tracking-tight font-bold '>
          Tuck into takeway too
        </h3>
        <span className='text-xl'>Food is just a click away!</span>
      </div>
      <div className='grid md:grid-cols-2 gap-5'>
        <img src={landingImage} alt='landing' />
        <div className='flex flex-col justify-center items-center gap-4 text-center'>
          <span className='text-3xl font-bold tracking-tight '>
            Order Takeaway even faster!
          </span>
          <span>
            Download the MernEats App for faster ordering and personalised
            recommendations
          </span>
          <img src={appDownloadImage} alt='app Download Image' />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
