import Category from "./components/Category";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar"
import { GiSmartphone } from "react-icons/gi";

export default function Home() {
  return (
    <div>
      <nav className=" bg-slate-100 px-10 py-2 flex justify-between sticky">
        <div>
          <p className="flex text-slate-600 items-center gap-2"><GiSmartphone /> 
            Dowload Cahyopedia App
          </p>
        </div>
        <ul className="flex gap-5">
          <li>
            <a href="" className="text-slate-600 hover:text-green-600">Tentang Cahyopedia</a>
          </li>
          <li>
            <a href="" className="text-slate-600 hover:text-green-600">Mitra Cahyopedia</a>
          </li>
          <li>
            <a href="" className="text-slate-600 hover:text-green-600">Pusat Edukasi Seller</a>
          </li>
          <li>
            <a href="" className="text-slate-600 hover:text-green-600">Promo</a>
          </li>
          <li>
            <a href="" className="text-slate-600 hover:text-green-600">Cahyopedia Care</a>
          </li>
        </ul>
      </nav>
      < Navbar />
      < Hero />
      < Category />

    </div>
  )
}