import { useState } from "react";

export const useFetchGifs = () => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    setTimeout(() => {
        setState({
            data: ['123', '456'],
            loading: false
        })
    }, 3000);

    return state; 

};
