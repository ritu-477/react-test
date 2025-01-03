
import React, { useState, useEffect } from 'react';
import Heading from "../common/Heading";

const AddNumbers = () => {
    const [sum, setSum] = useState(0);

    useEffect(() => {
        function addNumbers(num1, num2) {
            return num1 + num2;
        }
        let result = addNumbers(20, 15);
        setSum(result);
    }, []);

    return (
        <div className="flex flex-col items-center justify-center lg:py-[60px] py-12 bg-gray">
            <div className='container'>
                <Heading classStyle={'text-center text-white'} text={'Add Two Numbers Using Function'} />
                <p id="result" className='text-center font-medium lg:text-3xl text-2xl pt-5 text-white'>Sum is: {sum}</p>
            </div>
        </div>
    );
};

export default AddNumbers;