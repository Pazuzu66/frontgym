import { useState } from "react";

export const useForm = (initialState = {}) => {
    const [values, setValues] = useState(initialState)
    const handleInputChange = ({ target }) => {
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    const reset = () => {
        setValues(initialState);
    }
    const changeByObject = (newObject) => {
        setValues(
            newObject
        )
        console.log(values);
        return null
    }

    return [
        values,
        handleInputChange,
        reset,
        changeByObject
    ]
}