import Image from "next/image";


export default function Svg({ imagePath }: { imagePath: string }) {
    return (
       <Image className="relative z-50" src={imagePath} alt={""}/>
    )
}