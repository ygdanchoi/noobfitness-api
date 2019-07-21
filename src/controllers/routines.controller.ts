import { Request, RequestHandler } from 'express';
import { Routine, IRoutine }  from '../models/routine.model';

const parseBody = (req: Request) => {
  const routine: IRoutine = {
    name: req.body.name,
    workouts: req.body.workouts
  };
  return routine;
};

export const create: RequestHandler = (req, res) => {
  Routine.create(parseBody(req))
    .then(routine => res.send(routine))
    .catch(err => res.send(err));
};

export const findById: RequestHandler = (req, res) => {
  Routine.findById(req.params.routineId)
    .then(routine => res.send(routine))
    .catch(err => res.send(err));
}

export const findByIdAndUpdate: RequestHandler = (req, res) => {
  Routine.findByIdAndUpdate(req.params.routineId, parseBody(req), { new: true })
    .then(routine => res.send(routine))
    .catch(err => res.send(err));
}

export const findByIdAndRemove: RequestHandler = (req, res) => {
  Routine.findByIdAndRemove(req.params.routineId)
    .then(routine => res.send(routine))
    .catch(err => res.send(err));
}