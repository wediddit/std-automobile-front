import Image from "next/image";

const { Stack, Typography, Box } = require("@mui/material");

function Schedules() {
  return (
    <Stack direction={"column"}>
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        backgroundColor={"grey.light"}
        gap={3}
        p={{ sm: 12, xs: 6 }}
      >
        <Typography variant="h2">STD AUTOMOBILE</Typography>

        <Stack textAlign={"center"} gap={1}>
          <Box>
            <span style={{ fontWeight: 700 }}>Adresse :</span> 430 Rte
            de Palluel, 38340 Voreppe
          </Box>
          <Box>
            <span style={{ fontWeight: 700 }}>Téléphone :</span> 04 76
            94 30 58
          </Box>
        </Stack>

        <Stack textAlign={"center"} gap={1}>
          <Box>
            <span style={{ fontWeight: 700 }}>
              Horaires d'ouverture :
            </span>
          </Box>
          <Box>Lundi au Vendredi 09h00 - 12h00 et 14h00 - 18h00</Box>
          <Box>Samedi 09h00 - 12h00</Box>
        </Stack>
      </Stack>

      <Image
        src="/assets/stdpics/outsideaudi.JPEG"
        alt=""
        width={1500}
        height={622}
        style={{ width: "100%", height: "auto", marginTop: 7, marginBottom: 7 }}
      />
    </Stack>
  );
}

export default Schedules;
