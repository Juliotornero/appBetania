import { Link } from 'react-router-dom';
import DiscoverButton from './DiscoveButton';

const CardLink = ({ to, imgSrc, title }) => {
    return (
        <article className="relative w-full h-[480px]  flex group overflow-hidden ">
            <img
                src={imgSrc}
                alt="Imagen de Cuarto"
                className="w-full h-full transition-transform transform scale-100 group-hover:scale-105"
            />
            <Link to={to} className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-evenly">
                <p className="text-white text-3xl font-bold tracking-wide text-center">{title}</p>
                <DiscoverButton/>
            </Link>
        </article>
    );
};

export default CardLink;