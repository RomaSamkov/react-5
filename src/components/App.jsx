import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from './SharedLayout';

// const createAsyncComponent = path => lazy(() => import(path));

const About = lazy(() => import('../pages/About.jsx'));
const Home = lazy(() => import('../pages/Home.jsx'));
const ProductDetails = lazy(() => import('../pages/ProductDetails.jsx'));
const Products = lazy(() => import('../pages/Products.jsx'));
const Mission = lazy(() => import('./Mission.jsx'));
const Team = lazy(() => import('./Team.jsx'));
const Reviews = lazy(() => import('./Reviews.jsx'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path="mission" element={<Mission />} />
          <Route path="team" element={<Team />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  );
};

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
