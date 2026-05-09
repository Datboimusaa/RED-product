import API from '../services/API';
import { useContext, useState, createContext, useEffect, useCallback } from 'react';

const HotelsContext = createContext();

export function HotelsProvider({ children }) {
    const [hotels, setHotels] = useState([]);

    const getHotels = useCallback(async () => {
        try {
            const res = await API.get('/hotels');
            setHotels(res.data.data.hotels);
        } catch (error) {
            console.error("Couldn't fetch the hotels", error);
        }
    }, []);

    const createHotel = async (data) => {
        try {
            const res = await API.post('/hotels', data);
            const hotel = res.data.data.hotel;
            setHotels(prev => [...prev, hotel]);
            return hotel;
        } catch (error) {
            console.error("Couldn't create hotel", error)
            return null;
        }

    };

    const getHotel = async (id) => {
        try {
            const res = await API.get(`/hotels/${id}`);
            return res.data.data.hotel;
        } catch (error) {
            console.error("Couldn't get hotel", error);
        }

    };

    return (
        <HotelsContext.Provider value={{ hotels, createHotel, getHotel, getHotels }}>
            {children}
        </HotelsContext.Provider>
    )
}

export const useHotels = () => {
    return useContext(HotelsContext);
};