import React, { useState } from 'react'

export function useInput(init) {
    const [value, setValue] = useState(init)
    return [
        { value, onChange: (e) => setValue(e.targe.value) },
        () => setValue(init)
    ]
}