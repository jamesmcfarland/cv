import { Link } from "@mui/material";

export default function NavLink({name, url}) {
    return (
        <Link
        href={url}
        underline="none"
          variant="h5"
          sx={{
            fontWeight: "bold",
            transition: "0.3s",
            color:"#3B3B3B",
            "&:hover": {
              color: "#51A2FF",
              scale:"1.05",
              textShadow: "0px 5px 5px rgba(0,0,0,0.1)",
              letterSpacing:"0.05em"
            },
          }}
        >
          {name.toUpperCase()}.
        </Link>
    )
}