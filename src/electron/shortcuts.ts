import { globalShortcut } from "electron";
import { win } from "@/background";

export const createShortcuts = () => {
  globalShortcut.register("CmdOrCtrl+D", () => {
    // @ts-ignore
    win.webContents.openDevTools();
  });
};
