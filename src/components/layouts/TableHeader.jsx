import React from 'react';

function TableHeader() {
    return (
        <thead className="justify-between">
        <tr className="bg-blue-600">
            <th className="px-16 py-2">
                <span className="text-gray-100 font-semibold">Row</span>
            </th>
            <th className="px-16 py-2">
                <span className="text-gray-100 font-semibold">Name</span>
            </th>

            <th className="px-16 py-2">
                <span className="text-gray-100 font-semibold">Date</span>
            </th>

            <th className="px-16 py-2">
                <span className="text-gray-100 font-semibold">Email</span>
            </th>

            <th className="px-16 py-2">
                <span className="text-gray-100 font-semibold">Type</span>
            </th>

            <th className="px-16 py-2">
                <span className="text-gray-100 font-semibold">Settings</span>
            </th>
        </tr>
        </thead>
    );
}

export default TableHeader;