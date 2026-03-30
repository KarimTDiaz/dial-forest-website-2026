import porta from '../../assets/porta.png';
import vixia from '../../assets/vixia.png';
import baixa from '../../assets/baixa.png';

export const About = () => {

    return (
        <div className='p-5 md:p-8 md:px-32 mx-auto flex flex-col gap-16'>
            <div className='flex flex-col gap-4 '>
                <h1 className='text-4xl font-medium tracking-tight text-text-heading md:text-5xl'>
                    About
                </h1>
                <p>
                    Este ano cumprimos 10 anos en @dial.electrónico e para celebralo
                    comezamos con moita ilusión un novo proxecto no que uniremos as dúas
                    cousas que mais gústannos, clubbing e natureza. Benvidas a Dial Forest!
                </p>
                <p>
                    A escena que nos rodea,
                    a xente que loita por que a música sexa unha forma de conectar, de crear comunidade.
                    Clásicos / headliners / rookies / colectivos / selos
                    Todos unidos para defender música e baile como un ritual transformador.
                    DIY como forma de vida!
                    LEMBRA A túa ESCENA.
                    Con agarimo,
                    A xente de Dial
                </p>
                <p>DIALFOREST.26 será un punto de encuentro para una escena que resiste, que crea, que sostiene un circuito inclusivo y sin distinciones.
                    Un espacio necesario. Un lugar para reunirnos. Un bosque donde sembrar comunidad.</p>
                <p>Es momento de construir.</p>
                <p>Es momento de crear.</p>
            </div>
            <div className='flex flex-col gap-4'>
                <h1 className='text-4xl font-medium tracking-tight text-text-heading md:text-5xl'>
                    Stages
                </h1>
                <div className='flex justify-center gap-12'>

                    <img src={porta} alt="porta" className="block h-20 " />
                    <img src={vixia} alt="vixia" className="block h-20" />
                    <img src={baixa} alt="baixa" className="block h-20 " />
                </div>
            </div>
        </div>
    );
};
