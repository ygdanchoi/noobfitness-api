import { Schema, Document, model } from 'mongoose';

export interface IWorkout {
  name: string;
  items: IWorkoutItem[];
}

export interface IWorkoutItem {
  exercise: IWorkoutExercise;
  sets: IWorkoutItemSet[];
  units: string;
}

export interface IWorkoutExercise {
  _id: string,
  name: string,
  muscleGroup: string,
  url: string
}

export interface IWorkoutItemSet {
  reps: number,
  weight: number
}

const schema = new Schema({
  name: String,
  items: [{
    exercise: {
      _id: Schema.Types.ObjectId,
      name: String,
      muscleGroup: String,
      url: String
    },
    sets: [{
      reps: Number,
      weight: Number
    }],
    units: String
  }]
});

interface IWorkoutDocument extends IWorkout, Document {
  // no subclass fields
}

export const Workout = model<IWorkoutDocument>('Workout', schema);