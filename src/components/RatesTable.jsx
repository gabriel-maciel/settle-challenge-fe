import React from 'react';

const RatesTable = ({ rates }) => {

    const renderTbodyRows = () => {
        return rates.map((r) => {
            return (
                <tr key={r._id}>
                    <td>{r.pair}</td>
                    <td>r.originalRate)</td>
                    <td>r.fee)</td>
                    <td>r.feeAmount</td>
                    <td>r.rateWithFee</td>
                </tr>
            )
        })
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