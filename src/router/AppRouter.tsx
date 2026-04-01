import { Routes, Route } from 'react-router';
import { Layout } from '../layout/Layout';
import { Home } from '../pages/home/Home';
import { About } from '../pages/about/About';
import { Artists } from '../pages/artists/Artists';
import { Transport } from '../pages/transport/Transport';
import { Accommodation } from '../pages/accommodation/Accommodation';

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/artists" element={<Artists />} />
                <Route path="/transport" element={<Transport />} />
                <Route path="/accommodation" element={<Accommodation />} />
            </Route>
        </Routes>
    );
};
