
import carsData from "@/data/carsData"
import CarsList from "@/templates/CarsList";
import { useRouter } from "next/router"

export default function CategoryId() {
    const categoryId = useRouter().query.categoryId
    const carCategory = carsData.filter(car => car.category == categoryId)
    console.log(carCategory);
    return <CarsList data={carCategory} />
}