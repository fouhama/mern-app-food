import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
const MobileMenu = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link to='/user-profile' className='hover:text-orange-500 font-bold'>
        User Profile
      </Link>
      <Button
        onClick={() => {
          logout();
        }}
        className='flex items-center hover:bg-orange-500'>
        Logout
      </Button>
    </>
  );
};

export default MobileMenu;
