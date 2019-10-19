import React from "react";
import Axios from "axios";

export default class BooksAdmin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            books: []
        }
    }

    loadBooks = () => {
        Axios.get(`${process.env.REACT_APP_API_URL}/books`)
        .then(response => {
            console.log(response)
            this.setState({books: response.data})
        })
    }

    componentDidMount() {
        this.loadBooks()
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.books.map(b => <li>{b.title}</li>)}
                </ul>
            </div>
        );
    }
}