import React, { useState, useEffect } from 'react';
import ratesApi from '../api/ratesApi';
import './PairRatesList.css';

const PairRatesList = ({ onPairSelect }) => {

    const [pairRates, setPairRates] = useState([]);

    useEffect(() => {
        const fetchPairRates = async () => {
            const response = await ratesApi.post('/getRates');
            console.log(response);
            setPairRates(response.data.pairs);
        };
        fetchPairRates();
    }, [])

    const renderPairRates = () => {
        return pairRates.map((p) => {
            return (
                <div onClick={() => onPairSelect(p)} className='item' key={p.pair}>
                    <div className="content">
                        <p className="header">{p.pair}</p>
                        <div className="description">{p.rate}</div>
                    </div>
                </div>
            )
        }
        )
    }

    return (
        <div className='PairRatesList'>
            <h3>Select a pair rate </h3>
            <div className="ui relaxed divided list">
                {renderPairRates()}
            </div>
        </div>
    )
}

export default PairRatesList;
