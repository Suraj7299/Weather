import { Link } from "react-router-dom";

import { useTheme } from "@/context/theme-provider";
import { Moon, Sun } from "lucide-react";

export function Header() {
  const { theme,setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 py-2">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to={"/"}>
          <img
            src={theme === "dark" ? "/logo.png" : "/logo2.png"}
            alt="Klimate logo"
            className="h-14"
          />
        </Link>

        <div className="flex gap-4">
            <div onClick={()=>setTheme(isDark? "light":"dark")}>
                isDark? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />
            </div>
        
          
        </div>
      </div>
    </header>
  );
}
