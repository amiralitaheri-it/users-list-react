import React from 'react';

function TableHeader({ headerFields }) {
    return (
        <thead className="justify-between rounded-lg">
            <tr className="bg-gradient-to-r from-cyan-700 to-blue-700">
                {
                    headerFields.map((item, index) => (
                        <th className="py-2 px-16" key={index + Math.random() * 100}>
                            <span className="text-gray-100 font-semibold">{item}</span>
                        </th>
                    ))
                }
            </tr>
        </thead>
    );
}

export default TableHeader;