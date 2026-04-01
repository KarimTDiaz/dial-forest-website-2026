import glamping1 from '../../assets/accommodation/glamping1.jpeg';
import glamping2 from '../../assets/accommodation/glamping2.jpeg';
import glamping3 from '../../assets/accommodation/glamping3.jpeg';
import free1 from '../../assets/accommodation/free1.png';
import free2 from '../../assets/accommodation/free2.png';
export const Accommodation = () => {
    return (
        <div className='p-5 md:p-8 md:px-32'>
            <h1 className='text-4xl font-medium tracking-tight text-text-heading md:text-5xl mb-8'>
                FREE OPTIONS
            </h1>
            <div className='grid justify-between lg:grid-cols-2 xl:grid-cols-2 xxl:grid-cols-2 gap-4 mb-24'>
                <div>
                    <h2 className='text-4xl font-medium tracking-tight text-text-heading mb-4'>CAMPING</h2>
                    <img src={free1} alt='Dial Forest' className='w-full h-full border-2 p-16 rounded-lg' />
                </div>
                <div>
                    <h2 className='text-4xl font-medium tracking-tight text-text-heading mb-4'>CAMPER</h2>
                    <img src={free2} alt='Dial Forest' className='w-full h-full border-2 p-16 rounded-lg' />
                </div>
            </div>
            <h1 className='text-4xl font-medium tracking-tight text-text-heading md:text-5xl mb-8'>
                GLAMPING AREA
            </h1>
            <div className='grid justify-between lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-4 mb-8'>
                <img
                    src={glamping1}
                    alt='Dial Forest'
                    className='w-full h-full border-2 p-2 rounded-lg'
                />
                <img
                    src={glamping2}
                    alt='Dial Forest'
                    className='w-full h-full border-2 p-2 rounded-lg'
                />
                <img
                    src={glamping3}
                    alt='Dial Forest'
                    className='w-full h-full border-2 p-2 rounded-lg'
                />
            </div>
            <h1 className='text-4xl font-medium tracking-tight text-text-heading md:text-5xl mb-8'>
                HOTELES CERCANOS
            </h1>
            <h1 className='text-9xl mb-4'>H*</h1>
            <div className='grid'>
                <div className='flex flex-col gap-8 lg:flex-row justify-between'>
                    <div>
                        <p className='text-xl text-text-heading font-bold'>
                            BALNEARIO GALDARIA / LOBIOS
                        </p>
                        <p className='text-xl text-text-heading '>COCHE 26 min / 21 km</p>
                    </div>
                    <div>
                        <p className='text-xl text-text-heading font-bold'>
                            HOTEL CELANOVA / CELANOVA
                        </p>
                        <p className='text-xl text-text-heading'>COCHE 32 min / 28 km</p>
                    </div>
                    <div>
                        <p className='text-xl text-text-heading font-bold'>
                            BALNEARIO ALDA / XINZO
                        </p>
                        <p className='text-xl text-text-heading'>COCHE 32 min / 29 km</p>
                    </div>
                </div>
            </div>
        </div>
    );
};
