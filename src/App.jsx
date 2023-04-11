import Header from "./components/Header";
import Introduce from "./components/Introduce";
// import Portfolio from "./components/Portfolio";
import CompanyProfile from "./components/CompanyProfile";
// import Animate from "./three/three";

function App() {
  return (
    <div className="bg-green-200 min-h-screen">
      <Header />
      <main>
        <Introduce />
        {/* <Portfolio /> */}
        <CompanyProfile />
        {/* <Animate /> */}

      </main>
    </div>

  );
}

export default App;
