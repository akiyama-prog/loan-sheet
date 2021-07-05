import Link from 'next/link'
import Header from '../components/Head'
import React, { useState, useEffect } from 'react';
import Router from 'next/router';
import { auth } from '../lib/db'
import 'bootstrap/dist/css/bootstrap.css'

function LoginForm() {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = async (e) => {
    e.preventDefault()
    try {
      const loginUser = await auth.signInWithEmailAndPassword(email, password)
      if (loginUser.user.uid == 'Qr6y16tydjPBnSwwfIR4t6ebVcD3') {
        Router.push('/admin-index');
      } else {
        Router.push('/entry')
      }
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <div>
      <div className="row justify-content-center">
        <div className="col-sm-6">
          <div className="card mb-5">
            <div className="card-header text-center">ログインフォーム</div>
            <div className="card-body">
              <form onSubmit={login}>
                <div className='form-group mb-3'>
                  <label htmlFor="email">メールアドレス</label>
                  <input type='email' name='email' onChange={(e) => setEmail(e.target.value)} className='form-control'/>
                </div>
                <div className='form-group mb-4'>
                  <label htmlFor="password">パスワード</label>
                  <input type='password' name='password' onChange={(e) => setPassword(e.target.value)} className='form-control'/>
                </div>
                <div className="d-grid pb-2">
                  <button type="submit" className='btn btn-success'>ログインする</button>
                </div>
              </form>
            </div>
          </div>
          <div className="text-center"><Link href="/signup"><a>会員登録がお済みでない方はこちら</a></Link></div>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
    useEffect(() => {
      auth.onAuthStateChanged((user) => {
        user && Router.push('/entry')
      })
    }, [])

  return (
    <div>
      <Header title='ログインページ'></Header>
      <div className="container">
        <div className="text-center">
          <h1 className="pt-4 pb-4"><Link href="/">ローン相談表</Link></h1>
        </div>
        <LoginForm />
      </div>
    </div>
  )
}
