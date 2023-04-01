import { Stack } from "@mui/material";
import Image from "next/image";

function Quality() {
  return (
    <Stack gap={{ sm: 10, xs: 5 }}>
      <Image
        src="/assets/stdpics/concess-dark.jpeg"
        alt=""
        width={1280}
        height={958}
        style={{ width: "100%", height: "auto", maxHeight: "1000px" }}
      />

      <Stack
        direction={"column"}
        alignItems={"center"}
        fontSize={{ sm: "30px", xs: "22px" }}
        fontWeight={700}
        textAlign={"center"}
      >
        <Stack>QUELLE QUE SOIT LA VOITURE QUE</Stack>
        <Stack
          sx={{
            background:
              "-webkit-linear-gradient(45deg, #AAB8C2 30%, #000000 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          VOUS CHERCHEZ
        </Stack>
        <Stack>VOUS POURREZ TOUJOURS COMPTER SUR LA</Stack>
        <Stack
          sx={{
            background:
              "-webkit-linear-gradient(45deg, #AAB8C2 30%, #000000 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          GARANTIE QUALITÉ
        </Stack>
        <Stack>STD AUTOMOBILE</Stack>
      </Stack>
    </Stack>
  );
}

export default Quality;
