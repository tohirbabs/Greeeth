import {
  Autocomplete,
  TextField,
  Stack,
  Card,
  Typography,
  Fab,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  Button,
} from "@mui/material";
import { AddPhotoAlternateRounded } from "@mui/icons-material";

import { useFormik } from "formik";
import { useState } from "react";

export const UploadWasteInfo = () => {
  const [initialValues, setInitialValues] = useState({});

  // fetch business options from api
  // check endpoint
  const wasteTypes = ["Plastic", "Glass", "Wood"];
  const handleUploadClick = (event) => {
    var file = event.target.files[0];
    const reader = new FileReader();
    var url = reader.readAsDataURL(file);

    // reader.onloadend = function (e) {
    //   this.setState({
    //     selectedFile: [reader.result],
    //   });
    // }.bind(this);
    // console.log(url); // Would see a path?

    // this.setState({
    //   mainState: "uploaded",
    //   selectedFile: event.target.files[0],
    //   imageUploaded: 1,
    // });
  };

  const formik = useFormik({
    initialValues,
  });
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    background: "#daffda",
  };
  return (
    <Card sx={style}>
      <Stack spacing={3} width="90vw" maxWidth="375px">
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Upload Info about Waste
        </Typography>
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="contained-button-file"
          multiple
          type="file"
          onChange={handleUploadClick}
        />
        <label htmlFor="contained-button-file">
          <Fab component="span">
            <AddPhotoAlternateRounded />
          </Fab>
        </label>
        <Autocomplete
          freeSolo
          options={wasteTypes}
          id="type"
          name="type"
          renderInput={(params) => (
            <TextField
              {...params}
              label="Waste Type"
              id="type"
              name="type"
              placeholder="Choose waste type"
              error={formik.touched.type && formik.errors.type && true}
              helperText={formik.touched.type && formik.errors.type}
              value={formik.values.type}
              onChange={formik.handleChange}
              sx={{ maxWidth: "300px" }}
            />
          )}
        />
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">
            Enter Amount
          </InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            startAdornment={<InputAdornment position="start">$</InputAdornment>}
            sx={{ maxWidth: "300px" }}
          />
        </FormControl>
        <Button
          sx={{ background: "#008000", color: "#fff", maxWidth: "200px" }}
        >
          UPLOAD WASTE
        </Button>
      </Stack>
    </Card>
  );
};
