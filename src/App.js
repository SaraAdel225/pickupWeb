import './App.css';
import ReactDOM from 'react-dom';
import React from "react";
import Header from "./component/Header/Header"
import Home from "./component/Home/HomeP"
import About from './component/About/About'
import Services from "./component/Services/Services"
import Download from './component/Download/Download';
import Footer from './component/Footer/Footer'

class App extends React.Component{
    render(){
        return (
            <div className='App'>
                    <div className='light'/>
                    <Header/>
                    <Home/>
                    <About/>
                    <Services/>
                    <Download/>
                    <Footer/>
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector("#root"))
export default App;
