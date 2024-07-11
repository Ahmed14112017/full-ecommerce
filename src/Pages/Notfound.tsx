import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

export default function Notfound() {
  return (
    <div>
<div className="bg-darkText/80 w-[150px] rounded-full flex items-center gap-2 py-2 px-2 text-whiteText hover:bg-darkText duration-200">
      <Link to="/product ">
      <FaArrowLeft className="inline"/>
       <span> start shopping</span>
      </Link>
     
    </div>
    </div>
    
  )
}
