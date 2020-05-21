/**
 * @module LANG
 * - A module for words viewable to the end-user.
 */

const english = {
  EMAIL_ADDRESS: "E-mail Address",
  SIGN_IN: "Sign in",
  SIGN_UP: "Sign up",
  PASSWORD: "Password",
  CONFIRM_PW: "Confirm Password",
  NEED_AN_ACCOUNT: "Don't have account?",
  ALREADY_HAVE_ACCOUNT: "Already have an account?",
  CLICK_HERE: "Click here!",
  FIRST_NAME: "First Name",
  LAST_NAME: "Last Name",
  PW_MISMATCH: "Password Mismatch"
};

const spanish = {
  // from https://translate.google.com/
  EMAIL_ADDRESS: "dirección de correo electrónico",
  SIGN_IN: "registrarse",
  SIGN_UP: "unirse",
  PASSWORD: "contraseña",
  CONFIRM_PW: "Confirmar contraseña",
  PW_MISMATCH: "contraseña no coincide",
  NEED_AN_ACCOUNT: "¿Necesito una cuenta?",
  ALREADY_HAVE_ACCOUNT: "¿Ya tienes una cuenta?",
  CLICK_HERE: "¡haga clic aquí!",
  FIRST_NAME: "nombre de pila",
  LAST_NAME: "nombre de familia"
};

const uzbek = {
  // from https://translate.google.com/
  EMAIL_ADDRESS: "elektron pochta manzili",
  SIGN_IN: "tizimga kirish",
  SIGN_UP: "Ro'yxatdan o'tish",
  PASSWORD: "parol",
  NEED_AN_ACCOUNT: "Hisob qaydnomasi kerakmi?",
  ALREADY_HAVE_ACCOUNT: "Sizda allaqachon hisobingiz bormi?",
  CLICK_HERE: "bu yerni bosing!",
  PW_MISMATCH: "parol mos emas",
  CONFIRM_PW: "Parolni tasdiqlang",
  FIRST_NAME: "ism",
  LAST_NAME: "familiya"
};

const LANGUAGES = { english, spanish, uzbek };

export default LANGUAGES["english"];
