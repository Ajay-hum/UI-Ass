

const StateHook = () => {
    let value;
    const setValue = (param) => {
        value = param
        console.log(param);
    }

    return[value, setValue]
    
}

export default StateHook;

const [setValue, value] = StateHook()

useEffect(()=>setValue(10), [])
useEffect(()=>console.log(value),[value]
)