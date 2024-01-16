import { Resend } from "resend";

const resend = new Resend("re_Ahy2iTnc_DRJ6dWHF9rxUFdd48JACawtM");

resend.emails.send({
  from: "onboarding@resend.dev",
  to: "jasanbadelldev@gmail.com",
  subject: "Hola Mundo",
  html: "<p>Felicidades lograste enviar <strong>Tu primer Correo</strong>!</p>",
});
