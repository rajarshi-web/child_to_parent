import React from 'react'
import Child from './components/child'
import './App.css'

class App extends React.Component {
 
  state = {
      name: "",
      
  }

  // Callback function to handle data received from the
  //child component
  handleCallback = (childData) => {
      // Update the name in the component's state
      this.setState({ name: childData })
  }
  
  render() {
      const { name } = this.state;
      return (
          <div>
              <Child parentCallback={this.handleCallback} />
              {name}
          </div>
      )
  }
}
export default App
