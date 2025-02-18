import { useEffect, useState } from 'react';
import axios from 'axios';

export function useGetAPIDATA(sorvete) {
    const [sorveteData, setSorveteData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        async function fetchData() {
            try {
                const formattedSearch = sorvete.toLowerCase().replace(/\s+/g, '-');
                const response = await axios.get(`https://api.jikan.moe/v4/anime?q=${formattedSearch}`);
                if (response.status === 200) {
                    setSorveteData(response.data.data);
                } else {
                    setError("Falha ao buscar dados");
                }
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [sorvete]);

    return { sorveteData, loading, error };
}


