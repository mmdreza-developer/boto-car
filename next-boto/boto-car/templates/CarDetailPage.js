import Company from "@/Components/icons/Company"
import Calender from "@/Components/icons/Calender"
import Location from "@/Components/icons/Location"
import Model from "@/Components/icons/Model"
import Sedan from "@/Components/icons/Sedan"
import Money from "@/Components/icons/Money"
import Road from "@/Components/icons/Road"

function CarDetailPage({ id, name, model, year, distance, location, price, description, image, category }) {
  return (
    <div className="container my-5">
      <div className="flex justify-center">
        <img src={image} />
      </div>
      <div className="text-xl font-bold text-center mt-3">{model}</div>
      <div className="flex flex-col gap-2 p-4 rounded shadow-lg">
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg flex items-center gap-1"><Company /> Company :</div>
          <div className="text-gray-500">{name}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg flex items-center gap-1"><Model /> Model :</div>
          <div className="text-gray-500">{model}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg flex items-center gap-1"><Calender /> First Registion :</div>
          <div className="text-gray-500">{year}</div>
        </div>
        <div className="flex justify-between items-center">
          <div className="font-bold text-lg flex items-center gap-1"><Road />Kms Driven :</div>
          <div className="text-gray-500">{distance}</div>
        </div>
      </div>
      <div className="flex items-center justify-between p-4 rounded shadow-lg mt-5">
        <div className="text-lg font-bold flex items-center gap-1"><Location /> Location :</div>
        <div className="text-gray-500">{location}</div>
      </div>
      <div className="flex flex-col gap-2 p-4 rounded shadow-lg mt-5">
        <div className="text-xl font-bold flex items-center gap-1">Extra Information</div>
        <div className="text-gray-500">{description}</div>
      </div>
      <div className="flex items-center justify-between p-4 rounded shadow-lg mt-5">
        <div className="text-xl font-bold flex items-center gap-1"><Money /> Price :</div>
        <div className="text-gray-500">{price} $</div>
      </div>
      <div className="flex items-center justify-center mt-3">
        <button className="p-4 w-full text-xl font-bold rounded bg-green-500 hover:bg-green-600 duration-200 text-white">Buy</button>
      </div>
    </div>
  )
}

export default CarDetailPage