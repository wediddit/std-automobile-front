import { ArrowCircleDownOutlined } from "@mui/icons-material";
import { Box, Stack, Typography } from "@mui/material";

function BestExperiences() {
  return (
    <Stack direction={"column"} alignItems={"center"} gap={5}>
      <Box>
        <Typography variant="h1">
          Ressentez la meilleure expérience avec nos offres !
        </Typography>
        <Typography variant="h1">
          En toute simplicité chez vous en 4 étapes
        </Typography>
      </Box>

      <Stack direction={"column"} alignItems={"center"} gap={4}>
        <Stack
          backgroundColor={"primary.main"}
          color={"white"}
          fontWeight={700}
          p={3}
          borderRadius={"50px"}
          position={"relative"}
        >
          <Typography variant="h2">Traitement de votre commande</Typography>
        </Stack>
        <ArrowCircleDownOutlined
          sx={{ fontSize: { sm: "60px", xs: "50px" }, color: "primary.dark" }}
          className="bounce"
        />
        <Stack
          backgroundColor={"primary.main"}
          color={"white"}
          fontWeight={700}
          p={3}
          borderRadius={"50px"}
          position={"relative"}
        >
          <Typography variant="h2">Sortie du concessionnaire</Typography>
        </Stack>
        <ArrowCircleDownOutlined
          sx={{ fontSize: { sm: "60px", xs: "50px" }, color: "primary.dark" }}
          className="bounce"
        />
        <Stack
          backgroundColor={"primary.main"}
          color={"white"}
          fontWeight={700}
          p={3}
          borderRadius={"50px"}
          position={"relative"}
        >
          <Typography variant="h2">Livraison de votre véhicule</Typography>
        </Stack>
        <ArrowCircleDownOutlined
          sx={{ fontSize: { sm: "60px", xs: "50px" }, color: "primary.dark" }}
          className="bounce"
        />
        <Stack
          backgroundColor={"primary.main"}
          color={"white"}
          fontWeight={700}
          p={3}
          borderRadius={"50px"}
          position={"relative"}
        >
          <Typography variant="h2">Traitement de votre carte grise</Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default BestExperiences;
