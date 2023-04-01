import { AuthContext } from "@/contexts/AuthContext";
import { Button, Stack, Typography } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

function AllOurAds() {
  const { auth } = useContext(AuthContext);
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACK_URL}/api/car/`)
      .then((res) => {
        setCars(res.data);
      })
      .catch((error) => {
        console.log({ error });
      });
  }, [cars]);

  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      gap={{ sm: 5, xs: 3 }}
      my={{ sm: 4, xs: 4 }}
    >
      <Typography variant="h1">Nos annonces</Typography>

      <Stack width="90%" direction={"row"} flexWrap={"wrap"} gap={3}>
        {cars.map((item) => (
          <Stack
            key={item._id}
            width={{ lg: "30%", sm: "43%", xs: 1 }}
            direction={{ sm: "row", xs: "column" }}
            boxShadow={3}
            p={1}
            gap={2}
            borderRadius={"15px"}
          >
            <Stack
              width={{ sm: 1 / 2, xs: 1 }}
              sx={{
                backgroundImage: `url(${item.pictures[0]})`,
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "15px",
                height: { lg: "130px", sm: "130px", xs: "200px" },
              }}
            ></Stack>
            <Stack
              direction={"column"}
              width={{ sm: 1 / 2, xs: 1 }}
              fontSize={"15px"}
              gap={1}
              justifyContent={"space-between"}
              alignItems={"flex-end"}
            >
              <Stack fontWeight={700} textAlign={"end"}>
                {item.brand} {item.model}
              </Stack>
              <Stack>
                {item.mileage} Km • {item.fuel}
              </Stack>
              <Stack fontWeight={700}>{item.price} €</Stack>

              <Stack direction={"row"} spacing={1}>
                <Link
                  href={`/our-ads/` + item._id}
                  style={{ textDecoration: "none" }}
                >
                  <Button
                    sx={{
                      height: "34px",
                      px: "16px",
                      fontWeight: 700,
                      fontSize: "14px",
                      textTransform: "none",
                      color: "white",
                      borderRadius: "50px",
                      backgroundColor: "black",
                      "&:hover": {
                        backgroundColor: "black",
                        transform: "scale(1.1)",
                      },
                    }}
                  >
                    Plus d'infos
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}

export default AllOurAds;
