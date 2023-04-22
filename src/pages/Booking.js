
import React, { useState,  useReducer } from "react";
import { fetchAPI, submitAPI } from "../api/api"


import {
    Box,
    Heading,
    VStack,
} from "@chakra-ui/react";

import BookingForm from '../components/BookingForm';

const Booking = () => {
    const [date, setDate] = useState(new Date())
   // const navigate = useNavigate();
    const submitForm = formData => {
        const isSubmitted = submitAPI(formData);
    }

    const initializeTimes = d => {
        return fetchAPI(d)
    }

    const updateTimes = (state, action) => {
        const dateObj = new Date(action.new_date)
        return fetchAPI(dateObj)
    }
    const [    availableTimes,     dispatch  ] = useReducer(updateTimes,  initializeTimes(date));


    return (

        <VStack

            py={6}
            spacing={2}
        >
            <VStack w="700px" p={2} alignItems="flex-start">
                <Heading data-testid="table-reservation" as="h1" id="contactme-section" colorScheme="none">
                    Table Reservation
                </Heading>
                <Box p={2} rounded="md" w="100%">
                    <BookingForm
                        availableTimes={availableTimes}
                        dispatch={dispatch}
                        submitForm={submitForm}
                    />
                </Box>
            </VStack>
        </VStack>

    );
};

export default Booking;