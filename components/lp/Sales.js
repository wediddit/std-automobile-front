import { Box, Stack } from "@mui/material";
import ButtonSecondary from "../buttons/ButtonSecondary";
import Link from "next/link";
import Image from "next/image";

function Sales() {
  return (
    <Stack
      p={{ sm: 3, xs: 2 }}
      gap={{ sm: 12, xs: 6 }}
      sx={{
        backgroundColor: "primary.main",
      }}
    >
      <Stack direction={{ lg: "row", xs: "column" }} gap={{ sm: 4, xs: 2 }}>
        <Stack width={{ lg: 1 / 2, xs: 1 }}>
          <Image
            src="/assets/boiteautoaudi.jpg"
            alt=""
            width={800}
            height={450}
            style={{ width: "100%", height: "auto" }}
          />
        </Stack>

        <Stack direction={"column"} gap={{ sm: 4, xs: 2 }}>
          <Stack>
            <Stack
              color={"secondary.light"}
              fontSize={{ sm: "26px", xs: "22px" }}
              fontWeight={700}
            >
              NOS ENGAGEMENTS CLIENTS
            </Stack>
            <Stack
              color={"white"}
              fontSize={{ sm: "36px", xs: "28px" }}
              fontWeight={700}
            >
              DE LA COMMANDE À LA LIVRAISON
            </Stack>
          </Stack>

          <Stack
            direction={"column"}
            color={"white"}
            justifyContent={"space-between"}
            height={1}
            fontSize={{ sm: "18px", xs: "16px" }}
            gap={2}
          >
            <Box>
              - Vous accueillir{" "}
              <span style={{ fontWeight: 700 }}>rapidement</span> en
              agence ou par téléphone
            </Box>
            <Box>
              - Des professionnels à votre écoute pour vous conseiller sur votre
              projet
            </Box>
            <Box>
              - Respecter les{" "}
              <span style={{ fontWeight: 700 }}>délais annoncés</span>
            </Box>
            <Box>
              - Vous tenir{" "}
              <span style={{ fontWeight: 700 }}>informé</span> de
              l’avancée de votre commande
            </Box>
          </Stack>

          <Link href="/delivery" style={{ textDecoration: "none" }}>
            <ButtonSecondary
              sx={{
                width: { sm: "50%", xs: 1 },
              }}
            >
              Livraison
            </ButtonSecondary>
          </Link>
        </Stack>
      </Stack>

      <Stack
        direction={{ lg: "row", xs: "column-reverse" }}
        gap={{ sm: 4, xs: 2 }}
      >
        <Stack direction={"column"} gap={{ sm: 4, xs: 2 }}>
          <Stack>
            <Stack
              color={"secondary.light"}
              fontSize={{ sm: "26px", xs: "22px" }}
              fontWeight={700}
            >
              VENTE DE VÉHICULES
            </Stack>
            <Stack
              color={"white"}
              fontSize={{ sm: "36px", xs: "28px" }}
              fontWeight={700}
            >
              À PRIX COMPÉTITIFS
            </Stack>
          </Stack>

          <Stack
            color={"white"}
            fontSize={{ sm: "18px", xs: "16px" }}
            fontWeight={600}
          >
            La société STD AUTOMOBILE vous propose un large choix de véhicules
            neufs et d'occasions récentes.
          </Stack>

          <Stack
            direction={"column"}
            color={"white"}
            justifyContent={"space-between"}
            height={1}
            fontSize={{ sm: "18px", xs: "16px" }}
            gap={2}
          >
            <Box>
              - Livraison dans{" "}
              <span style={{ fontWeight: 700 }}>toute la France</span>
            </Box>
            <Box>
              - Possibilité de{" "}
              <span style={{ fontWeight: 700 }}>reprise</span> de votre
              véhicule
            </Box>
            <Box>
              - <span style={{ fontWeight: 700 }}>Démarches</span>{" "}
              administratives et immatriculations
            </Box>
          </Stack>

          <Link href="/recovery" style={{ textDecoration: "none" }}>
            <ButtonSecondary
              sx={{
                width: { sm: "50%", xs: 1 },
              }}
            >
              Reprise de votre véhicule
            </ButtonSecondary>
          </Link>
        </Stack>

        <Stack width={{ lg: 1 / 2, xs: 1 }}>
          <Image
            src="/assets/audijante.jpg"
            alt=""
            width={800}
            height={450}
            style={{ width: "100%", height: "auto" }}
          />
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Sales;
