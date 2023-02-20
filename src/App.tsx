import React from "react"
import "./App.css"
import Decrementor from "./components/Decrementor"
import Getter from "./components/Getter"
import Incrementor from "./components/Incrementor"
import Setter from "./components/Setter"
import { State } from "./state"

class App extends React.Component {
    state: State = new State(0, this)

    render() {
        return (
            <>
                <Getter state={this.state} />
                <Decrementor state={this.state} />
                <Incrementor state={this.state} />
                <Setter state={this.state} />
            </>
        )
    }
}

export default App
