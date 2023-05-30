import fs from 'fs';
import path from 'path';
import { getSteamPath } from "./steam.js"
import templateConfigFile from '../config.js'

export const text = (name, object) => {
    return `"${name}"\n${JSON.stringify(object, null, 2).replaceAll(": ", " ").replaceAll('",\n', '"\n').replaceAll('},\n', '}\n')}`
}

export const installed = { steam: false, csgo: false }
const commonPath = `steamapps/common/Counter-Strike Global Offensive/csgo/cfg`
const steamPath = getSteamPath()
if (steamPath) {
    installed.steam = steamPath
    const basePath = path.join(steamPath, commonPath)
    if (fs.existsSync(basePath)) installed.csgo = basePath
    else console.error('CS:GO not found: Please install CS:GO to your computer using Steam and restart the server.')

} 

else console.error('Your Steam installation could not be located. Please install Steam and CS:GO on this computer.')

export const save = (port, filename) => {
    const config = JSON.parse(JSON.stringify(templateConfigFile))
    config.uri = `http://127.0.0.1:${port}`
    const cfgPath = path.join(installed.csgo, filename)
    fs.writeFileSync(cfgPath, text(filename, config))
}