import "./App.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import WinControls from "./WinControls";
import { Card } from "./components/ui/card";
import { Button } from "./components/ui/button";

function Sessions() {
  let sessions = [
    // use uuidv4
    {
      title: "Juice Stretch : 6983c274-39ae-43ec-9bb6-e25da895918d",
      description: "This is a description",
    },
    {
      title: "Juice Stretch : 6983c274-39ae-43ec-9bb6-e25da895918d",
      description: "This is a description",
    },
    {
      title: "Juice Stretch : 6983c274-39ae-43ec-9bb6-e25da895918d",
      description: "This is a description",
    },
    {
      title: "Juice Stretch : 6983c274-39ae-43ec-9bb6-e25da895918d",
      description: "This is a description",
    },
    {
      title: "Juice Stretch : 6983c274-39ae-43ec-9bb6-e25da895918d",
      description: "This is a description",
    },
    {
      title: "Juice Stretch : 6983c274-39ae-43ec-9bb6-e25da895918d",
      description: "This is a description",
    },
  ];
  // Added sessions prop with default empty array
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="h-screen overflow-clip">
        <WinControls doesReturn={false} />
        <div
          className={
            "h-screen overflow-auto border-t bg-background pb-8 scrollbar scrollbar-track-transparent scrollbar-thumb-accent scrollbar-thumb-rounded-md"
          }
        >
          <div className="m-4">
            <h1 style={{ fontSize: "2em", marginBottom: "0.2em" }}>
              Your offline sessions
            </h1>
            <Button
              variant="green"
              size="sm"
              className="mt-2"
              style={{ backgroundColor: "green" }}
            >
              Upload all
            </Button>
            <div className="mt-6 ">
              {sessions.map((session) => (
                <Card className="p-3 mt-2">
                  <h1>{session.title}</h1>
                  <p>{session.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Sessions;
