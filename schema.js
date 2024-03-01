import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema(
  {
    
    name: {
      type: String,
      required: true,
      min: 2,
      max: 100,
    },
    post: {
      type: String,
      required: true,
      max: 50,
    },
    dept: {
      type: String,
      required: true,
      min: 1,
    },
  },
  { timestamps: true }
);

const Faculty = mongoose.model("Faculty", FacultySchema);
export default Faculty;
