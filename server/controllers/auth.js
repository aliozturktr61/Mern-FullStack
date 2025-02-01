const AuthSchema = require("../models/auth.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

// Kullanıcı kayıt fonksiyonu
const register = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Kullanıcı var mı kontrol et
    const user = await AuthSchema.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "Bu email zaten kullanılmakta" });
    }

    // Şifre kontrolü
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Şifre en az 6 karakter olmalıdır" });
    }

    // Şifre hashleme
    const hashPassword = await bcrypt.hash(password, 12);

    // Email formatını kontrol et
    if (!isEmail(email)) {
      return res
        .status(400)
        .json({ message: "Lütfen geçerli bir email adresi giriniz" });
    }

    // Yeni kullanıcı oluştur
    const newUser = await AuthSchema.create({
      username,
      email,
      password: hashPassword,
    });

    // Token oluştur
    const token = jwt.sign(
      { email: newUser.email, id: newUser._id },
      "SECRET_KEY",
      { expiresIn: "1h" }
    );

    res.status(201).json({ status: "OK", newUser, token });
  } catch (error) {
    return res.status(500).json({ message: "Bir hata oluştu", error });
  }
};

// Kullanıcı giriş fonksiyonu
const login = async (req, res) => {
  try {
    // Kullanıcı giriş bilgilerini al
    const { email, password } = req.body;

    // Kullanıcı var mı kontrol et
    const user = await AuthSchema.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "Kullanıcı bulunamadı" });
    }

    // Şifre karşılaştırma
    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      return res.status(400).json({ message: "Şifre hatalı" });
    }

    // Token oluştur
    const token = jwt.sign(
      { email: user.email, id: user._id },
      "SECRET_KEY",
      { expiresIn: "1h" }
    );

    res.status(200).json({ status: "OK", user, token });
  } catch (error) {
    return res.status(500).json({ message: "Bir hata oluştu", error });
  }
};

// Email format kontrol fonksiyonu
function isEmail(emailAddress) {
  let regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return regex.test(emailAddress);
}

module.exports = { register, login };