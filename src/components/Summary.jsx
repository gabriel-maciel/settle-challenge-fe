import React, { useState } from 'react'
import './Summary.css';

const Summary = ({ pair, handleSubmit }) => {

    const [feeAmount, setFeeAmount] = useState('0.00');
    const [rateWithFee, setRateWithFee] = useState('0.00');

    const onFeeChange = (e) => {
        const fee = e.target.value;
        const feeAmount = pair.rate * fee / 100;
        const rateWithFee = pair.rate - feeAmount;

        setFeeAmount(feeAmount);
        setRateWithFee(rateWithFee);
    }

    return (
        <div className='Summary'>
            <form onSubmit={handleSubmit} className="ui equal width form">
                <div className="fields">
                    <div className="field">
                        <label>Pair</label>
                        <div className='ui disabled input'>
                            <input placeholder={pair.pair} type="text" readOnly></input>
                        </div>
                    </div>
                    <div className="field">
                        <label>Original Rate</label>
                        <div className='ui disabled input'>
                            <input placeholder={pair.rate} type="text" readOnly></input>
                        </div>
                    </div>
                </div>
                <div className="fields">
                    <div className="field">
                        <label>Fee</label>
                        <input onChange={onFeeChange} name="fee" type="text"></input>
                    </div>
                    <div className="field">
                        <label>Fee amount</label>
                        <div className='ui disabled input'>
                            <input placeholder={feeAmount} type="text" readOnly></input>
                        </div>
                    </div>
                    <div className="field">
                        <label>Rate with Fee aplied</label>
                        <div className='ui disabled input'>
                            <input placeholder={rateWithFee} type="text" readOnly></input>
                        </div>
                    </div>
                </div>
                <button className='ui primary basic button'>Add Fee</button>
            </form>
        </div>
    )
}

export default Summary;
