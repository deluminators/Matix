import React,{useState} from 'react';
const Laptop = () => {
    const [name,setName] = useState('');
    const [quantity,setQuantity] = useState('');
    const [date,setDate] = useState('');
    return <><div className="cnt1">
    <div className="forms-cnt">
        <div className="signin-signup" >
            <form action="#" className="sign-in-form">
                <h2 className="title">Create Laptop</h2>
                <div className='row-contain'>
                    <div className="text">Laptop ID</div>
                <div className="input-field-1">
                    {/* <i className="fas fa-user"></i> */}
                    <input value={name} type="text" placeholder="Laptop ID" required onChange={e => setName(e.target.value)} />
                </div>
                 </div>
                 <div className='row-contain'>
                 <div className="text">Laptop Name</div>
                <div className="input-field-1">
                    {/* <i className="fas fa-lock"></i> */}
                    <input value={name} type="text" placeholder="Laptop Name" required onChange={e => setName(e.target.value)} />
                </div>
                 </div>
                 <div className='row-contain'>
                 <div className="text">Quantity</div>
                <div className="input-field-1">
                    {/* <i className="fas fa-lock"></i> */}
                    <input value={quantity} type="number" placeholder="Quantity" required onChange={e => setQuantity(e.target.value)} />
                </div>
                 </div>
                 <div className='row-contain'>
                 <div className="text">Deadline</div>
                <div className="input-field-1">
                    {/* <i className="fas fa-lock"></i> */}
                    <input value={date} type="date" required onChange={e => setDate(e.target.value)} />
                </div>
                 </div>
                 <div className='row-cnt'>
                 <button type="submit"  className="btn solid" style={{marginRight:'10px'}}>Check Availability</button>
                <button disabled={true} type="submit" className="btn solid">Create</button>
                </div>
         
            </form>
            <form action="#" className="sign-up-form">
                <h2 className="title">Delete Laptop</h2>
                <div className='row-contain'>
                    <div className="text">Laptop ID</div>
                <div className="input-field-1">
                    {/* <i className="fas fa-user"></i> */}
                    <input value={name} type="text" placeholder="Laptop ID" required onChange={e => setName(e.target.value)} />
                </div>
                 </div>
                 <div className='row-contain'>
                    <div className="text">Confirm ID</div>
                <div className="input-field-1">
                    {/* <i className="fas fa-user"></i> */}
                    <input value={name} type="text" placeholder="Enter Laptop ID again" required onChange={e => setName(e.target.value)} />
                </div>
                 </div>
                <button type="submit" className="btn" value="Sign up">Delete</button>
            </form>
        </div>
    </div>

    <div className="panels-cnt" style={{position:'relative'}}>
        <div className="panel left-panel" style={{paddingRight:'28%'}}>
            <div className="content" style={{color:'black'}}>
                <h3>Delete Laptop</h3>
                <p>
                 Want to delete an Laptop! Click here to proceed.
                </p>
                <button className="btn transparent" id="sign-up-btn" onClick={() => {console.log('hello');const cnt = document.querySelector(".cnt1");cnt.classList.add("sign-up-mode");}}>Delete Laptop</button>
            </div>
            {/* <img src={logo} style={{width:'40%'}} className="image" alt="" /> */}
        </div>
        <div className="panel right-panel">
            <div className="content" style={{color:'black'}}>
                <h3>Create Laptop</h3>
                <p>
                    Want to create an Laptop! Click here to proceed.
                </p>
                <button className="btn transparent" id="sign-in-btn" onClick={() => {console.log('hello1');const cnt = document.querySelector(".cnt1");cnt.classList.remove("sign-up-mode");}}>Create Laptop</button>
            </div>
            {/* <img src={require('../../logo.svg')} className="image" alt="" /> */}
        </div>
    </div>
</div></>
}

export default Laptop;