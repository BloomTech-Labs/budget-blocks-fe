export const CheckEmptyFields = (fields, values) =>{
    // This function maps through the the form values and checks that they are not empty. 
    // fields is an object with the values of the form. Ex: Login uses the user object which has the values email and password
    // values is the values object from the form that stores the error and message of form fields
    // if they are empty: it will return an edited version of the values object with the error for the empty field
    // if there are no errors: it will return boolean of false
    let emptyFields = 0;
    let newValues = {...values};
    // Maps through the keys of fields object.
    Object.keys(fields).forEach((field)=>{
        const fieldValue = fields[field]
        // If the value is empty add 1 to the emptyFields counter and make that field error
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
    // After mapping through all fields check the emptyFields counter to see if there are any empty fields
    if(emptyFields > 0){
        // if there are any empty fields then return the newValues object to set the values on the form
        return newValues
    }else{
        // if there are no empty fields: return false
        return false
    }
} 