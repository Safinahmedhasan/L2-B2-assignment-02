import { TUser } from './user.interface';
import { User } from './user.model';

const createUserIntoDB = async (userData: TUser) => {
  if (await User.isUserExists(userData.userId)) {
    throw new Error('User already exists');
  }
  const result = await User.create(userData);
  return result;
};

const getAllUserFromDB = async () => {
  const result = await User.find();
  return result;
};

const getSingleUserFromDB = async (userId: string) => {
  const existingUser: any = await User.isUserExists(userId);

  if (!existingUser) {
    throw new Error('User not found');
  }

  // Omit the password field from the response data
  const { password, ...userDataWithoutPassword } = existingUser.toObject();

  return userDataWithoutPassword;
};

const updateUserInDB = async (userId: string, updatedUserData: TUser) => {
  const existingUser = await User.isUserExists(userId);

  if (!existingUser) {
    throw new Error('User not found');
  }

  // Omit the password field from the updated data
  const { password, ...updatedDataWithoutPassword } = updatedUserData;

  // Update the user and retrieve the updated document
  const result = await User.findOneAndUpdate(
    { userId },
    updatedDataWithoutPassword,
    {
      new: true,
    }
  );

  if (!result) {
    throw new Error('Failed to update user');
  }
  const { password: updatedPassword, ...updatedUserDataWithoutPassword } =
    result.toObject();

  return updatedUserDataWithoutPassword;
};

const deleteUserFromDB = async (userId: string) => {
  const result = await User.findOneAndDelete({ userId });
  return result;
};

export const UserServices = {
  createUserIntoDB,
  getAllUserFromDB,
  getSingleUserFromDB,
  deleteUserFromDB,
  updateUserInDB,
};
