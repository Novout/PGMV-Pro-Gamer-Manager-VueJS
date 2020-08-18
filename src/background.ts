"use strict";

import { envService } from "./services/defines/env";
import { app, protocol, BrowserWindow } from "electron";
import { createProtocol } from "vue-cli-plugin-electron-builder/lib";
import { createShortcuts } from "./electron/shortcuts";

// @ts-ignore
import installExtension, { VUEJS_DEVTOOLS } from "electron-devtools-installer";

const { PRODUCTION_MODE } = envService.getBaseEnv();

export let win: BrowserWindow | undefined | null;

protocol.registerSchemesAsPrivileged([
  { scheme: "app", privileges: { secure: true, standard: true } }
]);

const createWindow = () => {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    minHeight: 600,
    minWidth: 900,
    maxHeight: 1500,
    maxWidth: 2800,
    webPreferences: {
      enableRemoteModule: true,
      nodeIntegration: (process.env
        .ELECTRON_NODE_INTEGRATION as unknown) as boolean
    }
  });

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    win.loadURL(process.env.WEBPACK_DEV_SERVER_URL as string);
  } else {
    createProtocol("app");
    win.loadURL("app://./index.html");
  }

  win.setMenuBarVisibility(false);

  win.webContents.on("did-finish-load", () => {
    // @ts-ignore
    win.setTitle("PGMV - Pro Gamer Manager VueJS");
  });

  if (PRODUCTION_MODE) {
    win.setFullScreen(true);
  }

  win.on("closed", () => {
    win = null;
  });
};

app.on("ready", createShortcuts);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});

app.on("ready", async () => {
  if (PRODUCTION_MODE && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS);
    } catch (e) {
      console.error("Vue Devtools failed to install:", e.toString());
    }
  }
  createWindow();
});

if (PRODUCTION_MODE) {
  if (process.platform === "win32") {
    process.on("message", data => {
      if (data === "graceful-exit") {
        app.quit();
      }
    });
  } else {
    process.on("SIGTERM", () => {
      app.quit();
    });
  }
}
