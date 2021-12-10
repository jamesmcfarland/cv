import { Link, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import NavLink from "../components/navlink";
import styles from "../styles/Home.module.css";

const socials = [
  {
    name: "linkedin",
    url: "https://linkedin.com",
    color: "#0077B5",
  },
  {
    name: "gihtub",
    url: "https://github.com/jamesmcfarland",
    color: "#4078C0",
  },
  {
    name: "twitter",
    url: "https://twitter.com",
    color: "#55ADEE",
  },
  {
    name: "instagram",
    url: "https://instagram.com",
    color: "#E1306C",
  },
  {
    name: "email",
    url: "mailto:contact@jamesmcfarland.dev",
    color: "#EE8955",
  },
];

const links = [
  {
    name: "me",
    url: "/me",
  },
  {
    name: "edu",
    url: "/education",
  },
  {
    name: "projects",
    url: "/projects",
  },
  {
    name: "volunteering",
    url: "/volunteering",
  },
  {
    name: "work",
    url: "/work",
  },
];

export default function Home() {
  return (
    <>
      <Box
        sx={{
          padding: "3rem",
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "start",
        }}
      >
        <Stack direction="row" spacing={4}>
          <Box
            sx={{
              display: "inline-block",

              verticalAlign: "center",
            }}
          >
            <Stack spacing={4}>
              <Box
              className="fancybg"
                sx={{
                  // backgroundColor: "#3B3B3B",

                  padding: "1rem",
                  color: "white",
                  verticalAlign: "center",
                }}
              >
                <Typography
                  variant="h1"
                  sx={{ fontWeight: "bold", fontSize: "7em" }}
                >
                  JAMES
                </Typography>
                <Typography
                  variant="h1"
                  sx={{ fontWeight: "bold", fontSize: "7em" }}
                >
                  MCFARLAND.
                </Typography>
              </Box>
              <Stack direction="row" justifyContent="space-between">
                {links.map(link=>(<NavLink key={link.name} name={link.name} url={link.url} />))}
               
              </Stack>
            </Stack>
          </Box>

          <Stack
            justifyContent="center"
            alignItems="stretch"
            sx={{ color: "#3B3B3B", paddingBottom:"2rem" }}
          >
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              1ST YEAR.
            </Typography>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              SOFTWARE ENGINEERING.
            </Typography>
            <Link
        href="https://qub.ac.uk"
        underline="none"
          variant="h4"
          sx={{
            fontWeight: "bold",
            transition: "0.3s",
            color:"#3B3B3B",
            "&:hover": {
              color: "#E20D18",
            
            },
          }}
        >
          QUB.
        </Link>
          </Stack>
        </Stack>
      </Box>

      <Stack
        direction="row"
        sx={{ width: "100%", padding: "1rem 0", position: "fixed", bottom: 0 }}
        justifyContent="space-around"
      >
        {socials.map((social) => {
          return (
            <Link
              key={social.name}
              underline="none"
              href={social.url}
              variant="body1"
              sx={{ fontWeight: "bold", color: social.color }}
            >
              {social.name}
            </Link>
          );
        })}
      </Stack>
    </>
  );
}
