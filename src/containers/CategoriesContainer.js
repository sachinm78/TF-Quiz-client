import React, { Component } from 'react'
// import { connect } from 'react-redux'

export default class CategoriesContainer extends Component {

    // state = {
    //     categories: []
    // }

    // componentDidMount() {
    //     fetch('http://localhost:3001')
    //         .then(res => res.json())
    //         .then(categories => this.setState({ categories }))
    // }

    render() {
        // if (categories.length === 0) {
        return (
            <div className = 'studyComponent'>
                <h1>Select a category from the List.</h1>   
            </div>
        )
        // }
          
    }
}

// const mapStateToProps = state => {
//     return {
//         categories: state.categories
//     }
// }

// export default connect(mapStateToProps)(CategoriesContainer)