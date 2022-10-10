import React, { Component } from 'react';

import { WithStyles } from '@material-ui/core';

import { List, ListItem, Container } from '@material-ui/core';

import BookListItem from "./BookListItem";

// import List from '@material-ui/core/List';
// import ListItem from '@material-ui/core/ListItem';



class BookList extends Component {

    render() {

        //const books = this.props.books;
        const { books } = this.props; // 구조분해할당 문법
        const booksItems = books.map( book => {
            return (
                // 리스트의 고유 key 값 반영
                <ListItem key={ book.ISBN } >
                    <BookListItem book={ book } />
                </ListItem>
            );
        });

        return (
            <Container maxWidth='sm'> { /* List를 Container 로 감싸서 maxWidth='sm' 중앙정렬 */}
                <List>
                    { booksItems }                               
                </List>
            </Container>
        );
    }

}

export default BookList;