import Image from "next/image";

function Logo(props: any) {
    const { renderDefault, title} = props;
  return (
    <div className="flex items-center space-x-2">
        <Image 
        className="rounded-full object-cover"
        height={50}
        width={50}
        src="https://images-prod.dazeddigital.com/1097/155-0-1097-938/azure/dazed-prod/1200/8/1208405.jpg"
        alt="logo"
        />
        <>{renderDefault(props)}</>
    </div>
  )
}

export default Logo