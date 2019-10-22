import './App.css';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { increase } from "./actions";

class IncreaseButton extends Component {

    render() {
        const { updating, onClick } = this.props;

        return (
            <button onClick={onClick} disabled={updating}>
                { updating ? 'Calculating' : 'Count' }
            </button>
        );
    }
}

class App extends Component {

   render() {

        const { count, increase, updating } = this.props;

        return (
          <div className={'container'}>
             <h1>{count}</h1>
             <IncreaseButton updating={updating} onClick={() => increase(1, count)}/>
          </div>
        )
   }
}

const mapStateToProps = (state) => {
    return {
        count: state.count,
        updating: state.updating
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        increase: increase(dispatch)
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
