import React from "react";
import Navbar from "./Components/Navbar/Navbar";

export default class App extends React.Component {

    constructor (props){
        super(props);
    }

    render(){
        return (
            <div>
                <Navbar />
            </div>
        )
    }
}