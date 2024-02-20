'use server'

import { isEmpty } from "lodash"

export interface VerifyResult {
    isValid?: boolean,
    context?: string,
}

type ValidCodes = {
    [key: string]: string
}

const validCodes: ValidCodes = {
    'foo': "this is a valid code!",
    'bar': "this code is valid for XYZ survey"
}

export async function verify(prevState: VerifyResult, formData: FormData): Promise<VerifyResult> {
    const code = formData.get('code')

    if (isEmpty(code)) {
        return { isValid: false, context: 'No code provided.' }
    }
    if (! (typeof code === 'string')) {
        return { isValid: false, context: 'Invalid code type.' }
    }

    const context = validCodes[code]

    return { isValid: !!context , context: context ?? 'Invalid code.' }
}
