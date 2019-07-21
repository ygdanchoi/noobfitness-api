import { Schema, Document, model } from 'mongoose';

export interface IUser {
  username: string;
  googleId: string;
  avatar: string;
  routines: IUserRoutine[]
}

export interface IUserRoutine {
  name: string;
}

const schema = new Schema({
  username: String,
  googleId: String,
  avatar: String,
  routines: [{
    name: String
  }]
});

interface IUserDocument extends IUser, Document {
}

export const User = model<IUserDocument>('User', schema);