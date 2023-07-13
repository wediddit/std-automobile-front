const sgMail = require("@sendgrid/mail");

export default function handler(req, res) {
  const { name, email, object, message } = req.body;

  // Transformer les retours à la ligne pour le HTML
  const content = message.replace(/(\r\n|\n|\r)/gm, "<br />");

  sgMail.setApiKey(process.env.NEXT_PUBLIC_KEY_SENDGRID);

  // Création du message
  const sendGridMail = {
    to: "std.automobile@gmail.com",
    from: "wediddit.contact@gmail.com",
    templateId: "d-3de4eebe210140cbb6252aa19e2dafdf",
    dynamic_template_data: {
      name: name,
      email: email,
      object: object,
      contenu: content,
    },
  };

  // Répondre immédiatement au client
  res.status(200).json({
    message: "Email will be sent!",
  });

  // Envoie l'e-mail après une courte pause
  setTimeout(async () => {
    try {
      await sgMail.send(sendGridMail);
      console.log("Email sent successfully");
    } catch {
      console.error("Error with sendgrid!");
      return;
    }
  }, 1000); // Pause d'une seconde avant d'envoyer l'e-mail
}
