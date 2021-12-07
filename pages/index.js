import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

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
            backgroundColor: "#3B3B3B",
            display: "inline-block",
            padding: "1rem",
            color: "white",
            verticalAlign: "center",
          }}
        >
          <Typography variant="h1" sx={{ fontWeight: "bold", fontSize: "8em" }}>
            JAMES
          </Typography>
          <Typography variant="h1" sx={{ fontWeight: "bold", fontSize: "8em" }}>
            MCFARLAND.
          </Typography>
        </Box>

        <Stack justifyContent="center" alignItems="stretch" sx={{color:"#3B3B3B"}}>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            1ST YEAR.
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            SOFTWARE ENGINEERING.
          </Typography>
          <Typography variant="h3" sx={{ fontWeight: "bold" }}>
            QUB.
          </Typography>
        </Stack>
      </Stack>
    </Box>
    </>
  );
}
