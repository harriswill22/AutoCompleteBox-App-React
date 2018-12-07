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
            text: '',

        };
    }


_OnTextChanged = (e) =>{
    const value = e.target.value;
    let suggestions =[];
    if(value.length > 0){
    const regex = new RegExp(`^${value}`, 'i');
    suggestions = this.items.sort().filter(v =>regex.test(v));
    }
    this.setState(() => ({suggestions, text :value}));
}

_suggestionSelected (value) {
    this.setState(()=>({
        text: value,
        suggestions: []
    }))
}



renderSuggestions () {
    const {suggestions} = this.state;
    if (suggestions.length === 0){
        return null;
    }
    return(
    <ul>
    {suggestions.map((item)=> <li onClick={()=> this._suggestionSelected(item)}>{item}</li>)}
    </ul>)
    
}

    render() { 
        const{text} = this.state;
        return ( <div>
            <input value={text} onChange={this._OnTextChanged}type="text"/>
            <ul>
            {this.renderSuggestions()}
            </ul>
            </div> );
    }
}

export default AutoCompleteText;