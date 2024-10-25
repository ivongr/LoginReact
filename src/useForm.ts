import { useState } from "react";
const useForm = () => {
    const [values, setValues] = useState({});
    const [errors, setErrors] = useState({});

    const validate = (event, name,value){
        switch (name){
            case "password":
                if(value.length <=4)
        }
    }
    const handleChange = (event:any) => {

        event.persiste();
        let name = event.target.email;
        let val = event.target.value;
        setValues({
            ...values,
            [name]: val,
        })
    }
    return {
        values,
        errors,
        handleChange,
    }
}

export default useForm;