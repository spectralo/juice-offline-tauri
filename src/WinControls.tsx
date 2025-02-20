import { useEffect } from "react";
import { WindowControls } from "tauri-controls";
import { useState } from "react";
import { CardStackIcon } from "@radix-ui/react-icons";
import { Button } from "./components/ui/button";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { NavLink } from "react-router";

function WinControls({ doesReturn = true }) {
  const [userPlatform, setUserPlatform] = useState("");
  const [styleAddons, setStyleAddons] = useState("");

  useEffect(() => {
    const setUsersPlatform = async () => {
      const platformName = "macos";
      console.warn(platformName);
      if (platformName !== "windows" && platformName !== "macos") {
        setUserPlatform("macos");
      } else if (platformName == "macos") {
        setUserPlatform(platformName);
        setStyleAddons("pt-2 pb-2");
      } else {
        setUserPlatform(platformName);
      }
    };

    setUsersPlatform();
  });

  return (
    <>
      <div
        className={`flex justify-between items-center w-full ${styleAddons}`}
      >
        <div>
          {" "}
          {/* Left side */}
          <WindowControls platform={userPlatform} />
        </div>
        <div>
          {" "}
          {/* Right side */}
          <Button variant="outline" size="sm" style={{ marginRight: 10 }}>
            {doesReturn ? (
              <>
                <NavLink to="/sessions" end>
                  <CardStackIcon />
                </NavLink>
              </>
            ) : (
              <NavLink to="/" end>
                <ArrowLeftIcon />
              </NavLink>
            )}
          </Button>
        </div>
      </div>
    </>
  );
}

export default WinControls;
