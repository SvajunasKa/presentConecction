import React from 'react'

class Table extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body:''
        }
    }

    render(){
        const {title, body} = this.state;
        const elements = this.props.data;
        console.log(this.state)
        return (
            <div>

            </div>
        )
    }
}
export default Table