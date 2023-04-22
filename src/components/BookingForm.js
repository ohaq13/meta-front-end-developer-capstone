
import React, {useState} from "react";
import { useFormik } from "formik";
import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Select,
  VStack,
  Spinner
} from "@chakra-ui/react";
import * as Yup from 'yup';
import useSubmit from "../hooks/useSubmit";
import {useAlertContext} from "../context/alertContext";

const BookingForm = ({availableTimes, dispatch, submitForm}) => {
    console.log(availableTimes)
    const minimumDate = new Date().toISOString().split('T')[0];
    const {isLoading, response, submit} = useSubmit();
    const  {onOpen}  = useAlertContext();
   // const [minDate, setDate] = useState(minimumDate);
    const options =  availableTimes.map(time => <option key={time}>{time}</option>);

  const formik = useFormik({
    initialValues: {firstName: "",    minDate: new Date().toISOString().split('T')[0],    guests: "2"},
    onSubmit: values => {submit("url", values).then(val=>response ? onOpen(response.type, response.message):onOpen("success", "Your reservation has been confirmed!."))},
    validationSchema: Yup.object({
      firstName: Yup.string().required('Required'),
      minDate:Yup.date().typeError("please enter a valid date").required().min(minimumDate, "Date is too early").required(),
      guests: Yup.number().min(1, "Guests can't be less than 1! ").max(10,"Guests can't be more than 10").required('Guest is required')
    }),

  });

  const handleDateChange = e => {
    formik.handleChange(e);
   // setDate(e.target.value);
    dispatch({ type: 'new_date', new_date: e.target.value });
    console.log(e.target)
  };

  return (
          <form onSubmit={formik.handleSubmit}>
            <VStack spacing={4}>
              <FormControl isInvalid={formik.touched.firstName && formik.errors.firstName}>
                <FormLabel htmlFor="firstName">Name</FormLabel>
                <Input
                  id="firstName"
                  name="firstName"
                  {...formik.getFieldProps('firstName')}
                />
                <FormErrorMessage>{formik.errors.firstName}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={formik.touched.minDate && formik.errors.minDate}>
                <FormLabel htmlFor="res-date">Date</FormLabel>
                <Input
                  id="res-date"
                  name="res-date"
                  type="date"
                  {...formik.getFieldProps('minDate')}
                  onChange={handleDateChange}
                />
                <FormErrorMessage>{formik.errors.minDate}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="res-time">Time</FormLabel>
                <Select id="res-time" name="res-time"   {...formik.getFieldProps('res-time')}>
                    {options}
                </Select>
              </FormControl>

              <FormControl isInvalid={formik.touched.guests && formik.errors.guests}>
                <FormLabel htmlFor="guests">Number of guests</FormLabel>
                <Input
                  id="guests"
                  name="guests"
                  type="number" 
                  {...formik.getFieldProps('guests')}
                />
                <FormErrorMessage>{formik.errors.guests}</FormErrorMessage>
              </FormControl>

              <FormControl>
                <FormLabel htmlFor="occasion">Ocassion</FormLabel>
                <Select id="occasion" name="occasion"   {...formik.getFieldProps('occasion')}>
                <option>Birthday</option>
                <option>Birthday</option>

                </Select>
              </FormControl>

              <Button data-testid="booking-submit" type="submit" colorScheme="yellow" width="full" aria-label="On Click">
                Make Your reservation
                {isLoading? <Spinner m={2} color='red.500' />:null}
              </Button>
            </VStack>
          </form>

  );
};

export default BookingForm;