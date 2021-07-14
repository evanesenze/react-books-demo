import '../styles/App.css';
import React from 'react';
import BookItem from './BookItem';
import AddNewBook from './AddNewBook';

class App extends React.Component {
    state = {
        books: {}
    }

    componentDidMount = () => {
        const saved_books = localStorage.getItem('books');
        if(saved_books) this.setState({books: JSON.parse(saved_books)})
    }

    updateBook = (key, newValue) => {
        const books = {...this.state.books};
        books[key] = newValue;
        this.setState({books})
    }

    removeBook = (key) => {
        const books = {...this.state.books};
        delete books[key];
        this.setState({books})
    }

    componentDidUpdate = () => {
        localStorage.setItem('books', JSON.stringify(this.state.books));
    }

    render(){
        return (
            <div className="wrapper">
                <div>
                    <ul>
                        {Object.keys(this.state.books).map(key => <BookItem 
                            key={key} 
                            index={key} 
                            updateBook={this.updateBook}
                            removeBook={this.removeBook}
                            book_info={this.state.books[key]}></BookItem>)}
                    </ul>
                    <AddNewBook
                            updateBook={this.updateBook}
                    ></AddNewBook>
                </div>
            </div>
        )
    }    
}

export default App;
