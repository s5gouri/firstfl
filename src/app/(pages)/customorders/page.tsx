import "@/app/globals.css";
// pages/index.tsx
import JotFormEmbed from "@/components/JotFormEmbed";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div>
      <div className=" w-full">
        <Navbar />
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center ft fw-bolder">Custom Orders</h1>
          </div>
        </div>
      </div>
      <JotFormEmbed />
    </div>
  );
};

export default Home;
