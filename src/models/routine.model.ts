import { Schema, Document, model } from 'mongoose';

export interface IRoutine {
  name: string;
  workouts: IRoutineWorkout[];
}

export interface IRoutineWorkout {
  name: String;
}

const schema = new Schema({
  name: String,
  workouts: [{
    name: String
  }]
});

interface IRoutineDocument extends IRoutine, Document {
}

export const Routine = model<IRoutineDocument>('Routine', schema);