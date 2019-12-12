import React, { Component } from 'react';

class News extends Component{
    constructor(props){
        super(props);
        this.state = {
            items : [],
        };
        this.componentWillMount = this.componentWillMount.bind(this);
    }

    componentWillMount() {
        fetch('http://democmf.nic.in/api/page?type=whos_who')
            .then(res => res.json())
            .then( data => this.setState({ items : data }) );
    }
    render() {
        const { items } = this.state;  
        const url = "http://democmf.nic.in/"; 
        return ( 
            <div className="wrapper about-us container">
               
                {this.state.items.map(item =>    
                        <div dangerouslySetInnerHTML={{__html: item.body}} />  
                ) }     
            </div>
         );
    }
}

export default News;