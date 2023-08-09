import React, { useState } from "react";
import {v4 as uuid} from "uuid";
import axios from "axios";

const useAxios = (baseURL, initialState = []) => {
    try {
        const [cards, setCards] = useState(initialState);

        const addCard = async (restOfURL="") => {
            const response = await axios.get(baseURL + restOfURL);
            setCards(cards => [...cards, { ...response.data, id: uuid() }]);
        };
        const resetCards = () => {
            setCards([]);
        };

        return [cards, addCard, resetCards];

    } catch (error) {
        console.error(error);
    }
};

export default useAxios;
