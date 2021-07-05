import firebase from 'firebase';
import Router from 'next/router';

export default function LogoutButton() {
    const logout = async () => {
      try {
        await firebase.auth().signOut()
        Router.push('/')
      } catch (error) {
        console.log(error.message)
      }
    }
    return <button onClick={logout} className='btn btn-danger'>ログアウト</button>
  }