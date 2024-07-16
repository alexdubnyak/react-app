import React from 'react'
import { useParams } from 'react-router-dom';

const JobPage = () => {
    const { id } = useParams();
    return (
        <div>
            {id}
        </div>
    )
}

export default JobPage
