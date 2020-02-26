import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import CheckboxItem from "./CheckboxItem";
import { selectCategories } from "../../../redux/actions/ManualActions";

export function SelectCategories({categoryArr, selectCategories, history}) {
  const [values, setValues] = useState(mapCategoriesToValues(categoryArr));
  const [error, setError]= useState('');
 
  const handleChange = event => {
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
    const selectedValues = filterUnwanted(values)
    const selectedCats = categoryArr.filter((cat)=>selectedValues.includes(cat.name));
    if (selectedCats.length === 0){
        setError("You must pick at least one category");
    }else{
        selectCategories(selectedCats, history);
    }
  }

  useEffect(()=>{
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
    let valueObj = {};
    arr.forEach((cat)=>{
        valueObj = {
            ...valueObj,
            [cat.name.replace(/\s/g, '')]:{
                name:cat.name,
                isSelected:false
            }
        }
    })
    return valueObj;
}

function filterUnwanted(values){
    let newArr = [];
    Object.entries(values).forEach((value)=>{
        if(value[1].isSelected === true){
            newArr = [...newArr, value[1].name]
        }
    })

    return newArr;
}

export default connect(mapStateToProps,{selectCategories})(SelectCategories)
