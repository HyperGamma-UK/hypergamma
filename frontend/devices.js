
import { initDevice, Devices } from 'device-decoder'
import setState from './state'

export let active = null

export const connect = async (mode, key) => {
    if (active) throw new Error('Already connected to a device')
    const device = await initDevice(Devices[mode][key], {
        ondecoded: (info) => {
         setState({decoded: info})
        },
        ondisconnect: () => {
            active = null
            setState({status: 'disconnected'})
        },
         onconnect: (device) => {
            console.log(device)
            active = device
           setState({status: 'connected'})
         }
      })

      return device
}

export const disconnect = async () => {
    if (!active) throw new Error('No device to disconnect from')
    return await active.disconnect()
}