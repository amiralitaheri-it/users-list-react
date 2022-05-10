import React from 'react';

function TableHeader() {
    return (
        <thead className="justify-between rounded-lg">
        <tr className="bg-gradient-to-r from-cyan-700 to-blue-700">
            <th className="py-2 px-16">
                <span className="text-gray-100 font-semibold">Row</span>
            </th>

            <th className="px-16 py-2">
                <span className="text-gray-100 font-semibold">Name</span>
            </th>

            <th className="px-16 py-2">
                <span className="text-gray-100 font-semibold">Nickname</span>
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
                <span className="text-gray-100 font-semibold">Gender</span>
            </th>

            <th className="px-16 py-2">
                <span className="text-gray-100 font-semibold">Status</span>
            </th>

            <th className="px-16 py-2">
                <span className="text-gray-100 font-semibold">Settings</span>
            </th>
        </tr>
        </thead>
    );
}

export default TableHeader;