import React,{useState} from 'react';
import logo from './image.png';
import axios from 'axios';
import {useHistory} from 'react-router-dom'
const Login = (props) => {
    const [name,setName] = useState('');
    const [password,setPassword] = useState('');
    const history = useHistory();
    const clickhandler = async (e) => {
        e.preventDefault()
        console.log(name,password);
        try{
             const res = await axios.post('http://127.0.0.1:8000/login/',{username:name,password:password});
             console.log(res.data)
             if(res.data.token){
             
             console.log("HEELLLO")
             localStorage.setItem('token',res.data.token);
             localStorage.setItem('user',name);
             props.setLoggedin(true)
             history.replace('/dashboard')
         }
             else alert('Error!','Wrong password or username')

        }catch(er){alert('Wrong password or username')}

    }
    return <><div className="cnt">
    <div className="forms-cnt">
        <div className="signin-signup">
            <form action="#" className="sign-in-form">
                <h2 className="title">Login</h2>
                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input value={name} type="text" placeholder="Username" required onChange={e => setName(e.target.value)} />
                </div>
                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input value={password} type="password" placeholder="Password" required onChange={e => setPassword(e.target.value)} />
                </div>
                <button type="submit" value="Login" className="btn solid" onClick={clickhandler}>Login</button>
                {/* <a href="#" className="link" onclick="myPass()"
                    ><p>Forgot your password?</p></a
                > */}
                {/* <div id="myDIV" className="myDIV" style={{display:'none'}}>
                    <div>
                        <p className="myDIV-center">
                            Enter the email address associated with <b>this</b> account.
                        </p>
                    </div>
                    <div className="forget-field">
                        <i className="fas fa-envelope"></i>
                        <input type="email" placeholder="Email" required />
                    </div>
                </div> */}
            </form>
            {/* <form action="#" className="sign-up-form">
                <h2 className="title">Sign up</h2>
                <div className="input-field">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Username" required />
                </div>
                <div className="input-field">
                    <i className="fas fa-envelope"></i>
                    <input type="email" placeholder="Email" required />
                </div>
                <div className="input-field">
                    <i className="fas fa-lock"></i>
                    <input type="password" placeholder="Password" required />
                </div>
                <input type="submit" className="btn" value="Sign up" />
            </form> */}
        </div>
    </div>

    <div className="panels-cnt">
        <div className="panel left-panel">
            <div className="content">
            <div style={{display:'flex',flexDirection:'row',margin:'auto',justifyContent:'center'}}>
            <img src="https://deals.dell.com/Content/images/dell-logo.png" width="120" height="60" />
            <div>
                <h1 style={{alignSelf:'center',marginLeft:'20px',fontSize:'45px'}}>Dell India Pvt. Ltd.</h1> <p style={{alignSelf:'center',marginLeft:'20px'}} >
                Divyasree Greens, Ground Floor, #12/1, Challaghatta Village, Varthur Hobli, Bangalore - 560 071.
                </p></div></div>
                <p style={{fontSize:'28px',marginTop:'40px'}}>MANUFACTURING OPTIMISATION ENGINE (M.O.E)</p>
                {/* <button className="btn transparent" id="sign-up-btn">Sign up</button> */}
            </div>
            <img src={logo} style={{width:'40%'}} className="image" alt="" />
        </div>
        {/* <div className="panel right-panel">
            <div className="content">
                <h3>One of us ?</h3>
                <p>
                    Sign In now to witness the ongoing action and be a part of it!!
                </p>
                <button className="btn transparent" id="sign-in-btn">Sign in</button>
            </div>
            <img src={require('../../logo.svg')} className="image" alt="" />
        </div> */}
    </div>
</div></>
}

export default Login;