import { State } from "../state"

export default function Incrementor(props: { state: State }) {
    return (
        <button
            onClick={() => {
                props.state.incrementCounter()
            }}
        >
            Increment
        </button>
    )
}
