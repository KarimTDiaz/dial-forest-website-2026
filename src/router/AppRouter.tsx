import { Routes, Route } from 'react-router'
import { Layout } from '../layout/Layout'
import { Home } from '../pages/home/Home'
import { About } from '../pages/about/About'

export const AppRouter = () => {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Route>
        </Routes>
    )
}
