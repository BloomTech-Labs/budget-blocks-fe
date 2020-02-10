export const ChangeCheckField = (e, values) =>{
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