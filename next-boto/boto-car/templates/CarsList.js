import Back from "@/Components/icons/Back"
import Card from "@/Components/module/Card"
import Link from "next/link"


function CarsList({data}) {
    return (
        <div className="container">
            <div className="flex ">
                <Link href="/cars" className="flex gap-1 items-center font-bold py-2 px-6 rounded bg-yellow-300">
                    <Back/>
                    Back
                </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            {data.map(car => (
                <Card key={car.id} {...car} />
            ))}
        </div>
        </div>
    )
}

export default CarsList