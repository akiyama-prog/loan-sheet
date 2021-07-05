import Header from '../components/Head'
import Router from 'next/router';
import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'
import { useEffect,useReducer } from 'react';
import { db,auth } from '../lib/db'
import LogoutButton from '../components/LogoutButton'

export default function admin() {
    useEffect(() => {
        let unsubscribe = auth.onAuthStateChanged((user) => {
            if (user.uid != 'Qr6y16tydjPBnSwwfIR4t6ebVcD3'){
                Router.push('/entry')
            }
            unsubscribe();//登録解除
        })
    },[])
    return (
        <div>
        <Header title='管理者ページ'></Header>
        <div className="container">
            <div className="text-center">
            <h1 className="pt-4 pb-4">ローン相談表登録者一覧</h1>
            </div>
            <AdminIndex />
        <div className="d-grid"><LogoutButton /></div>
        </div>
        </div>
    )
}

function AdminIndex() {

    const initialState = [];//stateの初期値
    //stateを更新するための関数。stateとactionを受け取る。actionのtypeによってstateの更新方法を変える。今回はADDのみ。
    const reducer = (state, action) => {
        switch (action.type) {
          case "ADD":
            return [
              ...state,
                {
                    id:action.info.id,
                    name: action.info.name,
                    email: action.info.email,
                    creationDate:action.info.creationDate
                }
            ];
        }
      };

        const [customers, dispatch] = useReducer(reducer, initialState);
    useEffect(() => {
        db.collection("customersIndex").get().then(query => {
            query.forEach((doc) => {
                let data = doc.data();
                //reducerを実行するための呼び出し関数
                dispatch({type: 'ADD', info: {id: doc.id, email:data.email,name: data.name,creationDate:data.creationDate}})
            });
        })
        .catch((error)=>{
            console.log(`データの取得に失敗しました (${error})`);
        });
    }, [])
    return (
        <div>
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                    <th>氏名</th>
                    <th>emailアドレス</th>
                    <th>登録日</th>
                    </tr>
                </thead>
                <tbody>
                    {customers.map(function (customer) {
                        return (
                            <tr name={customer.email} key={customer.email}>
                                <td><Link href="customer/[id]" as={`customer/${customer.id}`}>{customer.name}</Link></td>
                                <td>{customer.email}</td>
                                <td>{customer.creationDate}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}