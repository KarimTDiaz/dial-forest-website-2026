import busSvg from '../../assets/Recurso 2.svg';
import line from '../../assets/line-1.svg';
import logo from '../../assets/logo.svg';

export const Transport = () => {
    return (
        <div className='py-5 md:py-8'>
            {/* <h1 className="text-4xl font-medium tracking-tight text-text-heading md:text-5xl">
                Transporte
            </h1> */}
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
                    className='w-[15%] absolute bottom-[-30%] left-1/2 -translate-x-1/2'
                />
            </div>
        </div>
    );
};
