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
  const existingUser = await User.isUserExists(userId);

  if (!existingUser) {
    throw new Error('User not found');
  }

  return existingUser;
};

const updateUserInDB = async (userId: string, updatedUserData: TUser) => {
  const result = await User.findOneAndUpdate({ userId }, updatedUserData, {
    new: true,
  });
  return result;
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
