const mongoose = require("mongoose");
//*
const AuthSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Lütfen username alanını belirleyin"],
      trim: true,
      unique: [
        true,
        "Bu isimde bir kullanıcı mebcut. Lütfen farklı bir kullanıcı belirleyin",
      ],
    },

    email: {
      type: String,
      required: [true, "Lütfen email alanını belirleyin"],
      unique: [true, "Lütfen farklı bir email belirleyin"],
    },

    password: {
      type: String,
      required: [true, "Lütfen şifreyi belirleyin"],
    },
    date:{
        type:Date,
        default:new Date()
    }
  },
  //* ayarlar
  //* timestamps sayesinde oluşturduğumuz bütün belgelere oto olarak createdAt ve updatedAt eklenir
  {
    timestamps: true,
  }
);

module.exports=mongoose.model("auth", AuthSchema);