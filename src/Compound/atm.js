import React, { Component } from 'react'
import img from '../image/cart.png'
import '../index.css'
class atm extends Component {
    state = {
        name: "",
        numbervard: '',
        validThru: '',


    }

    handleChangeName = (e) => {

        this.setState({
            name: e.target.value
        })
    }
    handleChangeNumbcard = (e) => {
        var numvalidate = /^[3-6]$/
        if (numvalidate.test(e.target.value[0])) {
            this.setState({
                numbervard: e.target.value

            }) }
            else
            {
        e.target.value=''
            }
       
        for (let i = 1; i < e.target.value.length; i++) {
            
            var numvalidate = /^[0-9]$/
            this.setState({
                numbervard: ''

            })

            if (numvalidate.test(e.target.value[i])) {

                this.setState({
                    numbervard: `${e.target.value.slice(0, 4)} ${e.target.value.slice(4, 8)} ${e.target.value.slice(8, 12)} ${e.target.value.slice(12, 16)}`

                })
            }
            else
            {
                e.target.value=''
            }
           
        }


    }


    handelchangemm = (e) => {

    
    
   
    if(e.target.value.length==2)
    {
        e.target.value=`${e.target.value}/`
        this.setState({
            validThru: e.target.value
        })
    }
    else{
        e.target.value=`${e.target.value}`
        this.setState({
            validThru: e.target.value
        })
    }
        
   

    }
    render() {

        return (
            <div className="containner">
                <img src={img} width="500" />
                <input type="text" placeholder="enter your name" value={this.state.name} onChange={this.handleChangeName} />
                <h1 className="name">{this.state.name.toUpperCase()}</h1>
                <input type="text" placeholder="enter your number card" onChange={this.handleChangeNumbcard} maxLength={16} />
                <h1 className="card">{this.state.numbervard}</h1>
                <input type="text" onChange={this.handelchangemm} placeholder="MM/YY" maxLength={5} />
                <h1 className="mm">{this.state.validThru}</h1>

            </div>
        )
    }
}
export default atm