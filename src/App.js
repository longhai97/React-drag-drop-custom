import React from 'react';
import {ReactComponent as Hambuger} from "./hamburger.svg";
import './App.css';

export default class App extends React.Component {
    state = {
        items: ["🍰 Cake", "🍩 Donut", "🍎 Apple", "🍕 Pizza"]
    };

    onDragStart = (e, index) => {
        this.draggedItem = this.state.items[index];
        e.dataTransfer.effectAllowed = "move";
        e.dataTransfer.setData("text/html", e.target.parentNode);
        e.dataTransfer.setDragImage(e.target.parentNode, 20, 20);
    };

    onDragOver = (index) => {
        const draggedOverItem = this.state.items[index];
        if (this.draggedItem === draggedOverItem) {
            return;
        }
        let items = this.state.items.filter(item => item !== this.draggedItem);

        items.splice(index, 0, this.draggedItem);
        this.setState({items});
    };

    onDragEnd = () => {
        this.draggedIdx = null;
    };


    render() {
        return (
            <div className="App">
                <main>
                    <h3>List of items</h3>
                    <ul>
                        {this.state.items.map((item, idx) => (
                            <li key={item} onDragOver={() => this.onDragOver(idx)}>
                                <div
                                    className="drag"
                                    draggable
                                    onDragStart={ (e) => this.onDragStart(e, idx) }
                                    onDragEnd={ this.onDragEnd }
                                >
                                    <Hambuger/>
                                </div>
                                <span className={'content'}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </main>
            </div>
        );
    }
}
