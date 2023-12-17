import React from "react";
import { createRoot } from "react-dom/client";

const App = () => {
    return <div>Render React component with v18 syntax</div>
}
const domNode = document.getElementById('root');
const root = createRoot(domNode);
root.render(<App/>)
