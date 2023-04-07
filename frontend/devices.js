
import { initDevice, Devices } from 'device-decoder'
import setState from './state'

export let active = null

export const selectable = {
    BLE:{
        hegduino:'HEGduino',
        hegduinoV1:'HEGduino V1',
        statechanger: "Statechanger",
        blueberry2:'Blueberry',
        blueberry:'Blueberry V1',
        nrf5x: "NRF5x",
    },
    USB:{
        hegduino: 'HEGduino',
        hegduinoV1: 'HEGduino V1',
        peanut:'Biocomp Peanut',
        statechanger: "Statechanger",
        nrf5x: "NRF5x",
    }
  }

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
           active = device
           setState({status: 'connected'})
         }
      })
      
      setState({ device })

      return device
}

export const disconnect = async () => {
    if (!active) throw new Error('No device to disconnect from')
    return await active.disconnect()
}