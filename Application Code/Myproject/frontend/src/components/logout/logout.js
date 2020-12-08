import React,{useEffect} from 'react';
import {useHistory} from 'react-router-dom';

const Logout = (props) => {
	const history = useHistory();
	useEffect(() => {
		// localStorage.removeItem('token');
		// localStorage.removeItem('user');
		// props.setLoggedin(false)
		console.log('hello')
		history.replace('/login');
	},[])
	return <div></div>;
}

export default Logout;