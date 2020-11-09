import React from 'react';

const RatesTable = ({ rates }) => {

    const renderTbodyRows = () => {
        return rates.map((r) => {
            return (
                <tr key={r._id}>
                    <td>{r.pair}</td>
                    <td>{parse(r.originalRate)}</td>
                    <td>{parse(r.fee)}</td>
                    <td>{parse(r.feeAmount)}</td>
                    <td>{parse(r.rateWithFee)}</td>
                </tr>
            )
        })
    }

    const parse = (s) => {
        return s.toString().match(/[0-9]+\.[0-9]{2}/g);
    }


    return (
        <div className='ui container'>
            <table className='ui celled table'>
                <thead>
                    <tr><th>Pair</th>
                        <th>Original rate</th>
                        <th>Fee %</th>
                        <th>Fee amount</th>
                        <th>Rate witk mark-up fee</th>
                    </tr></thead>
                <tbody>
                    {renderTbodyRows()}
                </tbody>
            </table>
        </div>
    )
}

export default RatesTable;