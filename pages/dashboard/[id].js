import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/router";
import {
  Alert,
  Box,
  Button,
  Collapse,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { AuthContext } from "@/contexts/AuthContext";

function UpdateAd() {
  const { auth } = useContext(AuthContext);
  const router = useRouter();
  const { id } = router.query;

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formFields, setFormFields] = useState({});
  const [car, setCar] = useState({});

  useEffect(() => {
    axios
      .get(`${process.env.NEXT_PUBLIC_BACK_URL}/api/car/${id}`)
      .then((res) => {
        setCar(res.data);
        setFormFields(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  function createOnFieldChange(fieldName) {
    return function (event) {
      if (fieldName === "pictures") {
        const fileList = Array.from(event.target.files);
        const pictures = fileList.map((file) => URL.createObjectURL(file));
        setFormFields((prevState) => ({ ...prevState, [fieldName]: pictures }));
      } else {
        const value = event.target.value;
        setFormFields((prevState) => ({ ...prevState, [fieldName]: value }));
      }
    };
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();

    formData.append("brand", formFields.brand);
    formData.append("model", formFields.model);
    formData.append("year", formFields.year);
    formData.append("release", formFields.release);
    formData.append("city", formFields.city);
    formData.append("mileage", formFields.mileage);
    formData.append("fuel", formFields.fuel);
    formData.append("gearbox", formFields.gearbox);
    formData.append("reference", formFields.reference);
    formData.append("options", formFields.options);
    formData.append("price", formFields.price);

    const fileInput = document.querySelector('input[type="file"]');
    for (let i = 0; i < fileInput.files.length; i++) {
      formData.append("pictures", fileInput.files[i]);
    }

    axios
      .put(`${process.env.NEXT_PUBLIC_BACK_URL}/api/car/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + auth.accessToken,
        },
      })
      .then((res) => {
        setSuccess(true);
        router.push(`/dashboard/all-ads`);
      })
      .catch((error) => {
        setError(true);
      });
  };

  return (
    <Stack
      direction={"column"}
      alignItems={"center"}
      gap={{ sm: 4, xs: 3 }}
      my={{ sm: 4, xs: 4 }}
    >
      <Typography variant="h1">Modifier un véhicule</Typography>

      <Stack
        component="form"
        onSubmit={handleSubmit}
        boxShadow={3}
        width={{ sm: 1 / 2, xs: "80%" }}
        p={{ sm: 4, xs: 2 }}
        borderRadius={3}
        gap={4}
        position={"relative"}
      >
        <TextField
          id="outlined-basic"
          label="Marque"
          variant="outlined"
          size="small"
          InputLabelProps={{
            style: {
              color: "#9D9D9D",
            },
          }}
          value={formFields.brand || ""}
          required
          onChange={createOnFieldChange("brand")}
        />

        <TextField
          id="outlined-basic"
          label="Marque"
          variant="outlined"
          size="small"
          InputLabelProps={{
            style: {
              color: "#9D9D9D",
            },
          }}
          value={formFields.model || ""}
          required
          onChange={createOnFieldChange("model")}
        />

        <Stack direction={"row"} gap={2}>
          Images
          <input
            accept="image/*"
            multiple
            type="file"
            name="pictures"
            onChange={createOnFieldChange("pictures")}
          />
        </Stack>

        <TextField
          id="outlined-basic"
          label="Année"
          variant="outlined"
          size="small"
          InputLabelProps={{
            style: {
              color: "#9D9D9D",
            },
          }}
          value={formFields.year || ""}
          required
          onChange={createOnFieldChange("year")}
        />

        <TextField
          id="outlined-basic"
          label="Date de mise en circulation MM/YY"
          variant="outlined"
          size="small"
          InputLabelProps={{
            style: {
              color: "#9D9D9D",
            },
          }}
          value={formFields.release || ""}
          required
          onChange={createOnFieldChange("release")}
        />

        <TextField
          id="outlined-basic"
          label="Ville"
          variant="outlined"
          size="small"
          InputLabelProps={{
            style: {
              color: "#9D9D9D",
            },
          }}
          value={formFields.city || ""}
          required
          onChange={createOnFieldChange("city")}
        />

        <TextField
          id="outlined-number"
          type="number"
          label="Kilométrage"
          variant="outlined"
          size="small"
          InputLabelProps={{
            style: {
              color: "#9D9D9D",
            },
          }}
          value={formFields.mileage || ""}
          required
          onChange={createOnFieldChange("mileage")}
        />

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" sx={{ color: "#9D9D9D" }}>
            Carburant
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formFields.fuel || ""}
            label="Carburant"
            size="small"
            required
            onChange={createOnFieldChange("fuel")}
          >
            <MenuItem value={"Essence"}>Essence</MenuItem>
            <MenuItem value={"Diesel"}>Diesel</MenuItem>
            <MenuItem value={"Hybride"}>Hybride</MenuItem>
            <MenuItem value={"Électrique"}>Électrique</MenuItem>
          </Select>
        </FormControl>

        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label" sx={{ color: "#9D9D9D" }}>
            Boîte de vitesse
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={formFields.gearbox || ""}
            label="Boîte de vitesse"
            size="small"
            required
            onChange={createOnFieldChange("gearbox")}
          >
            <MenuItem value={"Automatique"}>Automatique</MenuItem>
            <MenuItem value={"Manuelle"}>Manuelle</MenuItem>
          </Select>
        </FormControl>

        <TextField
          id="outlined-basic"
          label="Référence"
          variant="outlined"
          size="small"
          InputLabelProps={{
            style: {
              color: "#9D9D9D",
            },
          }}
          value={formFields.reference || ""}
          required
          onChange={createOnFieldChange("reference")}
        />

        <TextField
          id="outlined-basic"
          label="Options"
          variant="outlined"
          size="small"
          multiline
          rows={12}
          InputLabelProps={{
            style: {
              color: "#9D9D9D",
            },
          }}
          value={formFields.options || ""}
          required
          onChange={createOnFieldChange("options")}
        />

        <TextField
          id="outlined-basic"
          label="Prix"
          variant="outlined"
          size="small"
          InputLabelProps={{
            style: {
              color: "#9D9D9D",
            },
          }}
          value={formFields.price || ""}
          required
          onChange={createOnFieldChange("price")}
        />

        <Collapse
          in={error}
          sx={{
            display: `${error ? "block" : "none"}`,
          }}
        >
          <Alert severity="error">Une erreur est survenue !</Alert>
        </Collapse>
        <Box
          sx={{
            width: 1,
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/* button */}
          {success == false && (
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
              Modifier
            </Button>
          )}
        </Box>
      </Stack>
    </Stack>
  );
}

export default UpdateAd;
