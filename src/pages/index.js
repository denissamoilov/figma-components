import React from "react"

import '../index.css';
import { MasterTile } from '../figmaComponents';


export default () => {
    return (
        <section id="promotiles">
            <div className="tile"><MasterTile /></div>
            <div className="tile"><MasterTile /></div>
        </section>
    )
}