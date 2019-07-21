import mongoose from 'mongoose';

export interface IUser extends mongoose.Document {
  username: string;
  googleId: string;
  avatar: string;
  placeIds: string[]
}

const userSchema = new mongoose.Schema({
  username: String,
  googleId: String,
  avatar: String,
  placeIds: [String]
});

export const User = mongoose.model<IUser>('User', userSchema);