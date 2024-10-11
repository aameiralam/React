

import { Box, FormControl, InputLabel, Input, Button, TextField, FormHelperText } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import Monster from "../../types/Monster";
import * as Yup from 'yup';

function CreateMonster({ isOpen, onClose }) {



    // Validation
    const monsterSchema= Yup.object({

      name: Yup.string()
      .min(2, "Too Short of a name")
      .max(50, "Too long of a name")
      .required("The monster has to have a name"),
      species: Yup.string()
      .min(2, "Too Short of a species name")
      .max(100, "Too long of a species name")
      .required("The monster has to have a species name"),
      weight: Yup.number()
      .min(0.5, "Too Short of a number")
      .required("The monster has to have a weight"),
      height: Yup.number()
      .min(1, "Too Short of a number")
      .required("The monster has to have a height"),
      price: Yup.number()
      .required("The monster has to have a price"),
      attackPower: Yup.number()
      .required("Should be higher than zero"),
      defensePower: Yup.number()
      .required("Should be higher than zero")
    })



  const queryClient = useQueryClient()
  const mutation = useMutation({
    mutationFn: async (newMonster:Monster): Promise<Monster>=> {
      const request = await fetch(import.meta.env.VITE_API_URL + "/monster/", {
        method: "POST",
        body: JSON.stringify(newMonster),
        headers: {
          "Content-Type": "application/json", 
            "Authorization": "Bearer" + sessionStorage.getItem("Authorization")
        }
      })
      const response = request.json()
      return response
    },
    onSuccess:() => {
      alert("Monster has been saved")
      queryClient.invalidateQueries(["monsters"])
      onClose()
    },
    onError: (error: Error) =>
      alert(`Error: ${error.message}`) 
  })
  



  const formik = useFormik({
    initialValues: {
      name: "",
      species: "",
      weight: 0,
      height: 0,
      attackPower: 0,
      defensePower: 0,
      price: 0,
    },
    validationSchema:monsterSchema,
    onSubmit: (values) => {

      mutation.mutate(values)
      // console.log("Monster submitted: ", values);
      // Add your submission logic here
      // onClose(); // Close the form after submission, already done up there
    },
  });

  if (!isOpen) return null;

  return (
    <Box component="form" onSubmit={formik.handleSubmit}>
      <FormControl sx={{ my: 1 }}>
        <InputLabel htmlFor="name">Name:</InputLabel>
        <Input
          id="name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}/>
        {formik.touched.name && formik.errors.name ? (
          <FormHelperText
            error
            variant="filled"
          >
            {formik.errors.name}

          </FormHelperText>
          
        ):null}
      </FormControl>

      <FormControl sx={{ my: 1 }}>
        <InputLabel htmlFor="species">Species:</InputLabel>
        <Input
          id="species"
          value={formik.values.species}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.species && formik.errors.species ? (
          <FormHelperText
            error
            variant="filled"
          >
            {formik.errors.species}

          </FormHelperText>
          
        ):null}
      </FormControl>

      <FormControl sx={{ my: 1 }}>
        <InputLabel htmlFor="weight">Weight:</InputLabel>
        <Input
          id="weight"
          inputProps={{ type: "number" }}
          value={formik.values.weight}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.weight && formik.errors.weight ? (
          <FormHelperText
            error
            variant="filled"
          >
            {formik.errors.weight}

          </FormHelperText>
          
        ):null}
      </FormControl>

      <FormControl sx={{ my: 1 }}>
        <InputLabel htmlFor="height">Height:</InputLabel>
        <Input
          id="height"
          inputProps={{ type: "number" }}
          value={formik.values.height}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.height && formik.errors.height ? (
          <FormHelperText
            error
            variant="filled"
          >
            {formik.errors.height}

          </FormHelperText>
          
        ):null}
      </FormControl>

      <FormControl sx={{ my: 1 }}>
        <InputLabel htmlFor="price">Price:</InputLabel>
        <Input
          id="price"
          inputProps={{ type: "number" }}
          value={formik.values.price}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.price && formik.errors.price ? (
          <FormHelperText
            error
            variant="filled"
          >
            {formik.errors.price}

          </FormHelperText>
          
        ):null}
      </FormControl>

      <FormControl sx={{ my: 1 }}>
        <InputLabel htmlFor="attackPower">Attack Power:</InputLabel>
        <Input
          id="attackPower"
          inputProps={{ type: "number" }}
          value={formik.values.attackPower}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.attackPower && formik.errors.attackPower ? (
          <FormHelperText
            error
            variant="filled"
          >
            {formik.errors.attackPower}

          </FormHelperText>
          
        ):null}
      </FormControl>

      <FormControl sx={{ my: 1 }}>
        <InputLabel htmlFor="defensePower">Defense Power:</InputLabel>
        <Input
          id="defensePower"
          inputProps={{ type: "number" }}
          value={formik.values.defensePower}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.touched.defensePower && formik.errors.defensePower ? (
          <FormHelperText
            error
            variant="filled"
          >
            {formik.errors.defensePower}

          </FormHelperText>
          
        ):null}
      </FormControl>



      <Button type="submit" disabled={!(formik.isValid && formik.dirty || formik.isSubmitting)}>Submit new monster</Button>
    </Box>
  );
}

export default CreateMonster;
