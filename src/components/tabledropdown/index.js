import React, { useState } from 'react';
import { Select } from 'antd';
import { StyledSelectField } from './style';

const Index = ({ name, options, defaultValue, handleFilterChange }) => {
    const [selectedValue, setSelectedValue] = useState(false)

    const OptionsArr = options?.map((option) => {
        return (
            <Select.Option
                key={option.id}
                value={option.value}
            >
                {option.text}
            </Select.Option>
        )
    })

    const handleChange = (value) => {
        setSelectedValue(true)
        handleFilterChange(name, value)
    }

    // const handleClear = () => {
    //     alert('hi')
    //     setSelectedValue(false)
    //     handleFilterChange(name, "")
    // }

    return (
        <StyledSelectField selectedValue={selectedValue}>
            <Select
                allowClear
                onChange={handleChange}
                defaultValue={defaultValue}
                suffixIcon={
                    <img
                        alt='down-arrow'
                        style={{ height: '8px' }}
                        src='/images/down-arrow.svg'
                    />
                }
            // suffixIcon={!selectedValue ? (
            //     <img
            //         alt='down-arrow'
            //         style={{ height: '8px' }}
            //         src='/images/down-arrow.svg'
            //     />
            // ) :
            //     <img
            //         alt='filter-cross'
            //         onClick={handleClear}
            //         src='/images/filter-cross.svg'
            //     />
            // }
            >
                {OptionsArr}
            </Select>
        </StyledSelectField>
    )
}

export default Index