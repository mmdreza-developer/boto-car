import Categories from '@/Components/module/Categories'
import carsData from '@/data/carsData'
import CarsPage from '@/templates/CarsPage'
import React from 'react'

function Cars() {
    return (
        <div>
            <Categories />
            <CarsPage data={carsData} />
        </div>
    )
}

export default Cars