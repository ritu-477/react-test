
import React, { useState, useEffect } from 'react';
import Heading from '../common/Heading';

const MultipleTable = () => {
    const [table, setTable] = useState([]);

    useEffect(() => {
        const number = 2;
        const result = [];
        for (let i = 1; i <= 10; i++) {
            result.push(`${ number } * ${ i } = ${ number * i}`);
        }
        setTable(result);
    }, []);

    return (
        <div className='lg:py-[60px] py-12 flex flex-col items-center justify-center bg-light-blue'>
            <Heading classStyle={'text-center'} text={'Table 2'} />
            <div className=" text-center pt-5 font-medium ">
                {table.map((line, index) => (
                    <p key={index} className="text-2xl">{line}</p>
                ))}
            </div>
        </div>
    );
};

export default MultipleTable;
