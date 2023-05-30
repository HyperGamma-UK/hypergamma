import { enumerateValues, HKEY } from 'registry-js'
import path from 'path';
import fs from 'fs';
import { homedir } from 'os';

// Windows: D:\Steam\steamapps\ OR HKEY_CURRENT_USER\Software\Valve\Steam
// Mac: ~/Library/Application Support/Steam/steamapps/
// Linux: ~/.local/share/Steam/steamapps/

export function getSteamPath() {

    // Linux Installation Location
    if (process.platform === "linux") {
        const steamPath = path.join(homedir(), ".steam", "root", "Steam");
        if (fs.existsSync(steamPath)) return steamPath;

        const altSteamPath = path.join(homedir(), ".local", "share", "Steam")
        if (fs.existsSync(altSteamPath)) return altSteamPath
        return null;
    }

    if (process.platform === "darwin") {
        const steamPath = path.join(homedir(), "Library", "Application Support", "Steam");
        if (fs.existsSync(steamPath)) return steamPath;
        return null;
    }
    
    if (process.platform !== "win32") throw new Error("Unsupported operating system");

    // Windows Installation Location
    try {
        const entry = enumerateValues(HKEY.HKEY_LOCAL_MACHINE, 'SOFTWARE\\WOW6432Node\\Valve\\Steam').filter(value => value.name === "InstallPath")[0];
        const value = entry && String(entry.data) || null;
        return value;
    }
    catch (e) {
        console.error('AHH', e)
        return null;
    }
}