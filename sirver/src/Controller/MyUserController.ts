import { Request, Response } from "express";
import User from "../Models/user";

const getCurrentUser = async (req: any, res: any) => {
  try {
    const currentuser = await User.findOne({ _id: req.userId });
    if (!currentuser) {
      return res.status(404).json({ message: "User not found" });
    }
    return res.json(currentuser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: " Error fetching user" });
  }
};

const createCurrentUser = async (req: any, res: any) => {
  const { auth0Id } = req.body;
  const existUser = await User.findOne({ auth0Id });
  if (existUser) {
    return res.status(200).send();
  }
  try {
    const newUser = new User(req.body);
    await newUser.save();

    return res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error creating user" });
  }
};
const updateCurrentUser = async (req: any, res: any) => {
  const { name, addressLine1, city, country } = req.body;
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: " User not found" });
    }

    user.name = name;
    user.addressLine1 = addressLine1;
    user.city = city;
    user.country = country;

    await user.save();

    res.send(user);
  } catch (error) {
    res.sendStatus(500).json({
      message: "Error updating user",
    });
  }
};

export default {
  getCurrentUser,
  createCurrentUser,
  updateCurrentUser,
};
