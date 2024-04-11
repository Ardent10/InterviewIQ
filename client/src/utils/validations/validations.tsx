import * as yup from "yup";
import { Messages } from "./errorMessages";

const LoginSchema = yup.object().shape({
  email: yup.string().email().required(Messages.Email.required),
  password: yup.string().required(Messages.Password.required),
});

const SignupSchema = yup.object().shape({
  username: yup.string().required(Messages.Username.required),
  firstName: yup.string().required(Messages.FirstName.required),
  lastName: yup.string().required(Messages.LastName.required),
  email: yup.string().email().required(Messages.Email.required),
  password: yup.string().required(Messages.Password.required),
  dob: yup.string().required(Messages.DOB.required),
  location: yup.string().required(Messages.Location.required),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords do not match")
    .required("Confirm Password is required"),
});

const SearchSchema = yup.object().shape({
  Search: yup.string().required(Messages.Search.required),
});

const EditProfilePreviewUserSchema = yup.object().shape({
  name: yup.string().required(Messages.Name.required),
  bio: yup.string().required(Messages.Bio.required),
  location: yup.string().required(Messages.Location.required),
  porfolio: yup.string(),
  github: yup.string().required(Messages.Github.required),
});

const EditUserProfileSchema = yup.object().shape({
  firstName: yup.string().required(Messages.FirstName.required),
  lastName: yup.string().required(Messages.LastName.required),
  bio: yup.string().required(Messages.Bio.required),
  email: yup.string().email().required(Messages.Email.required),
  location: yup.string().required(Messages.Location.required),
  github: yup.string().required(Messages.Github.required),
  portfolio: yup.string(),

  about: yup.string().required(Messages.About.required),
  skills: yup.array().required(Messages.Skills.required),
  languages: yup.array().required(Messages.Languages.required),

  company: yup.string().required(Messages.Company.required),
  jobTitle: yup.string().required(Messages.JobTitle.required),
  startJobDate: yup.string().required(Messages.StartDate.required),
  endJobDate: yup.string().required(Messages.EndDate.required),

  university: yup.string().required(Messages.University.required),
  degree: yup.string().required(Messages.Degree.required),
  startDegreeDate: yup.string().required(Messages.StartDate.required),
  endDegreeDate: yup.string().required(Messages.EndDate.required),

  userImage: yup
    .mixed()
    .test("required", "You need to provide a file", (file) => {
      if (file) return true;
      return false;
    }),
});

const SendFormLinkSchema = yup.object().shape({
  reciever_email: yup.string().email().required(Messages.Email.required),
  subject: yup.string().required(Messages.Search.required),
  message: yup.string().required(Messages.Search.required),
});

export {
  EditProfilePreviewUserSchema,
  EditUserProfileSchema,
  LoginSchema,
  SearchSchema,
  SignupSchema,
  SendFormLinkSchema
};
