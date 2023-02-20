import { State } from "../state"

export default function Getter(props: { state: State }) {
    return <p>Current Counter Value: {props.state.getCounter()}</p>
}
