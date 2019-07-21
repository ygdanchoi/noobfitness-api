import { Schema, Document, model } from 'mongoose';
import { IExercise } from './exercise.model';

export interface IWorkout {
  name: string;
  items: IWorkoutItem[];
}

export interface IWorkoutItem {
  exercise: IExercise;
  sets: IWorkoutItemSet;
  units: string;
}

export interface IWorkoutItemSet {
  reps: number,
  weight: number
}

const schema = new Schema({
  name: String,
  items: [{
    exercise: {
      name: String,
      muscleGroup: String,
      url: String
    },
    sets: [{
      reps: Number,
      items: Number
    }],
    units: String
  }]
});

interface IWorkoutDocument extends IWorkout, Document {
}

export const Workout = model<IWorkoutDocument>('Workout', schema);