import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/home/Home';
import ProductFull from './pages/home/productFull/ProductFull';
import { useSelector} from 'react-redux';
import { RootState } from './app/store';
import { getRandomProducts } from './helperFunctions/randomItems';




function App() {

    const translation = useSelector((state: RootState)=>state.language.translation) 
    const products = translation.components.menu.products;

  const randomProducts = getRandomProducts(products, 3)



 


   
     return (
    <BrowserRouter>
       <Routes>
         <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />

           {translation.components.menu.products.map((product:any) => (
            <Route
              key={product.id}
              path={`${product.id}`}
              element={<ProductFull product={product} otherProducts={translation.components.otherProducts} randomProducts={randomProducts}/>}
            />
          ))}
         {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} />  */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
