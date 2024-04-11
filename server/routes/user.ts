import bcrypt from "bcryptjs";
import { Request, Response, Router } from "express";
import User, { IUser } from "../models/user";
import { verifyTokenAndAuthorization } from "../utils/verifyToken";

const router: Router = Router();

// GET USER
router.get(
  "/find/:id",
  verifyTokenAndAuthorization,
  async (req: Request, res: Response) => {
    try {
      const user: IUser | null = await User.findById(req.params.id);
      if (!user) {
        return res.status(404).json("User not found");
      }
      const { password, ...others } = user;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }
);

// UPDATE
router.put(
  "/:id",
  verifyTokenAndAuthorization,
  async (req: Request, res: Response) => {
    const { password, ...rest } = req.body;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      rest.password = hashedPassword;
    }

    try {
      const updatedUser: IUser | null = await User.findByIdAndUpdate(
        req.params.id,
        { $set: rest },
        { new: true }
      );
      if (!updatedUser) {
        return res.status(404).json("User not found");
      }
      const { password: userPassword, ...others } = updatedUser;
      res.status(200).json(others);
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }
);

// DELETE
router.delete(
  "/:id",
  verifyTokenAndAuthorization,
  async (req: Request, res: Response) => {
    try {
      const deletedUser: IUser | null = await User.findByIdAndDelete(
        req.params.id
      );
      if (!deletedUser) {
        return res.status(404).json("User not found");
      }
      res.status(200).json("User has been deleted!");
    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  }
);

export default router;
