import "./App.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Home from "./Home";
import WinControls from "./WinControls";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen overflow-clip">
        <WinControls />
        <div
          className={
            "h-screen overflow-auto border-t bg-background pb-8 scrollbar scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md"
          }
        >
          <Home />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
