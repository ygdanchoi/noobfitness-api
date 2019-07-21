import { Request, RequestHandler } from 'express';
import { Exercise, IExercise }  from '../models/exercise.model';

const parseBody = (req: Request) => {
  if (!req.body.name) {
    throw 'Name is required';
  }
  const exercise: IExercise = {
    name: req.body.name,
    muscleGroup: req.body.muscleGroup,
    url: req.body.url
  };
  return exercise;
};

export const create: RequestHandler = (req, res) => {
  Exercise.create(parseBody(req))
    .then(exercise => res.send(exercise))
    .catch(err => res.send(err));
};

export const find: RequestHandler = (req, res) => {
  Exercise.find(req.body)
    .then(exercise => res.send(exercise))
    .catch(err => res.send(err));
};

export const findById: RequestHandler = (req, res) => {
  Exercise.findById(req.params.exerciseId)
    .then(exercise => res.send(exercise))
    .catch(err => res.send(err));
}

export const findByIdAndUpdate: RequestHandler = (req, res) => {
  Exercise.findByIdAndUpdate(req.params.exerciseId, parseBody(req), { new: true })
    .then(exercise => res.send(exercise))
    .catch(err => res.send(err));
}

export const findByIdAndRemove: RequestHandler = (req, res) => {
  Exercise.findByIdAndRemove(req.params.exerciseId)
    .then(exercise => res.send(exercise))
    .catch(err => res.send(err));
}