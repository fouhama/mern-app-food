import { useAuth0 } from "@auth0/auth0-react";
import { useMutation, useQuery } from "react-query";
import { toast } from "sonner";
import { User } from "../../types";
const VITE_API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const UseGetCurrentUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const getCruentUserRequest = async (): Promise<User> => {
    const token = await getAccessTokenSilently();
    const response = await fetch(`${VITE_API_BASE_URL}/api/my/user`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error(" Failed to fetch current user");
    }
    return response.json();
  };
  const {
    data: currentUser,
    isLoading,
    error,
  } = useQuery("fetchCurrentUser", getCruentUserRequest);
  if (error) {
    toast.error(error.toString());
  }
  return { currentUser, isLoading };
};

type CreateUserRequest = {
  auth0Id: string;
  email: string;
};

export const UseCreateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const createMyUserRequest = async (user: CreateUserRequest) => {
    const access_token = await getAccessTokenSilently();
    const response = await fetch(`${VITE_API_BASE_URL}/api/my/user`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${access_token}`,
      },
      body: JSON.stringify(user),
    });
    if (!response.ok) {
      throw new Error("Failed to create user");
    }
  };
  const {
    mutateAsync: createUser,
    isError,
    isLoading,
    isSuccess,
  } = useMutation(createMyUserRequest);

  return {
    createUser,
    isLoading,
    isSuccess,
    isError,
  };
};
type UpdateMyUserRequest = {
  name: string;
  addressLine1: string;
  city: string;
  country: string;
};

export const UseUpdateMyUser = () => {
  const { getAccessTokenSilently } = useAuth0();
  const updateMyUserRequest = async (formData: UpdateMyUserRequest) => {
    const access_token = await getAccessTokenSilently();
    const response = await fetch(`${VITE_API_BASE_URL}/api/my/user`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    if (!response.ok) {
      throw new Error("Failed to update user");
    }
  };
  const {
    mutateAsync: UpdateUser,
    isLoading,
    isSuccess,
    reset,
    error,
  } = useMutation(updateMyUserRequest);
  if (isSuccess) {
    toast.success("User updated successfully");
  }
  if (error) {
    toast.error(error.toString());
    reset();
  }
  return {
    UpdateUser,
    isLoading,
  };
};
