import { EmailRounded } from "@mui/icons-material";
import {
  Alert,
  Box,
  Button,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";

function Recovery() {
  const [loginError, setLoginError] = useState(false);
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    phone: "",
    model: "",
    registration: "",
    date: "",
    mileage: "",
    state: "",
    accident: "",
    maintenance: "",
  });

  function createOnFieldChange(field) {
    return (event) => {
      setFormFields({ ...formFields, [field]: event.target.value });
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/recovery", formFields)
      .then((res) => {
        setLoginSuccess(true);
        console.log(res);
      })
      .catch((error) => {
        setLoginError(true);
        console.log(error);
      });
  };

  return (
    <>
      <Head>
        <title>Reprise - Std Automobile</title>
        <meta
          name="description"
          content="page reprise du site Std Automobile"
        />
      </Head>

      <Stack
        direction={"column"}
        alignItems={"center"}
        gap={{ sm: 8, xs: 6 }}
        mt={{ sm: 4, xs: 2 }}
      >
        <Typography variant="h1">Reprise de votre véhicule</Typography>

        <Box sx={{ textAlign: "center" }}>
          Pour l'estimation de votre véhicule,
          <br />
          vous aurez besoin de :
        </Box>

        <Stack direction={{ sm: "row", xs: "column" }} gap={{ sm: 4, xs: 3 }}>
          <Stack direction={"column"} gap={2} alignItems={"center"}>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                boxShadow: 4,
                p: 2,
                borderRadius: "15px",
                width: "110px",
                height: "110px",
              }}
            >
              <img
                src="/assets/carte-grise.svg"
                alt=""
                style={{ maxWidth: "110px" }}
              ></img>
            </Stack>
            <Box
              sx={{
                fontWeight: 700,
                textAlign: "center",
                maxWidth: "200px",
              }}
            >
              La carte grise de votre véhicule
            </Box>
          </Stack>

          <Stack direction={"column"} gap={2} alignItems={"center"}>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                boxShadow: 4,
                p: 2,
                borderRadius: "15px",
                width: "110px",
                height: "110px",
              }}
            >
              <img
                src="/assets/compteur-vitesse.jpeg"
                alt=""
                style={{ maxWidth: "110px" }}
              ></img>
            </Stack>
            <Box
              sx={{
                fontWeight: 700,
                textAlign: "center",
                maxWidth: "200px",
              }}
            >
              Le kilométrage de votre véhicule
            </Box>
          </Stack>

          <Stack direction={"column"} gap={2} alignItems={"center"}>
            <Stack
              alignItems={"center"}
              justifyContent={"center"}
              sx={{
                boxShadow: 4,
                p: 2,
                borderRadius: "15px",
                width: "110px",
                height: "110px",
              }}
            >
              <img
                src="/assets/defauts-vehicule.svg"
                alt=""
                style={{ maxWidth: "110px" }}
              ></img>
            </Stack>
            <Box
              sx={{
                fontWeight: 700,
                textAlign: "center",
                maxWidth: "200px",
              }}
            >
              Les défauts du véhicule
            </Box>
          </Stack>
        </Stack>

        {/* form */}
        <Stack
          component="form"
          onSubmit={handleSubmit}
          boxShadow={3}
          width={{ sm: 1 / 2, xs: "80%" }}
          p={{ sm: 4, xs: 2 }}
          borderRadius={3}
          gap={4}
          position={"relative"}
        >
          <Box sx={{ fontWeight: 700, textAlign: "center" }}>
            Formulaire de reprise
          </Box>

          <TextField
            id="outlined-basic"
            label="Nom"
            variant="outlined"
            size="small"
            InputLabelProps={{
              style: {
                color: "#9D9D9D",
              },
            }}
            required
            onChange={createOnFieldChange("name")}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            size="small"
            type="email"
            InputLabelProps={{
              style: {
                color: "#9D9D9D",
              },
            }}
            required
            onChange={createOnFieldChange("email")}
          />
          <TextField
            id="outlined-basic"
            label="Téléphone"
            variant="outlined"
            size="small"
            InputLabelProps={{
              style: {
                color: "#9D9D9D",
              },
            }}
            required
            onChange={createOnFieldChange("phone")}
          />
          <TextField
            id="outlined-basic"
            label="Marque et modèle du véhicule"
            variant="outlined"
            size="small"
            InputLabelProps={{
              style: {
                color: "#9D9D9D",
              },
            }}
            required
            onChange={createOnFieldChange("model")}
          />
          <TextField
            id="outlined-basic"
            label="Immatriculation"
            variant="outlined"
            size="small"
            InputLabelProps={{
              style: {
                color: "#9D9D9D",
              },
            }}
            required
            onChange={createOnFieldChange("registration")}
          />
          <TextField
            id="outlined-basic"
            label="Date de mise en circulation"
            variant="outlined"
            size="small"
            InputLabelProps={{
              style: {
                color: "#9D9D9D",
              },
            }}
            required
            onChange={createOnFieldChange("date")}
          />
          <TextField
            id="outlined-basic"
            label="Kilomètrage"
            variant="outlined"
            size="small"
            InputLabelProps={{
              style: {
                color: "#9D9D9D",
              },
            }}
            required
            onChange={createOnFieldChange("mileage")}
          />
          <TextField
            id="outlined-basic"
            label="État général du véhicule (bosses, rayures, etc.)"
            variant="outlined"
            size="small"
            multiline
            maxRows={8}
            rows={4}
            InputLabelProps={{
              style: {
                color: "#9D9D9D",
              },
            }}
            required
            onChange={createOnFieldChange("state")}
          />
          <TextField
            id="outlined-basic"
            label="Le véhicule est-il accidenté ?"
            variant="outlined"
            size="small"
            InputLabelProps={{
              style: {
                color: "#9D9D9D",
              },
            }}
            required
            onChange={createOnFieldChange("accident")}
          />
          <TextField
            id="outlined-basic"
            label="Avez-vous un carnet d'entretien à jour ?"
            variant="outlined"
            size="small"
            InputLabelProps={{
              style: {
                color: "#9D9D9D",
              },
            }}
            required
            onChange={createOnFieldChange("maintenance")}
          />
          <Box
            sx={{
              display: `${loginError ? "flex" : "none"}`,
              width: 1,
            }}
          >
            <Alert severity="error">Une erreur s'est produite !</Alert>
          </Box>
          <Box
            sx={{
              display: `${loginSuccess ? "flex" : "none"}`,
              width: 1,
            }}
          >
            <Alert severity="success" sx={{ width: 1 }}>
              Nous avons bien reçu votre message !
            </Alert>
          </Box>

          <Box
            sx={{
              width: 1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            {/* button */}
            {loginSuccess == false && (
              <Button
                type="submit"
                sx={{
                  color: "white",
                  backgroundColor: "black",
                  px: 2,
                  fontWeight: 700,
                  "&:hover": {
                    backgroundColor: "black",
                  },
                }}
              >
                Envoyer
              </Button>
            )}
          </Box>

          <Stack
            alignItems={"center"}
            justifyContent={"center"}
            sx={{
              position: "absolute",
              top: "-20px",
              left: "-20px",
              backgroundColor: "secondary.main",
              width: "45px",
              height: "45px",
              borderRadius: "100%",
            }}
          >
            <EmailRounded
              sx={{ color: "white", transform: "rotate(-45deg)" }}
            />
          </Stack>
        </Stack>

        <Image
          src="/assets/stdpics/3audiback.jpeg"
          alt=""
          width={1024}
          height={576}
          style={{
            width: "100%",
            height: "auto",
            marginTop: 7,
            marginBottom: 7,
          }}
        />
      </Stack>
    </>
  );
}

export default Recovery;
