import { useEffect, useState } from 'react';
import { AxiosError } from "axios";
import api from "../api";

interface CartListProps {
    cartItemsRes: CartItemProps[];
    orderAmountDetailRes: OrderAmountDetailProps;
}

export interface CartItemProps {
    stickerId: number;
    mainImageUrl: string;
    name: string;
    price: number;
    discountPrice: number;
    count: number;
}

export interface OrderAmountDetailProps {
    totalAmount: number;
    productAmount: number;
    shippingFee: number;
}

interface CartListResponse {
    data: CartListProps
    code: number;
    message: string;
}

const useGetCartList = () => {
    const [response, setResponse] = useState<CartListProps>();
    const [error, setError] = useState<AxiosError>();
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        await api.get('/cart/items')
            .then(res => {
                const data: CartListResponse = res.data;
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
    }, [])

    return { response, error, loading }
}

export default useGetCartList;
