import { useRouter } from "next/router"
import carsData from "@/data/carsData"
import CarDetailPage from "@/templates/CarDetailPage";

function CarDetail() {
    const { carId } = useRouter().query

    const carDetail = carsData[carId - 1]
    console.log(carDetail);
    return <CarDetailPage {...carDetail} />
}

export default CarDetail