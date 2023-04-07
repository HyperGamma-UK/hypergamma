
let subscriptions = {}

let allSubscriptions = {}

export const states = {}

const infoSubscribeSymbol = Symbol('infoSubscribeSymbol')

export const subscribe = (target, callback) => {
    const randomId = Math.random().toString(36).substring(2, 15)
    if (typeof target === 'function') {
        callback = target
        target = [infoSubscribeSymbol]
    }

    else target = [target]

    let subTarget = subscriptions

    target.forEach((key) => {
        if (!subTarget[key]) subTarget[key] = {}
        subTarget = subTarget[key]
    })

    subTarget[randomId] = callback
    allSubscriptions[randomId] = {
        target,
        callback
    }

    return randomId
}

export const unsubscribe = (id) => {
    const { target } = allSubscriptions[id]

    let subTarget = subscriptions
    target.forEach((key) => {
        if (!subTarget[key]) subTarget[key] = {}
        subTarget = subTarget[key]
    })
    
    delete subTarget[id]
    delete allSubscriptions[id]

    let secondSubTarget = subscriptions
    target.forEach((key) => {
        if (Object.keys(secondSubTarget[key]).length === 0) delete secondSubTarget[key]
    })
}

const maxDepth = 5

let runOnPrimitiveValues = (obj, path = []) => {
    if (path.length > maxDepth) return
    for (let key in obj) {
        const fullKey = [...path, key].join('.')
        if (typeof obj[key] === 'object') runOnPrimitiveValues(obj[key], [...path, key])
        if (subscriptions[fullKey]) Object.values(subscriptions[fullKey]).forEach((callback) => callback(obj[key]))
    }
}


export const setState = (info) => {
    if (!info) return

    Object.assign(states, info)


    // Run all internal subscriptions
    runOnPrimitiveValues(info)

    // Run object subscriptions
    if (subscriptions[infoSubscribeSymbol]) Object.values(subscriptions[infoSubscribeSymbol]).forEach((callback) => callback(info))
}

export default setState