import { Schema, model } from "mongoose";

// Asegúrate de que el modelo de usuario se ajuste a tu caso específico
const userSchema = new Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required.'],
      unique: true,
      lowercase: true,
      trim: true // trim => para borrar los espacios 
    },
    password: {
      type: String,
      required: [true, 'Password is required.']
    },
    username: {
      type: String,
      required: [true, 'Se necesita un Nombre de usuario']
    },
    image_url: {
      type: String,
      default: "https://res.cloudinary.com/dhgfid3ej/image/upload/v1558806705/asdsadsa_iysw1l.jpg"
    }
  },
  {
    // Este segundo objeto agrega propiedades adicionales: `createdAt` y `updatedAt`
    timestamps: true
  }
);

const User = model("User", userSchema);

export default User;
