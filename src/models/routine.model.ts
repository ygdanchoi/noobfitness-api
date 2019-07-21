import { Schema, Document, model } from 'mongoose';

export interface IRoutine {
  name: string;
  workouts: IRoutineWorkout[];
}

export interface IRoutineWorkout {
  _id: String
  name: String;
}

const schema = new Schema({
  name: String,
  workouts: [{
    _id: Schema.Types.ObjectId,
    name: String
  }]
});

interface IRoutineDocument extends IRoutine, Document {
}

export const Routine = model<IRoutineDocument>('Routine', schema);