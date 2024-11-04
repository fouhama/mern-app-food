import { UseGetCurrentUser, UseUpdateMyUser } from "../api/MyUserApi";
import UserProfileForm from "../forms/user-profile-form/UserProfileForm";

const UserProfilePage = () => {
  const { currentUser, isLoading: isLoadingUser } = UseGetCurrentUser();
  const { UpdateUser, isLoading: isLoadingUpdate } = UseUpdateMyUser();
  if (isLoadingUser) {
    return <span>Loading...</span>;
  }
  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }
  return (
    <UserProfileForm
      currentUser={currentUser}
      onSave={UpdateUser}
      isLoading={isLoadingUpdate}
    />
  );
};

export default UserProfilePage;
