import '../styles/BookItem.css';
import React from "react";
import PropTypes from 'prop-types';
class BookItem extends React.Component {
    static propTypes = {
        index: PropTypes.string,
        updateBook: PropTypes.func,
        removeBook: PropTypes.func,
        book_info: PropTypes.shape({
            author: PropTypes.string,
            name: PropTypes.string,
            image: PropTypes.string
        })
    }

    change_handler = event => {
        let updated_book = {...this.props.book_info, [event.currentTarget.name]: event.currentTarget.value};
        this.props.updateBook(this.props.index, updated_book);
    }
    
    change_image = () => {
        let new_image_url = prompt('Введите ссылку на обложку книги');
        if(!new_image_url) return;
        let updated_book = {...this.props.book_info, image: new_image_url};
        this.props.updateBook(this.props.index, updated_book);
    }
    
    render(){
        return (
        <li className="book_item">
            <div onClick={this.change_image} className="image">
                <div className="image_text">Заменить</div>
                <img src={this.props.book_info.image} alt="Book" width="145" height="205"/>
            </div>
            <div className="about">
                <div className="about-inner">
                    <label>Название</label>
                    <input name="name" value={this.props.book_info.name} onChange={this.change_handler}></input>
                    <label>Автор</label>
                    <input name="author" value={this.props.book_info.author} onChange={this.change_handler}></input>
                    <div className="submit_btn">
                        <button onClick={()=> this.props.removeBook(this.props.index)}>Удалить книгу</button>
                    </div>
                </div>
            </div>
        </li>
        )
    }
}

export default BookItem;