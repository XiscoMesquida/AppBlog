import Image from "next/image"
import Link from "next/link"


function Header() {
  return (
    <header className="flex items-center justify-between space-x-2 font.bold px-10 py-5">
    <div className="flex items-center space-x-2">
        <Link href="/">
            <Image
            className="rounded-full"
            src="https://images-prod.dazeddigital.com/1097/155-0-1097-938/azure/dazed-prod/1200/8/1208405.jpg"
            width={50}
            height={50}
            alt="logo" />
        </Link>
        <h1>9S GOD</h1>
    </div>
    <div>
        <Link 
        href="https://github.com/XiscoMesquida"
        className="px-5 py-3 text-sm md:text-base bg-gray-800 text-[#6382b6] flex items-center rounded-full text-center">
        Github Knoledge
        </Link>

    </div>
    </header>

  )
}

export default Header