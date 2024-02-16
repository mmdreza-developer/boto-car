
import Card from '@/Components/module/Card'
import React from 'react'

function CarsPage({ data }) {
    return (
        <div className='container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {data.map(car => (
                <Card {...car} />
            ))}
        </div>
    )
}

export default CarsPage