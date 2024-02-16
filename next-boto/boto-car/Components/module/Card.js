import Link from "next/link"
import Location from "../icons/Location"

function Card({ id, name, model, year, distance, location, price, description, image, category }) {
  return (
    <Link href={`/cars/${id}`} className="flex flex-col gap-2 p-2 rounded shadow-sm shadow-white">
      <img className="w-full" src={image} alt="" />
      <div className="flex items-center gap-3">
        <div>{name}</div>
        <div>{model}</div>
      </div>
      <div className="flex items-center gap-3">
        <div>{year}.</div>
        <div>{distance} .</div>
      </div>
      <div className="flex items-center justify-between">
        <div className="bg-yellow-300 p-2 rounded font-bold">
          $ {price}
        </div>
        <div className="flex items-center gap-2">
          <div>{location}</div>
          <div><Location /></div>
        </div>
      </div>
    </Link>
  )
}

export default Card