import api from "../api";
import { useState, useEffect } from "react";
import { AxiosError } from "axios";

export interface UserProfileProps {
    name: string;
    point: number;
}

interface UserProfileResponse {
    data: UserProfileProps;
    code: number;
    message: string;
}

const useGetUserProfile = () => {
    const [response, setResponse] = useState<UserProfileProps>(null);
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        await api.get('/user/profile')
            .then(res => {
                const data: UserProfileResponse = res.data;
                setResponse(data.data);
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
    }
        , [])

    return { response, error, loading }
}

export default useGetUserProfile