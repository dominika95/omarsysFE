import './index.scss';
import Table from 'react-bootstrap/Table';
import { dashIcon } from '../../icons';

const heading = ['Product', 'Threshold from', 'Threshold to', 'Criteria', 'Percentage', ''];

export default function FormPlan({data, deleteRow}) {
    return (
        <div className="form form-plan">
            <Table responsive striped>
                <thead>
                    <tr>
                    {heading.map((name, index) => (
                        <th key={index}>{name}</th>
                    ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map(({product, from, to, criterion, percentage}, index) => (
                        <tr key={index}>
                            <td>{product}</td>
                            <td>€{from}</td>
                            <td>€{to}</td>
                            <td>{criterion}</td>
                            <td>{percentage}%</td>
                            {data[index+1]?.product !== product ? <td className='button-row'>
                                <button className="delete-button" onClick={() => deleteRow(index)}>{dashIcon}</button>
                            </td> : <td></td>}
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    )
}