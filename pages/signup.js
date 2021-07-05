import React, { useState, useEffect } from 'react';
import 'firebase/auth'
import 'firebase/firestore'
import { auth } from '../lib/db'
import Router from 'next/router';
import Header from '../components/Head'
import 'bootstrap/dist/css/bootstrap.css'

const Signup = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMessage,setErrorMessage] = useState('')

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            user && Router.push('/')
        })
    }, [])
    //入力内容とエラーメッセージのセット
    const nameChange = e => {
        setName(e.target.value)
        setErrorMessage({ ...errorMessage, [e.target.name]: nameKanziValidation(e.target.value) })
    }
    const nameKanziValidation=(value)=> {
        const regex = /^[ぁ-んァ-ヶー一-龠]+$/
        if (!regex.test(value)) return '※正しい形式で入力してください'
        return '';
    }
    const emailChange = e => {
        setEmail(e.target.value)
        setErrorMessage({ ...errorMessage, [e.target.name]: emailValidation(e.target.value) })
    }
    const emailValidation=(value)=> {
        const regex = /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+$/
        if (!regex.test(value)) return '※正しい形式で入力してください'
        return '';
    }
    const pwChange = e => {
        setPassword(e.target.value)
        setErrorMessage({ ...errorMessage, [e.target.name]: pwValidation(e.target.value) })
    }
    const pwValidation = (value) => {
        const regex = /^(?=.*?[a-z])(?=.*?\d)[a-z\d]{8,15}$/i
        if (!regex.test(value)) return '※半角英字と半角数字それぞれ1文字以上含む8文字以上で設定してください'
        return '';
    }
    const createUser = async (e) => {
        e.preventDefault()
        try {
            await auth.createUserWithEmailAndPassword(email, password).then(() => {
                    let currentUser = auth.currentUser;
                    if (currentUser) {
                        currentUser.updateProfile({
                            displayName:name
                        }).then(() => {
                            Router.push('/')
                        })
                    }
            })
        } catch (err) {
            console.log(err.message)
        }
    }

    return (
        <div>
            <Header title='会員登録ページ'></Header>
            <div className="container">
                <h2>Signup</h2>
                <form onSubmit={createUser}>
                    <div className='form-group'>
                        <label htmlFor="name">氏名:</label>
                        <input type="text" name='name' onChange={nameChange} className='form-control' />
                        {errorMessage.name}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="email">メールアドレス:</label>
                        <input type='email' name='email' onChange={emailChange} className='form-control' />
                        {errorMessage.email}
                    </div>
                    <div className='form-group'>
                        <label htmlFor="password">パスワード:</label>
                        <input type='password' name='password' onChange={pwChange} className='form-control' placeholder='半角英字と半角数字それぞれ1文字以上含む8文字以上15字以下で設定してください' />
                        {errorMessage.password}
                    </div>
                    <button type="submit" className='btn btn-success' disabled={errorMessage.name || errorMessage.email || errorMessage.password}>add!</button>
                </form>
            </div>
        </div>
    )
}
export default Signup