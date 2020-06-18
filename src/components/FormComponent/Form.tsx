import React, { Component } from "react";
import { Formik } from "formik";
import { Form, Input, Title, Text, Button, Label } from "./FormStyledComponent";

export class FormComponent extends Component {
  render() {
    return (
      <div>
        <Title>Form</Title>
        {/* FORMIK */}
        <Formik
          initialValues={{ first_name: "", last_name: "" , dob: ""}}
          validate={values => {
            let errors : any = {};
            // VALIDATION
            if (!values.first_name) {
              errors.first_name = "Please mention your first name";
            }

            if (!values.last_name) {
              errors.last_name = "Please mention your last name";
            }
            return errors;
          }}
          onSubmit={values => {
            console.log(values);
          }}
          render={({
            touched,
            errors,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
          }) => (
            <Form onSubmit={handleSubmit}>
              <Label>
                Email *
                {touched.first_name &&
                  errors.first_name && <Text color="red">{errors.first_name}</Text>}
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.first_name}
                  border={touched.first_name && errors.first_name && "1px solid red"}
                  type="text"
                  name="first_name"
                  placeholder="First Name"
                />
              </Label>
              <Label>
                Password *
                {touched.last_name &&
                  errors.last_name && <Text color="red">{errors.last_name}</Text>}
                <Input
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.last_name}
                  border={
                    touched.last_name && errors.last_name && "1px solid red"
                  }
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                />
              </Label>
              <Button type="submit">Submit</Button>
            </Form>
          )}
        />
        {/* END OF FORMIK */}
      </div>
    );
  }
}