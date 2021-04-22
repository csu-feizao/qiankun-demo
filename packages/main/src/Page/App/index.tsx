import React, { useEffect, useRef } from 'react'
import { loadMicroApp } from 'qiankun'

export default function () {
    const ref = useRef<HTMLDivElement>(null)
    useEffect(() => {
        if (ref.current) {
            const basePath = `${location.protocol}//${location.hostname}:9090/sub/`
            const app = loadMicroApp({
                name: 'qiankun-app',
                entry: {
                    scripts: [`${basePath}index.js`]
                },
                container: ref.current
            },
                {
                    getPublicPath: () => basePath
                })
            return () => {
                app.unmount()
            }
        }
    }, [])
    return (
        <div>
            <div>App</div>
            <div ref={ref} />
        </div>
    )
}
