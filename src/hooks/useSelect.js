import React, {useState} from 'react'

const useSelect = (initialOption, allOptions) => {

    const[ option, setSelectedOption ] = useState( initialOption )
   
    const SelectOptions = () => (
        <select value={option} onChange={ (e) => setSelectedOption(e.target.value)} style={{ opacity:0.8 }} className="bg-dark form-control form-control-sm col-4 text-white ">
            { allOptions.map( option => (
                <option key={option.value} value={option.value}>{option.name}</option>
            ))
            }
        </select>
    )

    return [ option, SelectOptions ]
}

export default useSelect
