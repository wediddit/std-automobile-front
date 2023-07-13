const sgMail = require("@sendgrid/mail");

export default function handler(req, res) {
  const {
    name,
    email,
    phone,
    model,
    registration,
    date,
    mileage,
    state,
    accident,
    maintenance,
  } = req.body;

  // Transformer les retours à la ligne pour le HTML
  const content = state.replace(/(\r\n|\n|\r)/gm, "<br />");

  sgMail.setApiKey(process.env.NEXT_PUBLIC_KEY_SENDGRID);

  // Création du message
  const sendGridMail = {
    to: "std.automobile@gmail.com",
    from: "elfakihkarim@gmail.com",
    templateId: "d-ba48ce8ebd014cd3b25b29670905b31d",
    dynamic_template_data: {
      name: name,
      email: email,
      phone: phone,
      marque: model,
      immatriculation: registration,
      circulation: date,
      kilometrage: mileage,
      contenu: content,
      accidente: accident,
      entretien: maintenance,
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
