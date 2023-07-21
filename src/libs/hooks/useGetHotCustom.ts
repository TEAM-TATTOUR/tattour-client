import { useEffect, useState } from "react"
import api from "../api"
import { AxiosError } from "axios";

export interface HotCustomItemProps {
    id: number;
    imageUrl: string;
    name: string;
    price: number;
    discountPrice: number;
    discountRate: number;
    isCustom: boolean;
}

interface HotCustomResponse {
    data: {
        stickers: HotCustomItemProps[]
    }
    code: number;
    message: string;
}

const useGetHotCustom = () => {
    const [response, setResponse] = useState<HotCustomItemProps[]>([])
    const [error, setError] = useState<AxiosError>()
    const [loading, setLoading] = useState(true)

    const fetchData = async () => {
        await api.get('/stickers/custom/hot')
            .then(res => {
                const data: HotCustomResponse = res.data
                setResponse(data.data.stickers)
            })
            .catch(err => {
                setError(err)
            })
            .finally(() => {
                setLoading(false)
            })
    }

    useEffect(() => {
        fetchData()
    }, [])

    return { response, error, loading }
}

export default useGetHotCustom