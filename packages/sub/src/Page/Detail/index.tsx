import React, { useEffect } from 'react'

export default function () {
    useEffect(() => {
        console.log('Detail mount 非预期')
    }, [])
    return <div>detail</div>
}
