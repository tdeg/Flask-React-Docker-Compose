import React from 'react';

export default class FlaskComponent extends React.Component {
    state = {
        name: null,
    }

    async componentDidMount() {
        const url = '/hello';
        
        let response;
        try {
            response = await fetch(url);
            let jsonData = await response.json();
            this.setState({name: jsonData.name});
        } catch (err) {
            console.log(err);
        }
    }
    
    render() {
        return (
            <div>{this.state.name}</div>
        );
    }
}