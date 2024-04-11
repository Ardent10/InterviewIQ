import mongoose, { Document, Schema } from "mongoose";

export interface IFormResponse extends Document {
  userId:string;
  userFullName:string;
  email:string;
  formId: string;
  answers: {
    questionId: string;
    answerType: "Multiple Choice" | "Checkboxes" | "Paragraph";
    userSelectedChoiceIds?: string[];
    userParagraphAnswer?: string;
  }[];
}

const formResponseSchema: Schema<IFormResponse> = new mongoose.Schema({
  userId:String,
  userFullName:String,
  email:String,
  formId: String,
  answers: [
    {
      questionId: String,
      answerType: String,
      userSelectedChoiceIds: [String],
      userParagraphAnswer: String,
    },
  ],
});

const FormResponseModel = mongoose.model<IFormResponse>(
  "FormResponse",
  formResponseSchema
);

export default FormResponseModel;
