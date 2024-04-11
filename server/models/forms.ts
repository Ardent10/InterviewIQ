import mongoose, { Document, Schema,ObjectId } from "mongoose";

export interface IChoice extends Document {
  choiceText?: string;
  imageUrl?: string;
}

export interface IQuestion extends Document {
  questionText: string;
  questionImageUrl?: string;
  answerType: string;
  paragraphAnswer?: string;
  isRequired: boolean;
  choices: IChoice[];
}

export interface IForm extends Document {
  userId: string; 
  form_title: string;
  form_description: string;
  questions: IQuestion[];
  createdAt: Date;
  updatedAt: Date;
}

export const choiceSchema: Schema<IChoice> = new mongoose.Schema({
  choiceText: String,
  imageUrl: String,
});

export const questionSchema: Schema<IQuestion> = new mongoose.Schema({
  questionText: String,
  questionImageUrl: String,
  answerType: String,
  paragraphAnswer: String,
  isRequired: Boolean,
  choices: [choiceSchema],
});

const formSchema: Schema<IForm> = new mongoose.Schema({
    userId: String, 
    form_title: String,
    form_description: String,
    questions: [questionSchema],
  },
  { timestamps: true }
);

const FormModel = mongoose.model<IForm>("Form", formSchema);

export default FormModel;
