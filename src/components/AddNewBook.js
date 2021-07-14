import '../styles/AddNewBook.css';
import React, { useState }from "react";
import PropTypes from 'prop-types';

const AddNewBook = props => {
    const [image, setImage] = useState(null);
    const [name, setName] = useState(null);
    const [author, setAuthor] = useState(null);

    const update_image = () => {
        let new_image_url = prompt('Введите ссылку на обложку книги');
        if(new_image_url)
            setImage(new_image_url);
    }

    const add_new_book = (event) =>{
        event.preventDefault();
        let key = `book${Date.now()}`;
        props.updateBook(key, {
            name,
            author,
            image: image ? image : '/images/book_default.jpg'
        });
        event.currentTarget.reset()
    }

    return (
        <React.Fragment>
            <form className="book_item" onSubmit={add_new_book}>
                {!!image ? (
                    <div className="image">
                        <div className="image_text">Заменить</div>
                        <img onClick={update_image} src={image} width="145" height="205" alt="Book"/>
                    </div>)
                        :(
                    <div className="image">
                        <button onClick={update_image}>Загрузить обложку</button>
                    </div>)
                    }            
                
                <div className="about">
                <div className="about-inner">
                        <label>Название</label>
                        <input 
                            name="name" 
                            placeholder="Укажите название"
                            onChange={event => setName(event.currentTarget.value)} required></input>
                        <label>Автор</label>
                        <input 
                            name="author" 
                            placeholder="Укажите автора"
                            onChange={event => setAuthor(event.currentTarget.value)} required></input>
                        <div className="submit_btn">
                            <button type="submit">Добавить книгу</button>
                        </div>
                    </div>
                </div>
            </form>

        </React.Fragment>
        )
}

AddNewBook.propTypes = {
    updateBook: PropTypes.func
}

export default AddNewBook;