import React, { useState } from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'
import Footer from '../Footer';
import '../css/services/creditCard.css';



function CreditCard () {
   
        const [number, setNumber] = useState('');
        const [name, setName] = useState('');
        const [expiry, setExpiry] = useState('');
        const [cvc, setCvc] = useState('');
        const [focus, setFocus] = useState('');
        return (
            <>
                <div className="col-lg-12 mb-12">

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Credit Card Animation</h6>
                    </div>
                    <div className="card-body">

                <Cards 
                    number ={ number}
                    name = { name }
                    expiry = { expiry }
                    cvc ={ cvc }
                    focused = { focus }
                />

                <br /> <br />

                <form className="center_div">
                    <input 
                        type="tel"
                        name="number"
                        placeholder="Card Number"
                        value={number}
                        onChange={e => setNumber(e.target.value)}
                        onFocus={ e=> setFocus(e.target.name) }
                    />
                     <input 
                        type="text"
                        name="name"
                        placeholder="Card Holder Name"
                        value={name}
                        onChange={e => setName(e.target.value)}
                        onFocus={ e=> setFocus(e.target.name) }
                    />
                     <input 
                        type="text"
                        name="expiry"
                        placeholder="Card Expiry MM/YY"
                        value={expiry}
                        onChange={e => setExpiry(e.target.value)}
                        onFocus={ e=> setFocus(e.target.name) }
                    />
                     <input 
                        type="tel"
                        name="cvc"
                        placeholder="CVC"
                        value={cvc}
                        onChange={e => setCvc(e.target.value)}
                        onFocus={ e=> setFocus(e.target.name) }
                    />
                </form>

                    </div>
                </div>

                <div className="card shadow mb-4">
                    <div className="card-header py-3">
                        <h6 className="m-0 font-weight-bold text-primary">Credit Card Animation Info</h6>
                    </div>
                    <div className="card-body">

                    <p style={{fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> Change The data in form Input and the changes will transfomed on the card animation. </p> 

                    <p style={{fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> start Card Number with 55 and will represent its corresponding company.
                    </p>

                    <p style={{fontSize: "20px", marginBottom: "1%" }}><i className="fas fa-chevron-right"></i> this is Just Animation, Do Not Inter your real credit card data.
                    </p>

                    </div>
                </div>


                </div>

                <Footer />
            </>
        );

    }



export default CreditCard;
