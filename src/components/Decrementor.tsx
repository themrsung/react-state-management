import { State } from "../state"

export default function Decrementor(props: { state: State }) {
    return (
        <button
            onClick={() => {
                props.state.decrementCounter()
            }}
        >
            Decrement
        </button>
    )
}
