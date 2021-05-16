function cast(eventName, options = { payload: {} }){
  if (this.events.hasOwnProperty(eventName)) {
    const subs = this.events[eventName].subs
    for (let i = 0; i < subs.length; i++) {
      const sub = subs[i]
      sub.cb({ ...options?.payload, ...sub.payload })
      if (sub.once) {
        this.events[eventName].subs = [
          ...subs.slice(0, i),
          ...subs.slice(i + 1),
        ]
      }
    }
  } else {
    throw new Error("Emitter error: There is no such event registered")
  }
}

function on(eventName, cb, options){
  if (this.events.hasOwnProperty(eventName)) {
    this.events[eventName].subs.push({ cb, payload: options?.payload })
  } else {
    this.events[eventName] = {
      subs: [{ cb, payload: options?.payload }],
    }
  }
}

function once(eventName, cb) {
  if (this.events.hasOwnProperty(eventName)) {
    this.events[eventName].subs.push({ cb, once: true })
  } else {
    this.events[eventName] = {
      subs: [{ cb: cb, once: true }],
    }
  }
}

function eventNames() {
  return Object.keys(this.events)
}

function off(eventName) {
  if (this.events.hasOwnProperty(eventName)) {
    delete this.events[eventName]
  }
}

function offAll() {
  const events = Object.keys(this.events)
  for (let i = 0; i < events.length; i++) {
    const event = events[i]
    delete this.events[event]
  }
}

function removeListener(eventName) {
  this.off(eventName)
}

function removeAllListeners() {
  this.offAll()
}

function clearSubs(eventName) {
  this.events[eventName].length = 0
}

const caster = {
  events: {},
  options: {},
  cast,
  on,
  once,
  off,
  offAll,
  removeListener,
  removeAllListeners,
  eventNames,
  clearSubs,
}

export default {
  set(app) {
    app.provide("v-caster", caster)
  },
}
