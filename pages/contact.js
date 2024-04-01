import {
    EmailRounded,
    LocationOnRounded,
    PhoneRounded,
} from "@mui/icons-material";
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

function Contact() {
    const [loginError, setLoginError] = useState(false);
    const [loginSuccess, setLoginSuccess] = useState(false);
    const [formFields, setFormFields] = useState({
        name: "",
        email: "",
        object: "",
        message: "",
    });

    function createOnFieldChange(field) {
        return (event) => {
            setFormFields({ ...formFields, [field]: event.target.value });
        };
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios
            .post("/api/contact", formFields)
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
                <title>Contactez STD Automobile à Voreppe pour vos besoins automobiles</title>
                <meta
                    name="description"
                    content="Besoin d'assistance ou d'informations sur nos véhicules d'occasion ? Contactez STD Automobile à Voreppe. Réponse rapide et service client dédié."
                />
            </Head>

            <Stack
                direction={"column"}
                alignItems={"center"}
                gap={{ sm: 8, xs: 6 }}
                mt={{ sm: 4, xs: 2 }}
                px={{ sm: 0, xs: 1 }}
            >
                <Typography variant="h1">Nous contacter</Typography>

                <Typography variant="h4">Vous avez des questions ?</Typography>

                <Typography variant="h2" textAlign={"center"}>
                    Nos espaces de vente sont ouverts sur rendez-vous
                </Typography>

                <Stack
                    direction={{ sm: "row", xs: "column" }}
                    width={{ lg: "50%", sm: "90%", xs: "70%" }}
                    alignItems={"center"}
                    justifyContent={"center"}
                    gap={{ sm: 12, xs: 6 }}
                >
                    <Stack
                        direction={"column"}
                        gap={4}
                        p={4}
                        alignItems={"center"}
                        justifyContent={"center"}
                        boxShadow={3}
                        borderRadius={"10px"}
                        width={1}
                        position={"relative"}
                    >
                        <Typography variant="h2">Appelez-nous</Typography>
                        <a
                            href={`tel:0479700290`}
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                    },
                                }}
                            >
                                04 76 94 30 58
                            </Typography>
                        </a>

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
                            <PhoneRounded sx={{ color: "white" }} />
                        </Stack>
                    </Stack>

                    <Stack
                        direction={"column"}
                        gap={4}
                        p={4}
                        alignItems={"center"}
                        justifyContent={"center"}
                        boxShadow={3}
                        borderRadius={"10px"}
                        width={1}
                        position={"relative"}
                    >
                        <Typography variant="h2">Nous trouver</Typography>
                        <a
                            href={`https://g.page/std-automobile?share`}
                            target="_blank"
                            style={{ textDecoration: "none", color: "black" }}
                        >
                            <Typography
                                variant="h2"
                                sx={{
                                    "&:hover": {
                                        transform: "scale(1.1)",
                                    },
                                }}
                                textAlign={"center"}
                            >
                                430 Rte de Palluel,
                                <br />
                                38340 Voreppe
                            </Typography>
                        </a>

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
                            <LocationOnRounded
                                sx={{ color: "white", transform: "rotate(-30deg)" }}
                            />
                        </Stack>
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
                        Formulaire de contact
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
                        label="Objet"
                        variant="outlined"
                        size="small"
                        InputLabelProps={{
                            style: {
                                color: "#9D9D9D",
                            },
                        }}
                        required
                        onChange={createOnFieldChange("object")}
                    />

                    <TextField
                        id="outlined-basic"
                        label="Votre message"
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
                        onChange={createOnFieldChange("message")}
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
                    src="/assets/stdpics/audi-black-white.jpeg"
                    alt=""
                    width={1500}
                    height={839}
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

export default Contact;
