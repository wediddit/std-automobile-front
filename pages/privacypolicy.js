import Head from "next/head";

const { Stack, Typography, Box } = require("@mui/material");

function Privacypolicy() {
  return (
    <>
      <Head>
        <title>Politique de confidentialité - Std Automobile</title>
        <meta
          name="description"
          content="page politique de confidentialité du site Std Automobile"
        />
      </Head>

      <Stack direction={"column"} p={{ sm: 4, xs: 3 }} gap={3}>
        <Typography variant="h3">1. Présentation du site</Typography>

        <Box>
          En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la
          confiance dans l’économie numérique, il est précisé aux utilisateurs
          du site <b>www.std-automobile.fr</b> l’identité des différents
          intervenants dans le cadre de sa réalisation et de son suivi :
        </Box>

        <Stack direction={"column"}>
          <Box
            sx={{
              fontWeight: 700,
              fontSize: { sm: "20px", xs: "18px" },
            }}
          >
            Propriétaire :
          </Box>
          <Box>
            Std Automobile – SIRET 84998160000026 – 430 Rte de Palluel, 38340
            Voreppe
          </Box>
        </Stack>

        <Stack direction={"column"}>
          <Box
            sx={{
              fontWeight: 700,
              fontSize: { sm: "20px", xs: "18px" },
            }}
          >
            Responsable publication :
          </Box>
          <Box>Std Automobile – contact@stdautomobile.com</Box>
        </Stack>

        <Box>
          Le responsable publication est une personne physique ou une personne
          morale.
        </Box>

        <Stack direction={"column"}>
          <Box
            sx={{
              fontWeight: 700,
              fontSize: { sm: "20px", xs: "18px" },
            }}
          >
            Hébergeur :
          </Box>
          <Box>Amazon Web Services (AWS)</Box>
        </Stack>

        <Typography variant="h3">2. Collecte de l’information</Typography>
        <Box>
          Nous recueillons des informations lorsque vous vous inscrivez sur nos
          formulaires de contact, de partenariat, de financement et de
          recrutement. Les informations recueillies incluent votre nom, votre
          société, votre adresse e-mail, numéro de téléphone.
          <br />
          <br />
          En outre, nous recevons et enregistrons automatiquement des
          informations à partir de votre ordinateur et navigateur, y compris
          votre adresse IP, vos logiciels et votre matériel, et la page que vous
          demandez.
          <br />
          <br />
          Nous conservons vos données dans la limite de trois ans. Si vous
          faites une demande pour retirer ou modifier vos données alors les
          anciennes seront supprimées.
        </Box>

        <Typography variant="h3">3. Utilisation des informations</Typography>
        <Box>
          Toutes les informations que nous recueillons auprès de vous peuvent
          être utilisées pour :
          <br />
          <br /> Personnaliser votre expérience et répondre à vos besoins
          individuels Améliorer notre site Web Améliorer le service client et
          vos besoins de prise en charge Vous contacter par e-mail Administrer
          une enquête
        </Box>

        <Typography variant="h3">
          4. Confidentialité du commerce en ligne
        </Typography>
        <Box>
          Nous sommes les seuls propriétaires des informations recueillies sur
          ce site. Vos informations personnelles ne seront pas vendues,
          échangées, transférées, ou données à une autre société pour n’importe
          quelle raison, sans votre consentement, en dehors de ce qui est
          nécessaire pour répondre à une demande.
        </Box>

        <Typography variant="h3">5. Divulgation à des tiers</Typography>
        <Box>
          Nous ne vendons, n’échangeons et ne transférons pas vos informations
          personnelles identifiables à des tiers. Cela ne comprend pas les
          tierce parties de confiance qui nous aident à exploiter notre site Web
          ou à mener nos affaires, tant que ces parties conviennent de garder
          ces informations confidentielles.
          <br />
          <br /> Nous pensons qu’il est nécessaire de partager des informations
          afin d’enquêter, de prévenir ou de prendre des mesures concernant des
          activités illégales, fraudes présumées, situations impliquant des
          menaces potentielles à la sécurité physique de toute personne,
          violations de nos conditions d’utilisation, ou quand la loi nous y
          contraint.
          <br />
          <br />
          Les informations non-privées, cependant, peuvent être fournies à
          d’autres parties pour le marketing, la publicité, ou d’autres
          utilisations.
        </Box>

        <Typography variant="h3">6. Protection des informations</Typography>
        <Box>
          Nous mettons en œuvre une variété de mesures de sécurité pour
          préserver la sécurité de vos informations personnelles. Nous utilisons
          un cryptage à la pointe de la technologie pour protéger les
          informations sensibles transmises en ligne. Nous protégeons également
          vos informations hors ligne. Seuls les employés qui ont besoin
          d’effectuer un travail spécifique (par exemple, la facturation ou le
          service à la clientèle) ont accès aux informations personnelles
          identifiables. Les ordinateurs et serveurs utilisés pour stocker des
          informations personnelles identifiables sont conservés dans un
          environnement sécurisé.
        </Box>

        <Typography variant="h3">7. Consentement</Typography>
        <Box>
          En utilisant notre site, vous consentez à notre politique de
          confidentialité.
        </Box>
      </Stack>
    </>
  );
}

export default Privacypolicy;
