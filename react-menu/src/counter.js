import React from 'react'
import './styles.scss';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

  state = {
    count: this.props.count || 0,
    fixSearch: false
  }


  listenScrollEvent() {
    const { fixSearch } = this.state
    const node = this.myRef.current;
    // console.log('Scroll event detected! '+node.scrollTop);
    if (node.scrollTop > 100) {
      console.log('true');
      this.setState({
        fixSearch: true
      })
      
    } else {
      this.setState({
        fixSearch: false
      })
    }
}






  updateCount = increment => {
    const { count } = this.state

    if (increment) {
      this.setState({
        count: count + 1
      })
    } else {
      this.setState({
        count: count - 1
      })
    }
  }

  render() {
    const { count } = this.state
    const { fixSearch } = this.state;

    return (



<div ref={this.myRef} onScroll={() => this.listenScrollEvent()} className={`${fixSearch ? "wrap fix-search" : "wrap"}`}>
  
  <header className="top-header">
    <span className="menu-icon">☰</span>
  </header>
  
  <div className="search">
    <input type="search" placeholder="Search or type URL" />
  </div>
  
  <div className="top">
    <div className="hero"></div>
  </div>
  
  <main>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </main>

  <div className="drawer">
        <p>The current count is {count}</p>
        <button onClick={() => this.updateCount(true)}>Increment</button>
        <button onClick={() => this.updateCount(false)}>Decrement</button>
      </div>

</div>





    )
  }
}

export default Counter