import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import UsernameMenu from "./UsernameMenu";
const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    <span className='flex space-x-4 items-center'>
      {isAuthenticated ? (
        <>
          <Link to='order-status' className='font-bold hover:text-orange-500'>
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          onClick={async () => {
            await loginWithRedirect();
          }}
          variant='ghost'
          className='font-bold hover:text-orange-500 hover:bg-white'>
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
