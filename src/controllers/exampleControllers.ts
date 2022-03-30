import { RequestHandler } from "express";
import createHttpError from "http-errors";
import Example from "../model/Example";

export const allUser: RequestHandler = async (req, res, next) => {
    try {
        const example = await Example.find();
        res.json(example);
    
        
      } catch (error) {
        return next(createHttpError.InternalServerError);
      }
};

export const UserUpdate: RequestHandler = async (req, res, next) => {
    try {
        const example = req.params.id;
        const updates = req.body;
        console.log(updates)
        const data = await Example.findByIdAndUpdate(example,updates , { new: true })
        res.json(data);
     
    
        
      } catch (error) {
        return next(createHttpError.InternalServerError);
      }
};

export const UserOne: RequestHandler = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const data = await Example.findOne({userId})
        res.json(data);
    
        
      } catch (error) {
        return next(createHttpError.InternalServerError);
      }
};

export const UserDelete: RequestHandler = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const data = await Example.findByIdAndDelete(userId)
        res.json("User Deleted!");
    
        
      } catch (error) {
        return next(createHttpError.InternalServerError);
      }
};


export const UserCreate: RequestHandler = async (req, res, next) => {
  const { name, id }: IExampleData = req.body;

  try {
    const example = await Example.findOne({ name });

    if (example) return next(createHttpError(406, "example already exists"));

    const newExample = new Example({ name, id });

    await newExample.save();

    res.json({ name, id });
  } catch (error) {
    return next(createHttpError.InternalServerError);
  }
};