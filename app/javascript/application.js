// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import React from "react"
import ReactDOM from "react-dom/client"
import RouteSwitch from "./components/RouteSwitch"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouteSwitch />);