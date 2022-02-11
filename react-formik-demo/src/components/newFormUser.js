import React from "react";
import { Form, Col, Container, Button } from 'react-bootstrap'
import { Formik } from "formik";
import * as yup from 'yup';

const NewUserForm = () => (
  <Container>
    <Formik
      validationSchema={yup.object({
        firstName: yup.string().required(),
        middleInitial: yup.string(),
        lastName: yup.string().required(),
        streetAddress: yup.string(),
        addressLine2: yup.string(),
        city: yup.string(),
        state: yup.string(),
        zipCode: yup.string(),
        email: yup.string().email().required(),
        phoneNumber: yup.string().matches(/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/, 'Phone number is not valid').required(),
        contactViaSms: yup.bool()
      })}
      onSubmit={(values, { resetForm }) => {
        console.log('formValues', values);
        resetForm();
      }}
      initialValues={{
        firstName: "",
        middleInitial: "",
        lastName: "",
        streetAddress: "",
        addressLine2: "",
        city: "",
        state: "",
        zipCode: "",
        email: "",
        phoneNumber: "",
        contactViaSms: false
      }}
    >
      {({
        handleSubmit,
        handleChange,
        resetForm,
        touched,
        values,
        errors,
      }) => (
          <Form>
              <Form.Group as={Col}>
                <Form.Label>First name</Form.Label>
                <Form.Control
                  placeholder="First name"
                  onChange={handleChange("firstName")}
                  value={values.firstName}
                  isInvalid={touched.firstName && !!errors.firstName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.firstName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Middle Initial</Form.Label>
                <Form.Control
                  onChange={handleChange("middleInitial")}
                  value={values.middleInitial}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Last name</Form.Label>
                <Form.Control placeholder="Last name"
                  onChange={handleChange("lastName")}
                  value={values.lastName}
                  isInvalid={touched.lastName && !!errors.lastName}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.lastName}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Street Address</Form.Label>
                <Form.Control
                  placeholder="Street Address"
                  onChange={handleChange("streetAddress")}
                  value={values.streetAddress}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Address 2</Form.Label>
                <Form.Control
                  placeholder="Address 2"
                  onChange={handleChange("addressLine2")}
                  value={values.addressLine2}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>City</Form.Label>
                <Form.Control
                  placeholder="City"
                  onChange={handleChange("city")}
                  value={values.city}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>State</Form.Label>
                <Form.Control
                  placeholder="State"
                  onChange={handleChange("state")}
                  value={values.state}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Zip code</Form.Label>
                <Form.Control
                  placeholder="Zip code"
                  onChange={handleChange("zipCode")}
                  value={values.zipCode}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  onChange={handleChange("email")}
                  value={values.email}
                  isInvalid={touched.email && !!errors.email}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.email}
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                  placeholder="Enter phone number"
                  onChange={handleChange("phoneNumber")}
                  value={values.phoneNumber}
                  isInvalid={touched.phoneNumber && !!errors.phoneNumber}
                />
                <Form.Control.Feedback type="invalid">
                  {errors.phoneNumber}
                </Form.Control.Feedback>
              </Form.Group>
            <Form.Group as={Col}>
              <Form.Check type="checkbox" label="Contact me via SMS"
                onChange={handleChange("contactViaSms")}
                value={values.contactViaSms}
              />
            </Form.Group>
            <Button variant="secondary" onClick={resetForm}>Clear</Button>{' '}
            <Button onClick={handleSubmit}>Submit form</Button>
          </Form>
        )}
    </Formik>
  </Container>
);

export default NewUserForm;