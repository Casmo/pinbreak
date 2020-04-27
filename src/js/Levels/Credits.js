import React from 'react';

class Credits extends React.Component {
    render() {
        return (
            <div className="flex flex-col">
                <div className="text-white text-center px-4 py-2 m-2">Thanks for playing!</div>
                <div className="text-white text-center px-4 py-2 m-2">Mathieu de Ruiter (github.com/Casmo)</div>
                <div className="text-white text-center px-4 py-2 m-2">Matter.js (https://brm.io/matter-js/)</div>
                <div className="text-white text-center px-4 py-2 m-2">tailwindcss (https://tailwindcss.com/)</div>
            </div>
        );
    }
}
export default Credits;
