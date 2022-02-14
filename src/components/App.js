import './App.css';
import Header from "../shared/components/layout/Header";
import Content from "../shared/components/layout/Content";
import Footer from "../shared/components/layout/Footer";
import Todo from "./Todo/Todo";
import React, {Component} from 'react';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header/>
                <Content>
                    <Todo/>
                </Content>
                <Footer/>
            </div>
        );
    }
}

export default App;
