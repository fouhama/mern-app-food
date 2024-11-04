import { NextFunction } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (
  req: any,
  res: any,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    // return res.status(400).json({ errors: errors.array() });
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};
export const validateMyUserRequest = [
  body("name").isString().notEmpty().withMessage("Name must be a string"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("the addressLine1  must be string"),
  body("city").isString().notEmpty().withMessage("the city must be  a string"),
  body("country")
    .isString()
    .notEmpty()
    .withMessage("the country must be  a string"),
  handleValidationErrors,
];
