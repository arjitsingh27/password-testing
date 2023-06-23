import { Box } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField } from "formik-mui";
import { preventEnterSubmit } from "../utils/form-helpers";
import axios from "axios";
import { useSnackbar } from "notistack";
import { baseURL } from "../utils/constant";

const styles = {
  textFieldBox: {
    textAlign: "center",
    marginTop: "20px",
  },
};

const PaswordTesting = () => {
  const { enqueueSnackbar } = useSnackbar();

  const initialValues = {
    password: "",
  };

  const addPasswordInDB = async ({ password }, resetForm) => {
    await axios.post(`${baseURL}/password`, { password }).then((data) => {
      if (data.data.valid) {
        resetForm({ password: "" });
        enqueueSnackbar(data.data.message, {
          variant: "success",
        });
      } else {
        enqueueSnackbar(data.data.message, {
          variant: "error",
        });
      }
    });
  };
  return (
    <Box>
      <Formik
        initialValues={initialValues}
        onSubmit={(values, { resetForm }) => {
          addPasswordInDB({ password: values.password }, resetForm);
        }}
      >
        {({ values }) => (
          <Form id="fileSubmitForm" onKeyDown={preventEnterSubmit}>
            <Box>
              <Box sx={styles.textFieldBox}>
                <Field
                  type="text"
                  name="password"
                  value={values.password}
                  placeholder="Enter your Password"
                  component={TextField}
                  disabled={false}
                  variant="outlined"
                />
              </Box>
              <Box sx={styles.textFieldBox}>
                <Button variant="contained" type="submit" form="fileSubmitForm">
                  Submit
                </Button>
              </Box>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PaswordTesting;
