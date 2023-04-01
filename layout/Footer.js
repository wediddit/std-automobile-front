import { EmailRounded, PhoneOutlined, PlaceRounded } from "@mui/icons-material";
import { Box, Stack, Button } from "@mui/material";
import Image from "next/image";
import Link from "next/link";

function Footer() {
  let date = new Date().getFullYear();
  return (
    <Stack direction={"column"}>
      <Stack
        direction={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        backgroundColor={"primary.main"}
        color={"white"}
        p={{ sm: 8, xs: 4 }}
        gap={{ sm: 8, xs: 8 }}
      >
        <Stack direction={"row"} alignItems={"center"} gap={{ sm: 4, xs: 2 }}>
          <Stack>
            <Image src="/logo-std-white.png" alt="" width={130} height={50} />
          </Stack>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              border: 1,
              height: "60px",
            }}
          ></Box>

          <Stack
            direction={"column"}
            gap={1}
            fontWeight={700}
            alignItems={"center"}
            fontSize={"14px"}
          >
            APPELEZ-NOUS
            <Button
              startIcon={<PhoneOutlined />}
              sx={{ color: "white", fontWeight: 700 }}
            >
              <a
                href={`tel:0476943058`}
                style={{
                  textDecoration: "none",
                  color: "white",
                  fontSize: "14px",
                }}
              >
                04 76 94 30 58
              </a>
            </Button>
          </Stack>
        </Stack>

        <Stack
          direction={{ sm: "row", xs: "column" }}
          justifyContent={"space-between"}
          width={{ lg: "80%", xs: 1 }}
          gap={{ sm: 0, xs: 8 }}
        >
          {/* left */}
          <Stack direction={"column"} gap={2} alignItems={"center"}>
            <Box sx={{ fontWeight: 700 }} fontSize={"18px"}>
              Contact
            </Box>

            <Stack direction={"column"} alignItems={"center"} gap={1}>
              <Stack direction={"row"} gap={2}>
                <PlaceRounded />
                430 Rte de Palluel, 38340 Voreppe
              </Stack>

              <Stack direction={"row"} gap={2}>
                <EmailRounded />
                contact@stdautomobile.com
              </Stack>

              <Stack direction={"row"} gap={2}>
                <Link
                  href="https://www.instagram.com/stdautomobile/"
                  target="_blank"
                  style={{
                    textDecoration: "none",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <svg
                    style={{
                      marginRight: 15,
                    }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                      fill="white"
                    />
                  </svg>
                  Instagram
                </Link>
              </Stack>
            </Stack>
          </Stack>

          {/* right */}
          <Stack
            direction={"column"}
            alignItems={{ sm: "flex-start", xs: "center" }}
            gap={2}
          >
            <Link
              href="https://www.leboncoin.fr/boutique/100572/std_automobile.htm"
              style={{ color: "white" }}
              target="_blank"
            >
              Annonces Le Bon Coin
            </Link>
            <Link
              href="https://occasion.largus.fr/auto/std-automobile_154791/"
              style={{ color: "white" }}
              target="_blank"
            >
              Annonces L'argus
            </Link>
            <Link href="/contact" style={{ color: "white" }}>
              Contact
            </Link>
            <Link href="/legalnotice" style={{ color: "white" }}>
              Mentions légales
            </Link>
            <Link href="/privacypolicy" style={{ color: "white" }}>
              Politique de confidentialité
            </Link>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        backgroundColor={"primary.dark"}
        alignItems={"center"}
        justifyContent={"center"}
        color={"white"}
        fontWeight={700}
        fontSize={14}
        height={60}
        borderTop={1}
        py={2}
      >
        © {date} STD AUTOMOBILE | Tous droits réservés.
      </Stack>
    </Stack>
  );
}

export default Footer;
