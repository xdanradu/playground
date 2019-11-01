import React from 'react'
import deepmerge from 'deepmerge'
import './styles.scss';

class Deepmerge extends React.Component {

    state = {
        result: ''
    };

    compute() {
        console.log(this.getMerged());
        this.setState({
            result: "Success, see result in the console"
          }) 
      }

    getMerged(){
        return deepmerge.all([,
            { level1: { level2: { name: 'David', parts: ['head', 'shoulders'] } } },
            { level1: { level2: { face: 'meh', parts: ['knees', 'toes'] } } },
            { level1: { level2: { eyes: 'more meh', parts: ['eyes'] } } },
          ]);
    }

    render() {
        return (
        <div className="container">

            <h1>Press the button to merge objects using "deepmerge"</h1>

            <button className="ripple" onClick={() => this.compute()}>
                Merge objects
            </button>
            <h2>{ this.state.result }</h2>
        </div>

        )
    }
}

export default Deepmerge

