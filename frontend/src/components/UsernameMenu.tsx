import {
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DropdownMenu } from "./ui/dropdown-menu";
import { CircleUserRound } from "lucide-react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center gap-2 px-3 hover:text-orange-500'>
        <CircleUserRound className='text-orange-500' />
        <span className='text-sm font-bold'>{user?.email}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='bg-white rounded-lg  p-3 flex flex-col gap-2 border'>
        <DropdownMenuItem>
          <Link
            to='/manage-restaurant'
            className='font-bold hover:text-orange-500'>
            Manage Restaurant
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Link to='/user-profile' className='font-bold hover:text-orange-500'>
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          <Button
            className='w-full font-bold hover:bg-orange-500'
            onClick={() => {
              logout();
            }}>
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
