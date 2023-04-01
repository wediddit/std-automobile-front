import { AuthContext } from "@/contexts/AuthContext";
import { Alert, Box, Button, Collapse, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useState } from "react";

function Dashlogin() {
  const { authMethods } = useContext(AuthContext);

  const [loginError, setLoginError] = useState(false);
  const [formFields, setFormFields] = useState({
    email: "",
    password: "",
  });

  function createOnFieldChange(field) {
    return (event) => {
      setFormFields({ ...formFields, [field]: event.target.value });
    };
  }

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.NEXT_PUBLIC_BACK_URL}/api/auth/login`, formFields)
      .then((res) => {
        authMethods.login(res.data.userId, res.data.token);
        router.push(`/`);
      })
      .catch((error) => {
        console.log(error.response.data.error);
        setLoginError(true);
      });
  };
  
  return (
    <Stack
      alignItems={"center"}
      justifyContent={"center"}
      my={{ lg: 20, sm: 15, xs: 8 }}
    >
      <Stack
        component="form"
        onSubmit={handleSubmit}
        boxShadow={3}
        width={{ sm: "300px", xs: "80%" }}
        p={{ sm: 4, xs: 2 }}
        borderRadius={3}
        gap={4}
        position={"relative"}
      >
        <Box sx={{ fontWeight: 700, textAlign: "center" }}>
          Connexion
        </Box>

        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          size="small"
          type="email"
          InputLabelProps={{
            style: {
              color: "#9D9D9D",
            },
          }}
          required
          onChange={createOnFieldChange("email")}
        />

        <TextField
          id="outlined-basic"
          label="Mot de passe"
          variant="outlined"
          size="small"
          type="password"
          InputLabelProps={{
            style: {
              color: "#9D9D9D",
            },
          }}
          required
          onChange={createOnFieldChange("password")}
        />

        <Collapse
          in={loginError}
          sx={{
            display: `${loginError ? "block" : "none"}`,
          }}
        >
          <Alert severity="error">Email ou mot de passe incorrect</Alert>
        </Collapse>

        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* button */}
          <Button
            type="submit"
            sx={{
              color: "white",
              backgroundColor: "black",
              px: 2,
              fontWeight: 700,
              "&:hover": {
                backgroundColor: "black",
              },
            }}
          >
            Se connecter
          </Button>
        </Box>
      </Stack>
    </Stack>
  );
}

export default Dashlogin;
