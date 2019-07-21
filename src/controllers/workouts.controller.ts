import { Request, RequestHandler } from 'express';
import { Workout, IWorkout }  from '../models/workout.model';

const parseBody = (req: Request) => {
  const workout: IWorkout = {
    name: req.body.name,
    items: req.body.items
  };
  return workout;
};

export const create: RequestHandler = (req, res) => {
  Workout.create(parseBody(req))
    .then(workout => res.send(workout))
    .catch(err => res.send(err));
};

export const findById: RequestHandler = (req, res) => {
  Workout.findById(req.params.workoutId)
    .then(workout => res.send(workout))
    .catch(err => res.send(err));
}

export const findByIdAndUpdate: RequestHandler = (req, res) => {
  Workout.findByIdAndUpdate(req.params.workoutId, parseBody(req), { new: true })
    .then(workout => res.send(workout))
    .catch(err => res.send(err));
}

export const findByIdAndRemove: RequestHandler = (req, res) => {
  Workout.findByIdAndRemove(req.params.workoutId)
    .then(workout => res.send(workout))
    .catch(err => res.send(err));
}