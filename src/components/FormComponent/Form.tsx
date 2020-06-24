import React from "react";
import { Formik } from "formik";
import { RouteProps } from "react-router-dom";
import { Form, Input, Title, Text, Button, Label } from "./FormStyledComponent";
import { Customer } from '../../store/actions/types/actionTypes';

interface FormProps extends RouteProps {
    customer?: Customer,
    onActionClick: ((customer: Customer) => void),
}

export const FormComponent: React.FC<FormProps> = ({ customer, onActionClick }) => {
    const initialValues = customer ? customer : { id: "", first_name: "", last_name: "", dob: "" }
    return (
        <div>
            <Title>Add Customer</Title>
            <Formik<Customer>
                initialValues={initialValues}
                validate={values => {
                    let errors: any = {};
                    // VALIDATION
                    if (!values.first_name) {
                        errors.first_name = "Please enter your first name";
                    }

                    if (!values.last_name) {
                        errors.last_name = "Please enter your last name";
                    }

                    if (!values.dob) {
                        errors.dob = "Please enter your date of birth";
                    }
                    return errors;
                }}
                onSubmit={values => {
                    onActionClick(values)
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
                                First name *
                {touched.first_name &&
                                    errors.first_name && <Text color="red">{errors.first_name}</Text>}
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.first_name}
                                    border={touched.first_name && errors.first_name && "1px solid red"}
                                    type="text"
                                    name="first_name"
                                    placeholder=" First name"
                                />
                            </Label>
                            <Label>
                                Last name *
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
                                    placeholder=" Last name"
                                />
                            </Label>
                            <Label>
                                Date of birth *
                {touched.dob &&
                                    errors.dob && <Text color="red">{errors.dob}</Text>}
                                <Input
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.dob}
                                    border={
                                        touched.dob && errors.dob && "1px solid red"
                                    }
                                    type="text"
                                    name="dob"
                                    placeholder=" Eg- 11/12/2013"
                                />
                            </Label>
                            <Button type="submit">Submit</Button>
                        </Form>
                    )}
            />
        </div>
    );
}
