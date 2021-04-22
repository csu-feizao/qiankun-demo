import './init'
import React from "react";
import ReactDOM from "react-dom";
import Page from './Page'

export async function bootstrap() {
    // do nothing
    console.log('sub bootstrap')
}

export async function mount({container}: {container: Element}) {
    const root = document.createElement("div");
    root.setAttribute('id', 'root')
    container.appendChild(root)

    ReactDOM.render(<Page />, root);
}

export async function unmount({container}: {container: Element}) {
    ReactDOM.unmountComponentAtNode(container.querySelector('#root'))
}
