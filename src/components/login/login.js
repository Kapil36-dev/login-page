import React,{useState} from 'react'
import './login.css'
import validateInfo from './validate';
import image from './login.png';
import {axioss} from '../axios/axios';

function Login() {
    const [click, setclick] = useState(false);/*change state for signup or signin*/
    const [Name, setName] = useState("");
    const [email,setemail]=useState("");
    const [password,setpassword]=useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const [error,seterror]= useState([])

    // for login 
    
    const submitlogin = (e)=>{
        e.preventDefault();
        const newuser ={email:email,password:password}
        // const data = validateforlog(email,password);
        // seterror(data);
        // if(!error){
        //     console.log('3');
        //     const newentry={email:email , password:password };
        //     setentry([...entry,newentry]);
        // }
        axioss({method:'post',url:'/login',data:newuser}).then((res)=>{
            console.log(res);
        }).catch((err)=>{console.log(err);})

        setemail("");
        setpassword("");
    }

    // // for new user
    const register=(e)=>{
        e.preventDefault();
        const data = validateInfo(email,Name,password,confirmpassword);
        seterror(data);
        if(!error){
            const newentry={email:email,password:password,cname:Name}
            axioss({method:'post',url:'/signup',data:newentry}).then((res)=>{
                console.log(res);
            }).catch((err)=>{
                console.log(err);
            })
        }
        setpassword('');
        setconfirmpassword("");
        setName('');
        setemail("");
    }

    // function for change signup and signin page
    const handleclick=()=>{
        setclick(!click);
    }
    const handlesignin=()=>{
        setclick(false)
    }

    return (
        <div className='login'>
            <div className={click?'container':'container onclick'}>
                <div className="left">
                    <div className="left-signup">
                        <h1>WELCOME TO</h1>
                        <h1>CODE AND BOTS</h1>
                        <div className="image">
                            <img src={image} alt="" />
                        </div>
                        <h3>LET'S GET STARTED</h3>
                    </div>
                    <div className="left-signin">
                        <div className="image">
                            <div>
                                <h1 className='left-heading'>WELCOME BACK</h1>
                            </div>
                            <img src="https://www.pngitem.com/pimgs/m/127-1272138_best-web-app-development-company-in-uk-india.png" alt="" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="right-signup">
                        <h1>CREATED AN ACCOUNT</h1>
                        <div className="form-panel">
                            <form action=""className='form' onSubmit={register}>
                                <div>
                                    <input type="text" placeholder='Student Name' value={Name} onChange={(e)=>setName(e.target.value)}/>
                                    {error.name && <p style={{color:"red",textAlign:'initial',fontSize:'12px'}}>{error.name}</p>}
                                </div>
                                <div>
                                    <input type="text" placeholder='Email Address' value={email} onChange={(e)=>setemail(e.target.value)}/>
                                    {error.email && <p style={{color:"red",textAlign:'initial',fontSize:'12px'}}>{error.email}</p>}
                                </div>
                                <div>
                                    <input type="" placeholder="Password" value={password} onChange={(e)=>setpassword(e.target.value)}/>
                                    {error.password && <p style={{color:"red",textAlign:'initial',fontSize:'12px'}}>{error.password}</p>}
                                </div>
                                <div>
                                    <input type="" placeholder="Confirm Password" value={confirmpassword} onChange={(e)=>setconfirmpassword(e.target.value)}/>
                                    {error.confirmpassword && <p style={{color:"red",textAlign:'initial' ,fontSize:'12px'}}>{error.confirmpassword}</p>}
                                </div>
                                <button class="btn">SIGN UP</button>
                                <h4><span>OR</span></h4>
                                <div className="icons">
                                    <div className='icon'>
                                        <i class="fab fa-google"></i>
                                    </div>
                                    <div className='icon'>
                                        <i class="fab fa-facebook-f"></i>
                                    </div>
                                    <div className='icon'>
                                        <i class="fab fa-twitter"></i>
                                    </div>
                                </div>
                                <p onClick={handlesignin}>already have a account?</p>
                                <h3 onClick={handleclick}>SIGN IN</h3>
                            </form>
                        </div>
                    </div>
                    <div className="right-signin">
                        <h1>LOGIN YOUR ACCOUNT</h1>
                        <div className="form-panel">
                            <form action="" className='form' onSubmit={submitlogin}>
                                <input type="text" placeholder='Email Address' value={email} onChange={(e)=>setemail(e.target.value)}/>
                                {error.email && <p>{error.email}</p>}
                                <input type="password" placeholder="Password" secureTextEntry={true} value={password} onChange={(e)=>setpassword(e.target.value)} />
                                <h5 >FORGET PASSWORD?</h5>
                                <button class="btn" type='submit'>SIGN IN</button>
                                <h4><span>OR</span></h4>
                                <div className="icons">
                                    <div className='icon'>
                                        <i class="fab fa-google"></i>
                                    </div>
                                    <div className='icon'>
                                        <i class="fab fa-facebook-f"></i>
                                    </div>
                                    <div className='icon'>
                                        <i class="fab fa-twitter"></i>
                                    </div>
                                </div>
                                <p >already have a account?</p>
                                <h3 onClick={handleclick}>SIGN UP</h3>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login