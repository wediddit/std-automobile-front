import { Box, Divider, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "./styles.css";
// import required modules
import { Pagination, Navigation } from "swiper";
import moment from "moment";
import {
  ArticleRounded,
  CalendarMonthRounded,
  DirectionsCarRounded,
  EmailRounded,
  HdrAutoRounded,
  LocalGasStationRounded,
  Phone,
  ThirtyFpsRounded,
} from "@mui/icons-material";
import ButtonSecondary from "@/components/buttons/ButtonSecondary";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  color: "black",
  boxShadow: "0px 0px transparent",
}));

function CarInfos() {
  const router = useRouter();
  const { id } = router.query;

  const [car, setCar] = useState({});
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACK_URL}/api/car/${id}`)
      .then((res) => {
        setCar(res.data);
        setPictures(res.data.pictures);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      gap={{ sm: 5, xs: 3 }}
      my={{ sm: 4, xs: 4 }}
    >
      <Typography variant="h3" textAlign={"center"} px={1}>
        {car.brand} {car.model}
      </Typography>

      <Stack width={{ lg: "60%", sm: "80%", xs: "90%" }}>
        <Swiper
          pagination={{
            type: "progressbar",
          }}
          navigation={true}
          modules={[Pagination, Navigation]}
          style={{
            width: "100%",
            height: "100%",
          }}
          className="mySwiper"
        >
          {pictures.map((item) => (
            <SwiperSlide key={item}>
              <img
                src={item}
                alt={item}
                style={{
                  width: "100%",
                  height: "100%",
                  maxHeight: "550px",
                }}
              ></img>
            </SwiperSlide>
          ))}
        </Swiper>
      </Stack>

      <Stack
        width={{ lg: "60%", sm: "80%", xs: "90%" }}
        direction={"column"}
        gap={2}
      >
        <Stack>
          {car.city} • {car.year} • {car.mileage} Km • {car.fuel}
        </Stack>
        <Stack fontWeight={700} fontSize={"24px"}>
          {car.price} €
        </Stack>
        <Stack fontSize={"12px"}>{moment(car.createdAt).format("L")}</Stack>
      </Stack>

      <Divider sx={{ width: { lg: "60%", sm: "80%", xs: "90%" } }} />

      <Stack width={{ lg: "60%", sm: "80%", xs: "90%" }}>
        <Grid container rowSpacing={2} columnSpacing={{ lg: 1 }}>
          <Grid item sm={4} xs={6}>
            <Item>
              <Stack direction={"row"} alignItems={"flex-start"} gap={1}>
                <Stack
                  backgroundColor={"primary.main"}
                  borderRadius={"100%"}
                  p={1}
                >
                  <DirectionsCarRounded sx={{ color: "white" }} />
                </Stack>
                <Stack direction={"column"}>
                  <Box
                    sx={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "primary.main",
                    }}
                  >
                    Marque
                  </Box>
                  <Box
                    sx={{
                      fontSize: "15px",
                    }}
                  >
                    {car.brand}
                  </Box>
                </Stack>
              </Stack>
            </Item>
          </Grid>

          <Grid item sm={4} xs={6}>
            <Item>
              <Stack direction={"row"} alignItems={"flex-start"} gap={1}>
                <Stack
                  backgroundColor={"primary.main"}
                  borderRadius={"100%"}
                  p={1}
                >
                  <CalendarMonthRounded sx={{ color: "white" }} />
                </Stack>
                <Stack direction={"column"}>
                  <Box
                    sx={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "primary.main",
                    }}
                  >
                    Année
                  </Box>
                  <Box
                    sx={{
                      fontSize: "15px",
                    }}
                  >
                    {car.year}
                  </Box>
                </Stack>
              </Stack>
            </Item>
          </Grid>

          <Grid item sm={4} xs={6}>
            <Item>
              <Stack direction={"row"} alignItems={"flex-start"} gap={1}>
                <Stack
                  backgroundColor={"primary.main"}
                  borderRadius={"100%"}
                  p={1}
                >
                  <CalendarMonthRounded sx={{ color: "white" }} />
                </Stack>
                <Stack direction={"column"}>
                  <Box
                    sx={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "primary.main",
                    }}
                  >
                    Mise en circulation
                  </Box>
                  <Box
                    sx={{
                      fontSize: "15px",
                    }}
                  >
                    {car.release}
                  </Box>
                </Stack>
              </Stack>
            </Item>
          </Grid>

          <Grid item sm={4} xs={6}>
            <Item>
              <Stack direction={"row"} alignItems={"flex-start"} gap={1}>
                <Stack
                  backgroundColor={"primary.main"}
                  borderRadius={"100%"}
                  p={1}
                >
                  <ThirtyFpsRounded sx={{ color: "white" }} />
                </Stack>
                <Stack direction={"column"}>
                  <Box
                    sx={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "primary.main",
                    }}
                  >
                    Kilométrage
                  </Box>
                  <Box
                    sx={{
                      fontSize: "15px",
                    }}
                  >
                    {car.mileage}
                  </Box>
                </Stack>
              </Stack>
            </Item>
          </Grid>

          <Grid item sm={4} xs={6}>
            <Item>
              <Stack direction={"row"} alignItems={"flex-start"} gap={1}>
                <Stack
                  backgroundColor={"primary.main"}
                  borderRadius={"100%"}
                  p={1}
                >
                  <LocalGasStationRounded sx={{ color: "white" }} />
                </Stack>
                <Stack direction={"column"}>
                  <Box
                    sx={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "primary.main",
                    }}
                  >
                    Carburant
                  </Box>
                  <Box
                    sx={{
                      fontSize: "15px",
                    }}
                  >
                    {car.fuel}
                  </Box>
                </Stack>
              </Stack>
            </Item>
          </Grid>

          <Grid item sm={4} xs={6}>
            <Item>
              <Stack direction={"row"} alignItems={"flex-start"} gap={1}>
                <Stack
                  backgroundColor={"primary.main"}
                  borderRadius={"100%"}
                  p={1}
                >
                  <HdrAutoRounded sx={{ color: "white" }} />
                </Stack>
                <Stack direction={"column"}>
                  <Box
                    sx={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "primary.main",
                    }}
                  >
                    Boîte de vitesse
                  </Box>
                  <Box
                    sx={{
                      fontSize: "15px",
                    }}
                  >
                    {car.gearbox}
                  </Box>
                </Stack>
              </Stack>
            </Item>
          </Grid>

          <Grid item sm={4} xs={6}>
            <Item>
              <Stack direction={"row"} alignItems={"flex-start"} gap={1}>
                <Stack
                  backgroundColor={"primary.main"}
                  borderRadius={"100%"}
                  p={1}
                >
                  <ArticleRounded sx={{ color: "white" }} />
                </Stack>
                <Stack direction={"column"}>
                  <Box
                    sx={{
                      fontSize: "13px",
                      fontWeight: 700,
                      color: "primary.main",
                    }}
                  >
                    Référence
                  </Box>
                  <Box
                    sx={{
                      fontSize: "15px",
                    }}
                  >
                    {car.reference}
                  </Box>
                </Stack>
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </Stack>

      <Divider sx={{ width: { lg: "60%", sm: "80%", xs: "90%" } }} />

      <Stack width={{ lg: "60%", sm: "80%", xs: "90%" }} gap={{ sm: 3, xs: 2 }}>
        <Typography variant="h2">Description</Typography>

        <Box dangerouslySetInnerHTML={{ __html: car.options }}></Box>
      </Stack>

      <Stack
        direction={"row"}
        width={{ lg: "60%", sm: "80%", xs: "90%" }}
        gap={2}
      >
        <a href={`tel:0476943058`} style={{ textDecoration: "none" }}>
          <ButtonSecondary startIcon={<Phone />}>Nous appeler</ButtonSecondary>
        </a>

        <Link href={"/contact"} style={{ textDecoration: "none" }}>
          <ButtonSecondary startIcon={<EmailRounded />}>
            Nous écrire
          </ButtonSecondary>
        </Link>
      </Stack>
    </Stack>
  );
}

export default CarInfos;
