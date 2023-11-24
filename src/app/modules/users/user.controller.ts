import { Request, Response } from 'express';
import { UserServices } from './user.service';
import userSchema from './user.validation';

const createUser = async (req: Request, res: Response) => {
  try {
    const { user: userData } = req.body;
    const result = await UserServices.createUserIntoDB(
      userSchema.parse(userData)
    );

    res.status(200).json({
      success: true,
      message: 'User created successfully!',
      data: result,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: 'Something Is Wrong', error: err });
  }
};

const getAllUsers = async (req: Request, res: Response) => {
  try {
    const result = await UserServices.getAllUserFromDB();

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

const getSingleUsers = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.getSingleUserFromDB(userId);

    res.status(200).json({
      success: true,
      message: 'Users fetched successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};



const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const result = await UserServices.deleteUserFromDB(userId);

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found', data: null });
    }

    res.status(200).json({
      success: true,
      message: 'User deleted successfully!',
      data: null,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: 'Something went wrong', error: err });
  }
};

const updateUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const { user: updatedUserData } = req.body;

    const result = await UserServices.updateUserInDB(userId, updatedUserData);

    if (!result) {
      return res
        .status(404)
        .json({ success: false, message: 'User not found', data: null });
    }

    res
      .status(200)
      .json({
        success: true,
        message: 'User updated successfully!',
        data: result,
      });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: 'Something went wrong', error: err });
  }
};

export const UserControllers = {
  createUser,
  getAllUsers,
  getSingleUsers,
  deleteUser,
  updateUser,
};
