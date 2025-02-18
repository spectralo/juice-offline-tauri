import { Button } from "./components/ui/button";
import juicerImage from "./assets/juicer.png";

function Home() {
  return (
    <div className="p-4 flex flex-col h-full justify-between pb-10 overflow-clip items-center">
      <div>
        <h1 className="mx-2" style={{ fontSize: "2em" }}>
          Offline Juicer v0.1
        </h1>
      </div>
      <div className="justify-center">
        <img
          src={juicerImage}
          alt="juicer"
          className="w-[200px] max-w-[50%] pb-2 self-center"
        />
      </div>
      <div className=" justify-end ">
        <Button variant="outline" size="sm" className="w-full">
          Start Juicing
        </Button>
      </div>
    </div>
  );
}

export default Home;
