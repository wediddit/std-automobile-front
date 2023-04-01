import Head from "next/head";
import TopLp from "@/components/lp/TopLp";
import BestExperiences from "@/components/lp/BestExperiences";
import { Stack } from "@mui/material";
import Quality from "@/components/lp/Quality";
import Sales from "@/components/lp/Sales";
import ChooseStd from "@/components/lp/ChooseStd";
import Reviews from "@/components/lp/Reviews";
import Schedules from "@/components/lp/Schedules";

export default function Home() {
  return (
    <>
      <Head>
        <title>Accueil - Std automobile</title>
        <meta
          name="description"
          content="page d'accueil du site Std Automobile"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack gap={{ sm: 10, xs: 5 }}>
        <TopLp />
        <BestExperiences />
        <Quality />
        <Sales />
        <ChooseStd />
        <Reviews />
        <Schedules />
      </Stack>
    </>
  );
}
