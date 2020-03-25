/**
 * @module LANG
 * - A module for words viewable to the end-user.
 */

const english = {
  EMAIL_ADDRESS: "E-mail Address",
  SIGN_IN: "Sign in",
  PASSWORD: "Password",
  NEED_AN_ACCOUNT: "Don't have account?",
  CLICK_HERE: "Click here!"
};

const spanish = {
  // from https://translate.google.com/
  EMAIL_ADDRESS: "dirección de correo electrónico",
  SIGN_IN: "registrarse",
  PASSWORD: "contraseña",
  NEED_AN_ACCOUNT: "¿Necesito una cuenta?",
  CLICK_HERE: "¡haga clic aquí!"
};

const uzbek = {
  // from https://translate.google.com/
  EMAIL_ADDRESS: "elektron pochta manzili",
  SIGN_IN: "tizimga kirish",
  PASSWORD: "parol",
  NEED_AN_ACCOUNT: "Hisob qaydnomasi kerakmi?",
  CLICK_HERE: "bu yerni bosing!"
};

const LANGUAGES = { english, spanish, uzbek };

export default LANGUAGES["english"];
