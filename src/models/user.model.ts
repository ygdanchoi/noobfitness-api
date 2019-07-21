import { Schema, Document, model } from 'mongoose';

export interface IUser {
  username: string;
  googleId: string;
  avatar: string;
}

const schema = new Schema({
  username: String,
  googleId: String,
  avatar: String
});

interface IUserDocument extends IUser, Document {
}

export const User = model<IUserDocument>('User', schema);