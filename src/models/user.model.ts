import { Schema, Document, model } from 'mongoose';

export interface IUser {
  username: string;
  googleId: string;
  avatar: string;
  routines: IUserRoutine[]
}

export interface IUserRoutine {
  _id: string;
  name: string;
}

const schema = new Schema({
  username: String,
  googleId: String,
  avatar: String,
  routines: [{
    _id: Schema.Types.ObjectId,
    name: String
  }]
});

interface IUserDocument extends IUser, Document {
}

export const User = model<IUserDocument>('User', schema);