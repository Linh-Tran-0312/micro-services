import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import reactToWebComponent from "react-to-webcomponent";

// const App = () => {
//     return <div>Render React component with v18 syntax</div>
// }
// const domNode = document.getElementById('root');
// const root = createRoot(domNode);
// root.render(<App/>)

const createWebComponent = ({ Component, props = {}, tag }) => {
  const LazyComponent = () => (
    <Suspense fallback={null}>
      <Component {...props}/>
    </Suspense>
  );
  const WebComponent = reactToWebComponent(LazyComponent, React, ReactDOM);
  customElements.define(tag, WebComponent);
};
const webComponentList = [
  {
    tag: "web-component-a",
    Component: React.lazy(() => import("./web-components/web-component-a")),
  },
  {
    tag: "web-component-b",
    Component: React.lazy(() => import("./web-components/web-component-b")),
  },
];

webComponentList.map((item) => createWebComponent(item));
