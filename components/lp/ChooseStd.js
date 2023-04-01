import DirectionsCarFilledRoundedIcon from "@mui/icons-material/DirectionsCarFilledRounded";
import { Box, Stack, Typography } from "@mui/material";
import PermPhoneMsgRoundedIcon from "@mui/icons-material/PermPhoneMsgRounded";
import { MapRounded } from "@mui/icons-material";

function ChooseStd() {
  return (
    <Stack direction={"column"} alignItems={"center"}>
      <Stack width={{ lg: "40%", sm: "60%", xs: "95%" }}>
        <Stack
          backgroundColor={"primary.dark"}
          color={"white"}
          alignItems={"center"}
          justifyContent={"center"}
          fontWeight={700}
          p={{ lg: 6, sm: 5, xs: 4 }}
          sx={{
            borderTopLeftRadius: "15px",
            borderTopRightRadius: "15px",
          }}
        >
          <Typography variant="h2">
            Pourquoi choisir Std Automobile ?
          </Typography>
        </Stack>

        <Stack
          backgroundColor={"primary.main"}
          color={"white"}
          alignItems={"center"}
          justifyContent={"center"}
          fontWeight={700}
          sx={{
            borderBottomLeftRadius: "15px",
            borderBottomRightRadius: "15px",
          }}
        >
          <Stack p={{ lg: 6, sm: 5, xs: 4 }} gap={4}>
            <Stack
              direction={"row"}
              gap={2}
              alignItems={"center"}
              justifyContent={"flex-start"}
              width={1}
            >
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  borderRadius: "100%",
                }}
              >
                <DirectionsCarFilledRoundedIcon sx={{ color: "black" }} />
              </Stack>
              <Box>
                <span style={{ fontWeight: 700 }}>Un large choix</span>{" "}
                de véhicules
              </Box>
            </Stack>

            <Stack
              direction={"row"}
              gap={2}
              alignItems={"center"}
              justifyContent={"flex-start"}
              width={1}
            >
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  borderRadius: "100%",
                }}
              >
                <PermPhoneMsgRoundedIcon sx={{ color: "black" }} />
              </Stack>
              <Box>
                <span style={{ fontWeight: 700 }}>Un suivi client</span>{" "}
                jusqu'à la livraison
              </Box>
            </Stack>

            <Stack
              direction={"row"}
              gap={2}
              alignItems={"center"}
              justifyContent={"flex-start"}
              width={1}
            >
              <Stack
                alignItems={"center"}
                justifyContent={"center"}
                sx={{
                  width: "40px",
                  height: "40px",
                  backgroundColor: "white",
                  borderRadius: "100%",
                }}
              >
                <MapRounded sx={{ color: "black" }} />
              </Stack>
              <Box>
                Livraison dans{" "}
                <span style={{ fontWeight: 700 }}>toute la France</span>
              </Box>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ChooseStd;
