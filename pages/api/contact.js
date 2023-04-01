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

  // SendGrid
  (async () => {
    try {
      await sgMail.send(sendGridMail);
      res.status(200).json({
        message: "Email send !",
      });
    } catch {
      res.status(500).json({
        message: "Error with sendgrid !",
      });
      return;
    }
  })();
}
