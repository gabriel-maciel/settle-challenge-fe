import React, { useState } from 'react';
import PairRatesList from './PairRatesList';
import Summary from './Summary';
import ratesApi from '../api/ratesApi';
import './RateForm.css';

const RateForm = ({ onRateAdd }) => {

    const [selectedPair, setSelectedPair] = useState({ pair: 'Select pair', rate: '0.00' })

    const onPairSelect = pair => {
        console.log(pair);
        setSelectedPair(pair)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const fee = formData.get('fee');

        const request = buildAddRateWithFeeRequest(fee);
        const response = await ratesApi.post('/addRateWithFees', request);
        onRateAdd(response.data);
    }

    const buildAddRateWithFeeRequest = fee => {
        const feeAmount = selectedPair.rate * fee / 100;
        const rateWithFee = selectedPair.rate - feeAmount;

        const request = {
            pair: selectedPair.pair,
            originalRate: selectedPair.rate,
            fee,
            feeAmount,
            rateWithFee
        }
        return request;
    }

    return (
        <div className='RateForm'>
            <PairRatesList onPairSelect={onPairSelect} />
            <Summary pair={selectedPair} handleSubmit={handleSubmit} />
        </div>
    )
}

export default RateForm;