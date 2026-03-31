import background from "../assets/background.png"
import Header from "../layout/Header"

const Hero = () => {
    return (
        <div>
            <div
                className="relative w-full min-h-screen bg-cover bg-center"
                style={{ backgroundImage: `url(${background})` }}
            >
                <Header/>

                <div className="absolute inset-0 flex flex-col items-start justify-center px-20 bg-black/20">
                    <h1 className="text-white text-4xl md:text-4xl font-bold mb-6">
                        TO ORDER
                    </h1>

                    <h2 className="text-white text-3xl md:text-5xl font-bold">
                        Made by Italians.
                        Enjoyed By Everyone!
                    </h2>

                    <div className="flex gap-4 mt-9">
                        <button className="px-10 py-3 bg-[#63755B] text-black font-bold rounded-3xl hover:bg-amber-100 hover:scale-105 transition duration-300">
                            MENU
                        </button>

                        <div className="flex items-center justify-start">
                            <button className="px-10 py-3 bg-amber-50 text-black font-bold rounded-3xl hover:bg-amber-100 hover:scale-105 transition duration-300">
                                ORDER
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero