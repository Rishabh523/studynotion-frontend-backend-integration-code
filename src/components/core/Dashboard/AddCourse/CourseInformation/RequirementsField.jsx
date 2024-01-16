import React, { useEffect, useState } from 'react'

const RequirementsField = ({name, label, register, errors, setValue, getValues}) => {
    const [requirement, setRequirmenets] = useState("");
    const [requirementList, setRequirementList] = useState([]);
    useEffect(() => {
        register(name, {
            required:true,
            validate: (value) => value.length > 0
        })
    },[])


    useEffect(() => {
        setValue(name, requirementList);
    }, [requirementList]);


    const handleAddRequirement = () => {
        if(requirement) {
            setRequirementList([...requirementList, requirement]);
            setRequirementList("");
        }
    }
    const handleRequirement = (index) => {
        const updatedRequirementList = [...requirementList];
        updatedRequirementList.splice(index, 1);
        setRequirementList(updatedRequirementList);
    }

  return (
    <div>
        
        <label> {label} <sup>*</sup></label>
        <div>
            <input 
            type="text"
            id={name}
            value={requirement}
            onChange = { (e) => setRequirementList(e.target.value)}
            className='w-full'
            />
            <button 
            type="button"
            onClick={handleAddRequirement}
            className='font-semibold text-yellow-50'
            >
                Add
            </button>
                
        </div>
        {
            requirementList.length > 0 && (
                <ul>
                    {
                        requirementList.map((requirement, index) => (
                           <li key={index} className='flex items-center text-cnter text-richblack-5'>
                              
                           </li>
                        ))
                    }
                </ul>
            )
        }

    </div>
  )
}

export default RequirementsField