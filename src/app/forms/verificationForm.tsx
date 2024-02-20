'use client'

import { useFormState, useFormStatus } from "react-dom"
import { verify } from "@/app/actions"

const inputStyle = {
    margin: '1em',
    color: 'black',
}

export default function VerificationForm() {
    const [state, formAction] = useFormState(verify, {})

    const contextStyle = {
        // technically isValid can also be null
        color: state.isValid ? 'green' : 'red',
    }

    return (
        <form action={formAction}>
            <label htmlFor="code">Verification Code: </label>
            <input type="text" id="code" name="code" required style={inputStyle} />
            <SubmitButton />
            <p aria-live="polite" role="status" style={contextStyle} >
                {state?.context}
            </p>
        </form>
    )
}

function SubmitButton() {
    const { pending } = useFormStatus()
    return (
        <button type="submit" aria-disabled={pending}>Verify</button>
    )
}
