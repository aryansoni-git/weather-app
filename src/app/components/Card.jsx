import Image from "next/image";

export default function Card({ value, text, src, alt, isTemp, isWind }) {
    return (
        <div className={`${isTemp ? 'flex-col' : 'flex-row'} flex justify-center items-center gap-2 sm:gap-4`}>
            <Image
                alt={isTemp ? alt : (isWind ? 'wind icon' : 'humiditty icon')}
                src={isTemp ? src : (isWind ? '/wind.svg' : '/humidity.svg')}
                height={isTemp ? 120 : 25}
                width={isTemp ? 120 : 25}
                className={isTemp ? '' : 'sm:h-12 sm:w-12'}
            />
            <div className={`${isTemp ? 'gap-2' : ''} flex flex-col justify-center items-center `}>
                <span   
                    className={`${isTemp ? 'font-bold text-2xl sm:text-4xl' : 'font-medium sm:text-3xl'}`}>
                    {value}
                </span>
                <span
                    className={`${isTemp ? 'text-3xl sm:text-5xl' : 'sm:text-2xl'} font-semibold`}>
                    {isTemp ? text : (isWind ? 'wind speed' : 'humidity')}
                </span>
            </div>
        </div>
    );
}