import React from 'react'
import axios from 'axios'
import './App.css'


class App extends React.Component {
    state = { inspo : ""}

    componentDidMount(){
        this.fetchInspo()
    }
    
    fetchInspo = () => {
        axios.get('https://type.fit/api/quotes')
            .then((response) => {
                const len = response.data.length;
                const {text} = response.data[Math.floor(Math.random() * len)]
                console.log(text)
                this.setState({inspo: text})

                
            })
            .catch((error) => {
                console.log(error)
            })
    }

  render() {
    const {inspo} = this.state
    return (
        <div className='app'>
            <h1 className='title'>Inspo Genterator</h1>
            <div className='box'>
                <h1 className='.gradient_text'>{inspo}</h1>
            </div> 
                <button className='btn' onClick={this.fetchInspo}>
                    <span>Ask for More</span>
                </button>
        </div>
        
           
        
    )
  }
}

export default App