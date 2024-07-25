import Image from "next/image";

export const Heroes = () => {
    return(
        <div className="flex flex-col items-center justify-center maz-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px]">
                <Image 
                src="/heart-light.svg"
                fill
                className="object-contain"
                alt="Documnet
                "/>
            </div>
            <div className="relative h-[400px] w-[400px] hidden md:block">
            <Image 
                src="/panda-light.svg"
                fill
                className="object-contain"
                alt="Documnets"
            />
            </div>
            </div>
        </div>
    )
}