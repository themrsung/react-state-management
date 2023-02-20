import React, { useState } from "react"
import { State } from "../state"

export default function Setter(props: { state: State }) {
    const [input, setInput] = useState<number>(props.state.getCounter())

    return (
        <>
            <input
                type="number"
                value={input}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    setInput(Number(e.currentTarget.value))
                }}
            />
            <button
                onClick={() => {
                    props.state.setCounter(input)
                }}
            >
                Set
            </button>
        </>
    )
}
