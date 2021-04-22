import React from "react";
import ReactDOM from "react-dom";
import Page from './Page'

const root = document.createElement("div");
root.setAttribute('id', 'root')
document.body.appendChild(root)

ReactDOM.render(<Page />, root);
