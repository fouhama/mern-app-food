import { CircleUserRoundIcon, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import MobileMenu from "./MobileMenu";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className='text-orange-500' />
      </SheetTrigger>
      <SheetContent className='space-y-3'>
        <SheetTitle>
          {isAuthenticated ? (
            <span className='flex items-center gap-2 '>
              <CircleUserRoundIcon className='text-orange-500' />
              {user?.email}
            </span>
          ) : (
            <span className=''>Welcome to MernEats.com!</span>
          )}
        </SheetTitle>
        <SheetDescription className='flex flex-col gap-4'>
          {isAuthenticated ? (
            <MobileMenu />
          ) : (
            <Button
              onClick={() => {
                loginWithRedirect();
              }}
              className='flex-1 font-bold bg-orange-500'>
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
