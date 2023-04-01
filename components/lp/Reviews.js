import { Avatar, Box, Button, Stack, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function Reviews() {
  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      gap={3}
    >
      <Image
        src="/assets/reviews.svg"
        alt=""
        width={400}
        height={400}
        style={{ width: "100%", height: "auto", maxWidth: "400px" }}
      />

      <Stack direction={"column"} gap={{ sm: 4, xs: 2 }} alignItems={"center"}>
        <Typography variant="h1" color={"secondary.main"}>
          Satisfaction garantie
        </Typography>

        <Link
          href="https://www.google.com/search?q=std+automobile+voreppe&oq=std+automobile+voreppe&aqs=chrome.0.0i355i512j46i175i199i512j69i57j69i60l3.5750j0j4&sourceid=chrome&ie=UTF-8#lrd=0x478af4da04fc0001:0x7a88fc8173eb2845,1,,,"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button
            endIcon={
              <Avatar
                sx={{ width: "20px", height: "20px" }}
                src={"/assets/google.svg"}
              />
            }
            sx={{
              boxShadow: 3,
              px: 3,
            }}
          >
            Voir nos avis Google
          </Button>
        </Link>
      </Stack>
    </Stack>
  );
}

export default Reviews;
