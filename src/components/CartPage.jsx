import React from 'react'
import {Row, Col, Table, Button} from 'react-bootstrap'
import { app } from '../firebaseInit'
import { getDatabase, ref, onValue, remove } from 'firebase/database'
import { useState } from 'react'
import { useEffect } from 'react'
import Book from './Book'

const CartPage = () => {
    const uid=sessionStorage.getItem('uid');
    const db = getDatabase(app);
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    const getBooks = () => {
        setLoading(true);
        onValue(ref(db, `cart/${uid}`), (snapshot)=>{
            let rows=[];
            snapshot.forEach(row => {
                rows.push({ key: row.key, ...row.val() });
            })
            console.log(rows);
            setBooks(rows);
            setLoading(false);
        });
    }

    const onDelete = async (key) => {
        if (!window.confirm(key + '번 도서를 삭제하실래요?')) return;
        await remove(ref(db, `favorite/${uid}/${key}`));
        alert('장바구니 삭제 완료');
    }

    useEffect(()=>{
        getBooks();
    }, []);

    if(loading) return <h1>로딩중......</h1>
    return (
        <Row className='my-5'>
            <Col>
                <h1 className='text-center mb-5'>장바구니</h1>
                <Table>
                    <thead>
                        <tr>
                            <td>제목</td>
                            <td>가격</td>
                            <td>상세정보</td>
                            <td>삭제</td>
                        </tr>
                    </thead>
                    <tbody>
                        {books.map(book=>
                            <tr key={book.key}>
                                <td>{book.title}</td>
                                <td>{book.price}</td>
                                <td><Book book={book}/></td>
                                <td><Button onClick={() => onDelete(book.key)}
                                    className='btn-sm' variant="danger">삭제</Button></td>
                            </tr>
                        )}
                    </tbody>
                </Table>
            </Col>
        </Row>
    )
}

export default CartPage