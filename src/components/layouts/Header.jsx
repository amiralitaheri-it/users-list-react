import React from 'react';

function Header() {
    return (
        <div className="mx-auto flex justify-center">
            <h1 className="text-5xl mt-12 text-white">Users List Table</h1>
        </div>
    );
}

export default React.memo(Header);