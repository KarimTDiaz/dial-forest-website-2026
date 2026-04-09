import transport0 from '../../assets/transport/transport0.jpeg';
import transport1 from '../../assets/transport/transport1.jpeg';
import transport2 from '../../assets/transport/transport2.jpeg';
import transport3 from '../../assets/transport/transport3.jpeg';
import transport4 from '../../assets/transport/transport4.jpeg';
import transport5 from '../../assets/transport/transport5.jpeg';
import transport6 from '../../assets/transport/transport6.jpeg';


export const Transport = () => {
    return (
        <div className='p-5 md:p-8 md:px-32'>
            <h1 className='mb-6 text-4xl font-medium tracking-tight text-text-heading md:mb-8 md:text-5xl'>
                TRANSPORT
            </h1>



            <div className='grid gap-4 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 '>
                <img src={transport0} alt='Información de transporte Dial Forest' className='h-full w-full rounded-lg border-2 border-text-heading p-2' />
                <img src={transport1} alt='Información de transporte Dial Forest' className='h-full w-full rounded-lg border-2 border-text-heading p-2' />
                <img src={transport2} alt='Información de transporte Dial Forest' className='h-full w-full rounded-lg border-2 border-text-heading p-2' />
                <img src={transport3} alt='Información de transporte Dial Forest' className='h-full w-full rounded-lg border-2 border-text-heading p-2' />
                <img src={transport4} alt='Información de transporte Dial Forest' className='h-full w-full rounded-lg border-2 border-text-heading p-2' />
                <img src={transport5} alt='Información de transporte Dial Forest' className='h-full w-full rounded-lg border-2 border-text-heading p-2' />
                <img src={transport6} alt='Información de transporte Dial Forest' className='h-full w-full rounded-lg border-2 border-text-heading p-2' />
            </div>
        </div>
    );
};
