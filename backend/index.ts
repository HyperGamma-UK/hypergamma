import { backendPort } from '../common'
import createEventServer from './csgo-event-server/src'

const server = createEventServer({
  port: backendPort
})