import { useState } from 'react'
import { useHistory, useLocation } from "react-router-dom";

export const useUrl = (param) => {

    const history = useHistory()
    const { search, pathname } = useLocation()
    const url = new URLSearchParams(search)

    const urlParam = url.get(param)
    const [value, setValue] = useState(urlParam !== null ? urlParam : '')

    function _setValue(val){
        url.set(param, val)
        history.replace({ pathname, search: url.toString() }); 
        setValue(val)
    }

    return [value, _setValue]
}