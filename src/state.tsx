import React from "react"

export class State {
    private counter: number
    private refresher: boolean = false
    private reactComponent: React.Component

    constructor(counter: number, reactComponent: React.Component) {
        this.counter = counter
        this.reactComponent = reactComponent
    }

    getCounter() {
        return this.counter
    }

    setCounter(counter: number) {
        this.counter = counter
        console.log("Counter has been changed to " + String(this.counter))
        this.reactComponent.forceUpdate()
    }

    incrementCounter() {
        this.setCounter(this.counter + 1)
    }

    decrementCounter() {
        this.setCounter(this.counter - 1)
    }

    refresh() {
        this.refresher = !this.refresher
    }
}
