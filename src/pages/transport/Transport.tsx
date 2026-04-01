import busSvg from '../../assets/Recurso 2.svg';
import line from '../../assets/line-1.svg';
import logo from '../../assets/logo.svg';
import transport1 from '../../assets/transport/transport1.jpeg';
import transport2 from '../../assets/transport/transport2.jpeg';
import transport3 from '../../assets/transport/transport3.jpeg';
import transport4 from '../../assets/transport/transport4.jpeg';
import transport5 from '../../assets/transport/transport5.jpeg';
import transport6 from '../../assets/transport/transport6.jpeg';

export const Transport = () => {
    return (
        <>
            <div className='py-5 md:py-8 min-h-screen'>
                <div
                    className='transport-bus-stage'
                    aria-hidden='true'
                >
                    <img
                        src={busSvg}
                        alt=''
                        className='transport-bus-img'
                        decoding='async'
                    />
                </div>
                <div className='transport-route-content flex flex-1 flex-col'>
                    <img
                        src={line}
                        alt='Dial Forest'
                        className='w-[80%] absolute right-10 top-80'
                    />
                </div>
                <div>
                    <img
                        src={logo}
                        alt='Dial Forest'
                        className='w-[15%] absolute bottom-[0] left-1/2 -translate-x-1/2'
                    />
                </div>
            </div>
            <div className='grid lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-4 p-5 md:p-8' >
                <img src={transport1} alt='Dial Forest' className='w-full h-full border-2 p-2 rounded-lg' />
                <img src={transport2} alt='Dial Forest' className='w-full h-full border-2 p-2 rounded-lg' />
                <img src={transport3} alt='Dial Forest' className='w-full h-full border-2 p-2 rounded-lg' />
                <img src={transport4} alt='Dial Forest' className='w-full h-full border-2 p-2 rounded-lg' />
                <img src={transport5} alt='Dial Forest' className='w-full h-full border-2 p-2 rounded-lg' />
                <img src={transport6} alt='Dial Forest' className='w-full h-full border-2 p-2 rounded-lg' />
            </div>
        </>
    );
};
