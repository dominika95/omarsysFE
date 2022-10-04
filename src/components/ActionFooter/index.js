import './index.scss';
import axios from 'axios';

const fakeUrl = 'url';

export default function ActionFooter({deleteAll, data}) {
    const sendData = () => {
        const jsonData = JSON.stringify(data);
        axios.post(fakeUrl, jsonData).then((res) => {
            console.log(res);
        });
    }
    return (
        <div className="action-footer">
            <button className="delete" onClick={deleteAll}>Delete</button>
            <button className="save" onClick={sendData}>Save</button>
        </div>
    )
}