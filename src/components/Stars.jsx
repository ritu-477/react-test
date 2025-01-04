import React, { useState, useEffect } from 'react';
import Heading from '../common/Heading';

const Star = () => {
    const [name, setName] = useState([]);

    useEffect(() => {
        const rows = 4;
        const cols = 4;
        const result = [];
        for (let i = 0; i < rows; i++) {
            let row = "";
            for (let j = 0; j < cols; j++) {
                row += "* "; 
            }
            result.push(row.trim());
        }
        setName(result);
    }, []);

    return (
        <div className='flex flex-col items-center justify-center lg:py-[60px] py-12 bg-black'>
            <div className='container'>
                <Heading classStyle={'text-center text-white'} text={'Star Loop'} />
                <div className="text-center pt-5 flex justify-center flex-col gap-1">
                    {name.map((row, index) => (
                        <p key={index} className="text-2xl text-white">{row}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Star;
