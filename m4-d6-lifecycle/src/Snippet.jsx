import React from 'react'

class Snippet extends React.Component {

    // constructor(props) {
    //     super(props)
    //     console.log("Snippet mounting!")
    // }

    componentWillUnmount = () => {
        console.log("Snippet going away!")
    }

    render() {
        return (
            <p>
                SNIPPET COMPONENT, THE TITLE IS {this.props.title}
            </p >
        )
    }
}

export default Snippet