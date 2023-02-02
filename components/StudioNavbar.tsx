import Link from "next/link"
import {ArrowUturnLeftIcon} from "@heroicons/react/24/solid";

function StudioNavbar(props: any) {
  return (
    <div>
        <div className="flex items-center justify-between p-5">
            <Link href="/" className="text-[#2d5f7d] flex items-center">
              <ArrowUturnLeftIcon className="h-6 text-[#2d5f7d] mr-2" />
              Go to Website</Link>
          
        <div className="hidden md:flex p-5 rounded-lg justify-center border-2 border-[#2d5f7d]">
          <h1 className="font-bold text-white">
            Creador y Creados
          </h1>
          <Link
             href="https://github.com/XiscoMesquida"
             className="text-[#2d5f7d] font-bold ml-2">
              GITHUB
             </Link>

        </div>
        </div>
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default StudioNavbar