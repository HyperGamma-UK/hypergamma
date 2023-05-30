// @ts-ignore
import { backendPort } from '../../common/index.js'

import { handleEvent } from './events.js'

export const appid = 730

const backendBaseUri = `http://127.0.0.1:${backendPort}`

export const isInstalled = async () => fetch(`${backendBaseUri}/installed`).then((res: any) => res.json(res))

// ---------------------------- Get CS:GO Events ----------------------------
var source = new EventSource(`${backendBaseUri}/events`);

let previousUpdate: any = {}

const updateUI = (id: string, latest: any, previous: any, isNew: boolean) => {

    if (previousUpdate[id] === latest) return // No update to the UI expected

    previousUpdate[id] = latest

    if (isNew) console.warn('Handle New Entry', id, latest, previous)

    const el = document.getElementById(id)
    if (el) el.innerText = latest
    else console.log(id, latest, previous)
}

function onOpen() {
    console.warn('Event source opened!')
}

// source.addEventListener('progress', handleSSEEvent, false);
source.addEventListener('message', (ev) => handleEvent(ev, updateUI));
 
source.addEventListener('error', function() {
    console.error("Failed to connect to event stream.");
}, false);

source.addEventListener("open", onOpen);
