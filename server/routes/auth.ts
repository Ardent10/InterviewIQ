import bcrypt from "bcryptjs";
import { Request, Response, Router } from "express";
import jwt from "jsonwebtoken";
import User from "../models/user";
import FormModel from "../models/forms";
import { sdeForm, sqlQueriesForm, dbmsForm } from "../utils/templateForms";

const router: Router = Router();

// REGISTRATION
router.post("/register", async (req: Request, res: Response) => {
  try {
    const {
      firstName,
      lastName,

      username,
      email,
      role,
      location,
      dob,
      password,
    } = req.body;

    if (
      !username ||
      !email ||
      !password ||
      !firstName ||
      !lastName ||
      !location ||
      !dob
    ) {
      return res.status(400).json("Missing Credentials!");
    } else {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const newUser = new User({
        firstName,
        lastName,
        username,
        email,
        location,
        dob,
        role: role ? role : "user",
        password: hashedPassword,
      });

      const savedUser = await newUser.save();

      const addtemplateForms = [
        { ...sdeForm, userId: savedUser._id },
        { ...dbmsForm, userId: savedUser._id },
        { ...sqlQueriesForm, userId: savedUser._id },
      ];

      await FormModel.insertMany(addtemplateForms);

      res.status(201).json({
        id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
        role: savedUser.role,
        dob: savedUser.dob,
        location: savedUser.location,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
      });
    }
  } catch (err: any) {
    res.status(500).json(err);
    console.log(err);
  }
});

// LOGIN
router.post("/login", async (req: Request, res: Response) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json("Wrong Credentials!");
    }

    const isPasswordValid: boolean = await bcrypt.compare(
      password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(401).json("Wrong Credentials!");
    }

    const accessToken: string = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SEC_KEY!,
      { expiresIn: "3d" }
    );

    const { password: userPassword, ...others } = user;

    res.status(200).json({ ...others, accessToken });
  } catch (err: any) {
    res.status(500).json(err);
  }
});

router.get("/getAccount", async (req: Request, res: Response) => {
  try {
    // Extract the token from the request header
    const token = req.header("Authorization")?.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json("Missing token");
    }

    // Verify the token
    const decodedToken: any = jwt.verify(token, process.env.JWT_SEC_KEY!);

    // Retrieve the user based on the decoded token
    const user = await User.findById(decodedToken.id);

    if (!user) {
      return res.status(401).json("User not found");
    }

    // Return the user data
    const { password, ...userData } = user.toObject();
    res.status(200).json(userData);
  } catch (err: any) {
    res.status(500).json(err);
    console.log(err);
  }
});

export default router;
