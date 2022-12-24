import Image from "next/image"

export default function Err() {
    return (
        <div className="h-full overflow-hidden">
            <Image src={'/images/32530.jpg'} layout={'fill'} alt='404 error' />
            <div className="absolute inset-0 bg-black opacity-50 ">
            </div>
            <div className="container absolute top-10 z-10 flex items-center px-6 py-32 mx-auto md:px-12 xl:py-40">
                <div className="relative z-10 flex flex-col items-center w-full font-mono">
                    <h1 className="mt-4 text-5xl font-extrabold leading-tight text-center text-white">
                        You&#x27;re alone here
                    </h1>
                    <p className="font-extrabold text-white text-8xl my-24 animate-bounce">
                        404
                    </p>
                </div>
            </div>
        </div>
    )
}