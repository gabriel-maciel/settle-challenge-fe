import React, { useState, useEffect } from 'react';
import RateForm from './RateForm';
import RatesTable from './RatesTable';
import ratesApi from '../api/ratesApi';

const Rates = () => {
    const [rates, setRates] = useState([]);
    const [newRate, setNewRate] = useState({})

    useEffect(() => {
        const fetchRates = async () => {
            const response = await ratesApi.post('/getRatesWithFees');
            setRates(response.data);
        }
        fetchRates();
    }, [newRate])

    return (
        <div>
            <RatesTable rates={rates} />
            <div className="ui divider"></div>
            <RateForm onRateAdd={setNewRate} />
        </div>
    )
}

export default Rates;