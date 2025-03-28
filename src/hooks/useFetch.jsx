import { useState, useEffect } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const response = await fetch(url);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        getData();
    }, ["http://localhost:5000/api/pizzas/"]); 

    return { data, loading, error };
};

const pizzaApiUrl = "http://localhost:5000/api/pizzas/";

export const usePizzaFetch = () => {
    return useFetch(pizzaApiUrl);
};
