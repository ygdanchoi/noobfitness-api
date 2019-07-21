import { Schema, Document, model } from 'mongoose';

export interface IExercise {
  name: string;
  muscleGroup: string;
  url: string;
}

const schema = new Schema({
  name: String,
  muscleGroup: String,
  url: String
});

interface IExerciseDocument extends IExercise, Document {
}

export const Exercise = model<IExerciseDocument>('Exercise', schema);