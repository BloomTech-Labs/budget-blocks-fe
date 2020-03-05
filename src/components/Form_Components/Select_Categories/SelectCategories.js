import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CheckboxItem from "./CheckboxItem";
import { selectCategories } from "../../../redux/actions/ManualActions";

export function SelectCategories({categoryArr, selectCategories, history}) {
  // This form is allowing the user to select what preset categories they want during onboarding process
  // values is the array of catefories the user can choose from
  // error is a string for a message to the user if the form is filled out incorrectly upon submission
  // The user must choose at least one preset category before moving on

  // sets values for array of categories given (mapCategoriesToValues funtcion is at the bottom of this file)
  const [values, setValues] = useState(mapCategoriesToValues(categoryArr));
  const [error, setError]= useState('');
 
  const handleChange = event => {
    // selects the field when clicked 
    setValues({
        ...values,
        [event.target.name]:{
            ...values[event.target.name],
            isSelected: !values[event.target.name].isSelected
        }
    })
  };

  const onSubmit = event =>{
    event.preventDefault();
    // creates an array of only the selected categories (filterUnwanted function is at the bottom of this file)
    const selectedValues = filterUnwanted(values)
    // if there are no selected values: display message saying they must pick at least one 
    if (selectedValues.length === 0){
        setError("You must pick at least one category");
    }else{
        // updates state with selected categories using the selectCategories redux action
        selectCategories(selectedCats, history);
    }
  }

  useEffect(()=>{
      // if there is no array values: send them back to begining of onboarding process
      if(categoryArr.length === 0){
          history.push("/onBoard/1");
      }
  })
  return (
    <div>
        <div className="content">
          <h2> Choose which category you would like to set budget for </h2>
          <div className="divider"></div>
            <form className="cat-select" onSubmit={onSubmit}>
                {Object.entries(values).map((value)=>(
                    <CheckboxItem
                        label={value[1].name}
                        name={value[0]}
                        isSelected={value[1].isSelected}
                        onCheckboxChange={handleChange}
                        key={value[0]}
                    />
                ))}
                <p>{error}</p>
                <button>Select Categories</button>
            </form>
          </div>
    </div>
  );
}

function mapStateToProps(state){
    return{
        categoryArr: state.plaidReducer.categories
    }
}

function mapCategoriesToValues(arr){
    let valueObj = {}; // object with keys for each value of the array to be returned
    // maps through array given
    arr.forEach((cat)=>{
        // for each value of the array: create a object key on the object that has the name and isSelected key values
        valueObj = {
            ...valueObj,
            [cat.name.replace(/\s/g, '')]:{
                name:cat.name,
                isSelected:false
            }
        }
    })
    // returns the object with keys for all preset categories given
    return valueObj;
}

function filterUnwanted(values){
    let newArr = []; // array to be returned
    // maps through each key on the object (each category)
    Object.entries(values).forEach((value)=>{
        // if the category is selected: put the name of the category onto the array
        if(value[1].isSelected === true){
            newArr = [...newArr, value[1].name]
        }
    })

    // returns array of categories selected
    return newArr;
}

export default connect(mapStateToProps,{selectCategories})(SelectCategories)
