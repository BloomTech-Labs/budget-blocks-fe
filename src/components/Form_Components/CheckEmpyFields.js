export const CheckEmptyFields = (fields, values) =>{
    let emptyFields = 0;
    let newValues = {...values};
    Object.keys(fields).forEach((field)=>{
        const fieldValue = fields[field]
        if(fieldValue.trim() === "" ){
            newValues = {
                ...newValues,
                [field]:{
                    error:true,
                    helperText:`${field} is required`
                },
                button:{
                    disabled:true
                }
            };
            emptyFields = emptyFields+1;
        }
    });
    if(emptyFields > 0){
        return newValues
    }else{
        return false
    }
} 