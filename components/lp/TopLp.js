import { Box, Stack } from "@mui/material";
import ButtonSecondary from "../buttons/ButtonSecondary";
import { Phone } from "@mui/icons-material";
import Image from "next/image";

function TopLp() {
  return (
    <Stack direction={"column"} alignItems={"center"} gap={5}>
      <Stack width={1} alignItems={"flex-start"} justifyContent={"center"}>
        <Box
          position="relative"
          width={1}
          height={{ lg: "500px", sm: "400px", xs: "300px" }}
        >
          <Image
            src="/assets/Audihome.png"
            layout="fill"
            objectFit="cover"
            objectPosition="50% 50%"
            alt="std automobile background"
            priority
          />
        </Box>

        <Stack
          direction={"column"}
          alignItems={"center"}
          textAlign={"center"}
          width={1 / 2}
          position={"absolute"}
          gap={3}
          pl={{ sm: 0, xs: 1 }}
        >
          <Box
            sx={{
              fontSize: { lg: "50px", sm: "30px", xs: "28px" },
              fontWeight: 700,
            }}
          >
            Bienvenue chez
            <br />
            STD AUTOMOBILE
            <br />à Voreppe
          </Box>

          <Box
            sx={{
              fontSize: { lg: "20px", sm: "18px", xs: "12px" },
              fontStyle: "italic",
              display: { sm: "flex", xs: "none" },
            }}
          >
            La voiture de vos rêves est ici
          </Box>

          <a href={`tel:0476943058`} style={{ textDecoration: "none" }}>
            <ButtonSecondary startIcon={<Phone />}>
              Nous appeler
            </ButtonSecondary>
          </a>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default TopLp;
