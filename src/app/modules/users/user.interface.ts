import { Model } from 'mongoose';

export type TUser = {
  userId: number;
  username: string;
  password: string;
  fullName: {
    firstName: string;
    lastName: string;
  };
  age: number;
  email: string;
  isActive: boolean;
  hobbies: [string, string];
  address: {
    street: string;
    city: string;
    country: string;
  };
};

export interface UserModel extends Model<TUser> {
  // eslint-disable-next-line no-unused-vars
  isUserExists(userId: string): Promise<TUser | null>;
}
