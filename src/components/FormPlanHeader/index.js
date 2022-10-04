import {useState} from 'react';
import './index.scss';
import { gearIcon, plusIcon } from '../../icons';
import AddCriteriaModal from '../AddCriteriaModal';

export default function FormPlanHeader({addNewCriteria, data}) {
    const [modalShow, setModalShow] = useState(false);

    const hideModal = () => {
        return setModalShow(false);
    }
    return (
        <>
        <div className="form form-plan-header">
            <div>
                <span className="title-header">Revenue share values</span>
                <span className="mixed-header">
                    {gearIcon}
                    Mixed
                </span>
            </div>
            <button className="add-button" onClick={() => setModalShow(!modalShow)}>{plusIcon}</button>
        </div>
        {
             modalShow && <AddCriteriaModal addNewCriteria={addNewCriteria} modalShow={modalShow} hideModal={hideModal} data={data}/>
        }
        </>
    )
}