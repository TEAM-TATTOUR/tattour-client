import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import api from "../api";

export interface MainThemeItemProps {
    id: number;
    imageUrl: string;
    name: string;
    description: string;
}

interface MainThemeResponse {
    data: {
        themeInfos: MainThemeItemProps[]
    }
    code: number;
    message: string;
}

const useGetThemeCard = () => {
    const [response, setResponse] = useState<MainThemeItemProps[]>([]);
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        await api.get('/theme')
            .then(res => {
                const data: MainThemeResponse = res.data;
                setResponse(data.data.themeInfos);
            })
            .catch(err => {
                setError(err);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    useEffect(() => {
        fetchData();
    }, [])

    return { response, error, loading }
}

export default useGetThemeCard