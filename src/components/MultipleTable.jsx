import React, { useState, useEffect } from 'react';
import Heading from '../common/Heading';

const MultipleTable = () => {
    const [tables, setTables] = useState([]);

    useEffect(() => {
        const results = [];
        for (let number = 2; number <= 20; number++) {
            const table = [];
            for (let i = 1; i <= 10; i++) {
                table.push(`${number} * ${i} = ${number * i}`);
            }
            results.push({ number, table });
        }
        setTables(results);
    }, []);

    return (
        <div className='lg:py-[60px] py-12 flex flex-col items-center justify-center bg-light-blue'>
            <div className='container px-4 mx-auto'>
                <Heading classStyle={'text-center'} text={'Tables from 2 to 20'} />
                <div className="text-center pt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
                    {tables.map(({ number, table }) => (
                        <div key={number} className="flex flex-col bg-white p-4 rounded-lg shadow-md">
                            <h3 className="text-2xl font-bold mb-4">Table of {number}</h3>
                            {table.map((line, index) => (
                                <p key={index} className="text-xl">{line}</p>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MultipleTable;
