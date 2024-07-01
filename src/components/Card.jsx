import React from 'react'

const Card = ({ children, bg_developers = 'bg-gray-100', bg_employers = 'bg-indigo-100' }) => {
    return (
        <div className={`${bg_developers} p-6 rounded-lg shadow-md`}> {children}</div>
    )
}

export default Card