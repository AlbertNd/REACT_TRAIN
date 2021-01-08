import React, { Component } from 'react'

class Form extends Component {

    state = {
        name :'',
        email: '',
        message:'',
        emailStatus:''
    }

    // Handle change 
    handleChange = input => e =>{
        this.setState({
            [input]:e.target.value
        })
    }


    // submit form 

    submitForm =(e) => {
        const {
            name,
            email,
            message
        } = this.state;
        //console.log(this.state);
        
        // Create a new XMLHTTPRequest
          
        var xhr = new XMLHttpRequest();

        // get a callback when the server responds 

        xhr.addEventListener('load',()=> {
            // update the emailStatus with the response
            console.log(xhr.responseText);
        });

        xhr.open('GET','http://albertndizeye.be/indexAP.php?sendto='+email+'&name='+name+'&message='+message);
        // send the request 
        xhr.send();


        e.preventDefault()
    }

    render() {
        const {
            name,
            email,
            message
        } = this.state;
        return (
            <div className="formBlock">
                 <form onSubmit = {this.submitForm}>
                     <label>
                         <input type="text" placeholder="Name" value={name} onChange={this.handleChange('name')}/>
                     </label>
                     <label>
                         <input type="text" placeholder="Email" value={email} onChange={this.handleChange('email')}/>
                     </label>
                     <label>
                         <textarea type="text" placeholder="Message" value={message} onChange={this.handleChange('message')}></textarea>
                     </label>
                     <label>
                         <input type="submit" className="submitBtn" value ="Submit"/>
                     </label>
                 </form>
            </div>
        )
    }
}

export default Form;
