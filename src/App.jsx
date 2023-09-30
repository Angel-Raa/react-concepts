import { Page } from "./Context/Page";

function App() {
  return (
    <div>
     <Page />
    </div>
  );
}

export default App;

/*
 <BrowserRouter>
      <Nav/>
       <Routes>
            <Route path="/"  element={<Home/>}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/products" element={<Product/>}/>
            <Route path="/counter" element={<Counter/>}/>
            <Route path="/products/:id" element={<ProductDetails/>}/>
            <Route path="*" element={<Error404/>}/ >
       </Routes>
      </BrowserRouter>
      
*/