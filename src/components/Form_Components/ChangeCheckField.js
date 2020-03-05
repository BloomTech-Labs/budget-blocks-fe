export const ChangeCheckField = (e, values) =>{
    // this function checks to see if the value given is valid for login. 
    // If the value is valid: do not show error and message
    // If it is invalid: show error and message
    let newValues = { ...values};
    if(e.target.value.trim() === ""){
        newValues = {...values, [e.target.name]:{
                error:true,
                helperText:`${e.target.name} is required`
            } 
        };
    }else{
        newValues = {...values, [e.target.name]:{
                error:false,
                helperText:``
            } 
        };
    }
    return newValues
}