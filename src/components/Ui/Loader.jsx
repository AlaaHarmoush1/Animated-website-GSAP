import React from 'react'

const Loader = () => {
    return (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
            {/* https://uiverse.io/G4b413l/tidy-walrus-92 */}
            <div className="three-body">
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
                <div className="three-body__dot"></div>
            </div>
        </div>
    )
}

export default Loader
