type IDType = string
type LatestType = any
type PreviousType = any

export function mapUpdates(model: any, active: any, callback: (id: IDType, latest: LatestType, previous?: PreviousType) => void, path: string[] = []) {
    const updates: {
        id: IDType,
        latest: LatestType,
        previous: PreviousType
    }[] = []

    for (let key in model) {

        const previous = model[key]
        const latest = active[key]
        const fullPath = [...path, key]
        if (typeof previous === 'object' && latest && typeof latest === 'object') updates.push(...mapUpdates(previous, latest, callback, fullPath))
        else {
            const id = fullPath.join('-')
            callback(id, latest, previous)
            updates.push({ id, latest, previous })
        }
    }

    return updates
}

let providerInfo = {}


export function handleEvent(event: MessageEvent, callback: Function) {
    const info = JSON.parse(event.data)
    let { provider, previously, added, ...update } = info

    if (provider) {

        const { steamid } = provider

        // Update the Provider Information
        if (!('steamid' in providerInfo)) {
            mapUpdates(provider, provider, (id: string, latest: any) => callback(id, latest), [ 'provider' ]) // Update UI using provider info
            providerInfo = provider
        }

        // Cycle Through the Available Updates
        Object.entries(update).forEach(([ name, latest ]: [string, any]) => {

            if ('steamid' in latest && latest.steamid !== steamid) return

            // Trigger when the new information does not have accompanying historical information that makes sense
            if (
                !previously // No previous info
                || (name in previously && 'steamid' in previously[name] && previously[name].steamid !== steamid) // Previous info is not self
            ) previously = {[name]: latest}

            // Contextualize the latest data with the previous value
            
            if (previously) mapUpdates(previously[name], latest, (id, latest, previous) => callback(id, latest, previously === latest ? undefined : previous), [ name ])

            // Separately register properties that have been added to the latest data
            if (added) mapUpdates(added[name], latest, (id, latest) =>  {
                
                // Update with a new object
                if (typeof latest === 'object'){
                    callback(id, latest, undefined, true) // We will need to generate a new UI component for this
                    mapUpdates(latest, latest, (id, latest) => callback(id, latest), id.split('-')) // Initialize the updates for this
                } 
                
                // Just update with a new value
                else callback(id, latest)
            }, [ name ])

        })
    } else {
        console.warn('Non-CS:GO Message', update)
    }

}