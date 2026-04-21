import { Box, Stack, Typography } from "@mui/material";
import Head from "next/head";
import Image from "next/image";

function Delivery() {
    return (
        <>
            <Head>
                <title>Service de Livraison Rapide et Sécurisé - Voreppe</title>
                <meta
                    name="description"
                    content="Profitez d'un service de livraison fiable et rapide chez vous à Voreppe. Découvrez nos options flexibles pour recevoir vos achats en toute sécurité."
                />
            </Head>

            <Stack direction={"column"} gap={{ sm: 4, xs: 2 }} py={{ sm: 4, xs: 2 }}>
                <Typography variant="h1">Livraison</Typography>

                <Image
                    src="/assets/stdpics/audibackwhite.jpeg"
                    alt=""
                    width={1257}
                    height={722}
                    style={{ width: "100%", height: "auto" }}
                />

                <Stack
                    direction={"column"}
                    fontSize={{ sm: "30px", xs: "22px" }}
                    fontWeight={700}
                    px={{ sm: 4, xs: 2 }}
                    width={{ lg: "30%", xs: "90%" }}
                >
                    <Stack
                        sx={{
                            fontSize: { sm: "22px", xs: "18px" },
                        }}>
                        COMMENT ÇA FONCTIONNE ?
                    </Stack>
                    <Stack>
                        ON VOUS EXPLIQUE TOUT !
                    </Stack>
                </Stack>

                <Box
                    sx={{
                        px: { sm: 4, xs: 2 },
                    }}
                >
                    Lors de votre achat, vous avez le choix pour la livraison de votre
                    véhicule.
                </Box>

                <Stack px={{ sm: 4, xs: 2 }}>
                    <Stack direction={"column"} gap={1}>
                        <Box sx={{ color: "secondary.main", fontWeight: 700 }}>
                            Retrait sur le point de vente
                        </Box>
                        <Box>
                            Vous pouvez venir retirer votre véhicule directement en agence.
                            <br />
                            <br />
                            Le retrait se fera sur rendez-vous.
                        </Box>
                    </Stack>
                </Stack>

                <Stack px={{ sm: 4, xs: 2 }}>
                    <Stack direction={"column"} gap={1}>
                        <Box sx={{ color: "secondary.main", fontWeight: 700 }}>
                            Livraison à domicile
                        </Box>
                        <Box>
                            Vous souhaitez vous faire livrer le véhicule à votre{" "}
                            <u>domicile</u> ou sur votre <u>lieu de travail</u> ?
                            <br />
                            <br />
                            Grâce à notre société de transport, nous pouvons vous livrer votre
                            véhicule directement sur rendez-vous dans les <b>10 jours</b>{" "}
                            suivants votre achat.
                            <br />
                            <br />
                            Le prix de la livraison est fixe (590€) peu importe le lieu de
                            livraison en France métropolitaine.
                        </Box>
                    </Stack>
                </Stack>
            </Stack>
        </>
    );
}

export default Delivery;
