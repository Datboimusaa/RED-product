import API from '../services/API';
import { useContext, useState, createContext, useEffect } from 'react';

const HotelsContext = createContext();

export function HotelsProvider({ children }) {
    const [hotels, setHotels] = useState([]);

    const getHotels = async () => {
        try {
            const res = await API.get('/hotels');
            setHotels(res.data.data);
        } catch (error) {
            console.error("Couldn't fetch the hotels", error)
        }

    };

    const createHotel = async (data) => {
        try {
            const res = await API.post('/hotels', data);
            setHotels(prev => [...prev, res.data.data]);
        } catch (error) {
            console.error("Couldn't create hotel", error)
        }

    };

    const getHotel = async (id) => {
        try {
            const res = await API.get(`/hotels/${id}`);
            return res.data.data;
        } catch (error) {
            console.error("Couldn't get hotel", error)
        }

    };

    return (
        <HotelsContext.Provider value={{ hotels, createHotel, getHotel }}>
            {children}
        </HotelsContext.Provider>
    )
}

export const useHotels = () => {
    return useContext(HotelsContext);
};