import LeftArrow from "@iconos/leftArrow";
import RightArrow from "@iconos/RightArrow";
import React, { useEffect } from "react";

function CarouselParallax() {
    const data = [
        {
            codigo: "SG-07",
            title: "Totora Paccha, Mesa Redonda y Teteqaqa",
            description:
                `En el tiempo de los incas, la admiración y el respeto que se 
                sintió hacia el paisaje natural se vio reflejado en las obras que realizaron, 
                poniendo a la piedra como parte de su tótem organizador del mundo. 
                Compuesto por las antiguas canchas incaicas y, sobre ellas, los monumentos 
                que son testimonio del sincretismo que nos envuelve, este lugar presenta 
                un respetable pasado de varios siglos.`,
            imagen: 'https://via.placeholder.com/1920x820',
        },
        {
            codigo: "SG-08",
            title: "Puka Pukara y Tambomachay",
            description:
                `Puka Pukara, la fortaleza roja, es una construcción militar 
                que sirvió de puesto de control para los incas. Su cercanía con 
                Tambomachay, lugar ceremonial de agua, refleja la importancia de 
                la defensa y el culto en esta región. Esta combinación de historia 
                y naturaleza crea un espacio único para la reflexión y el aprendizaje.`,
            imagen: 'https://via.placeholder.com/1500x780',
        },
        {
            codigo: "SG-09",
            title: "Sacsayhuamán, Fortaleza Sagrada",
            description:
                `Sacsayhuamán, con sus imponentes muros de piedra, es una de las 
                construcciones más impresionantes del mundo andino. Este espacio ceremonial 
                fue escenario de importantes rituales incas y, más tarde, el epicentro 
                de enfrentamientos coloniales. Su grandeza sigue asombrando a todos 
                quienes lo visitan.`,
            imagen: 'https://via.placeholder.com/1200x1200',
        },
        {
            codigo: "SG-10",
            title: "Q'enqo, el laberinto de piedra",
            description:
                `Q'enqo, que significa "laberinto" en quechua, es una de las 
                construcciones más enigmáticas de Cusco. Su red de pasadizos, 
                canales de agua y altares ceremoniales sugiere que se utilizó para 
                ritos religiosos. Este espacio invita a la contemplación y el misterio.`,
            imagen: 'https://via.placeholder.com/1380x920',
        },
        {
            codigo: "SG-11",
            title: "Tipón, el templo del agua",
            description:
                `El sitio arqueológico de Tipón es famoso por sus canales de agua, 
                que aún funcionan hasta el día de hoy. Esta obra maestra de ingeniería 
                hidráulica fue utilizada para el riego de cultivos y los rituales de agua. 
                La precisión con la que se construyeron sus terrazas demuestra la 
                avanzada comprensión de la hidráulica por parte de los incas.`,
            imagen: 'https://via.placeholder.com/1800x1920',
        }
    ];


    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [isTransitioning, setIsTransitioning] = React.useState(false);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + data.length) % data.length);
    };

    useEffect(() => {
        const intervalId = setInterval(handleNext, 5000);
        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        if (isTransitioning) {
            const timeout = setTimeout(() => setIsTransitioning(false), 500);
            return () => clearTimeout(timeout);
        }
    }, [isTransitioning]);

    return (
        <section
            className="w-full mx-auto mt-24 py-24 bg-cover bg-center relative"
            style={{ backgroundImage: `url(${data[currentIndex].imagen})` }}
        >
            <div className="absolute inset-0 bg-black/70"></div>

            <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-row">
                <div className="grid grid-cols-12 gap-4 px-24">
                    <div className="col-span-6 flex flex-col gap-2 px-12 mx-12">
                        <h2
                            className={`text-3xl text-UrubambaWhiteColor font-semibold transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'} relative before:content-[''] before:absolute before:left-0 before:bottom-[-10px] before:h-[3px] before:w-[25%] before:bg-[#fdc657]`}
                        >
                            {data[currentIndex].codigo}
                        </h2>

                        <h2 className={`mt-2 text-xl text-UrubambaWhiteColor font-semibold transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            {data[currentIndex].title}
                        </h2>
                        <p className={`text-sm text-UrubambaWhiteColor transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
                            {data[currentIndex].description}
                        </p>
                    </div>

                    <div className="col-span-6 flex flex-col gap-2">
                        <div className="flex flex-col">
                            <div className="w-full h-72 overflow-hidden rounded-md">
                                <img
                                    src={data[currentIndex].imagen}
                                    alt={`Slide ${currentIndex + 1}`}
                                    className={`w-full h-full object-cover transition-opacity duration-500 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}
                                />
                            </div>

                            <div className="flex gap-4 mt-4">
                                <button
                                    onClick={handlePrev}
                                    className="bg-gray-800 text-white size-10 rounded-full hover:bg-gray-700 text-center place-items-center"
                                >
                                    <LeftArrow color="#ffffff" />
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="bg-gray-800 text-white size-10 rounded-full hover:bg-gray-700 text-center place-items-center"
                                >
                                    <RightArrow color="#ffffff" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CarouselParallax;
