import { useAuth0 } from "@auth0/auth0-react";
import { UseCreateMyUser } from "../api/MyUserApi";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

const AuthCallback = () => {
  const { createUser } = UseCreateMyUser();
  const { user } = useAuth0();
  const hasCreatedUser = useRef(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);
  return <div>Loding...</div>;
};

export default AuthCallback;
