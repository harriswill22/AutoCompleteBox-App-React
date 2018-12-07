import React from 'react';
class AutoCompleteText extends React.Component {
    constructor(props){
        super(props)
        this.items =[
            'bike',
            'bike',
            'bike',
            'bike',
        ];
        this.state = {  
            suggestions:[], 
        };
    }


_OnTextChanged = (e) =>{
    const value = e.target.value;
    let suggestions =[];
    if(value.length > 0){
    const regex = new RegExp(`^${value}`, 'i');
    suggestions = this.items.sort().filter(v =>v.test(regex));
    }
    this.setState(() => ({suggestions}));
}

renderSuggestions () {
    const {suggestions} = this.state;
    if (suggestions.length === 0){
        return null;
    }
}

    render() { 
        return ( <div>
            <input onChange={this._OnTextChanged}type="text"/>
            <ul>
            {this.items.map((item)=> <li>{item}</li>)}
            </ul>
            </div> );
    }
}

export default AutoCompleteText;