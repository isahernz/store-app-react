import {
  Navbar,
  ProductDetailsContainer,
  // ProductListContainer,
} from "./components";

function App() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto">
        {/* <ProductListContainer /> */}
        <ProductDetailsContainer id={1} />
      </main>
    </>
  );
}

export default App;
