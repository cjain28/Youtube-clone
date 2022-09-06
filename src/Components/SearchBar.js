import React from "react";

class SearchBar extends React.Component {
    state = { term: '' };

    onSubmitChange = (e) => {
        this.setState({term: e.target.value});
    };

    onFormSubmit = (e) =>{
        e.preventDefault();
        this.props.onTermSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar ui segment" style={{ marginTop: '10px' }}>
                <form onSubmit = {this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input
                            type="text"
                            value={this.state.term}
                            onChange={this.onSubmitChange}
                        />
                    </div>
                </form>
            </div>
        )
    };
}

export default SearchBar;