import './index.scss';
import Modal from 'react-bootstrap/Modal';
import {useState} from 'react';

export default function AddCriteriaModal({modalShow, hideModal, data, addNewCriteria}) {
    const [selectProduct, setSelectedProduct] = useState(false);
    
    const uniqProduct = data.criteria.reduce((names, {product}) => {
        if(!names.includes(product)) {
            names.push(product);
        }
        return names;
    }, []);

    const handleNewProduct = () => {
        hideModal();console.log(selectProduct);
        return addNewCriteria(selectProduct)
    }

    const addNew = () => {
        return setSelectedProduct(() => ({
            name: '',
            from: 0,
            to: 0+0.01,
            criterion: '',
            percentage: 0
        }));
    }

    const changeSelected = (e) => {
        const groupOfSelected = data.criteria.filter(({product}) => product === e.target.value);
        const lastOfgroup = groupOfSelected[groupOfSelected.length-1];
        return setSelectedProduct(() => ({
            ...lastOfgroup,
            from: lastOfgroup.to + 0.01,
            to: lastOfgroup.to + 0.02,
        }));
    }

    const updateSelected = (update) => {
        console.log(update);
        return setSelectedProduct((prev) => ({
            ...prev,
            ...update
        }))
    }

    const isNewProduct = selectProduct.from === 0;
    return (
        <Modal
        show={modalShow}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="add-modal"
      >
        <Modal.Header>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new product
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
            {!selectProduct && <>
                <label>Choose product:
                    <select onChange={changeSelected}>
                        <option>Select...</option>
                        {uniqProduct.map((name) => {
                            return (
                                <option key={name} value={name}>{name}</option>
                            )
                        })}
                    </select>
                </label>
                <br></br>
            <button onClick={addNew}>Add new</button>
            </>}
            {selectProduct && !isNewProduct && <div className="group-update">
                Product: {selectProduct.product} <br></br>
                Threshold from: {selectProduct.from} <br></br>
                <label>
                    Threshold to: 
                    <input type="number"
                        onKeyDown={() => false}
                        onChange={(e) => updateSelected({to: Number(e.target.value)})}
                        min={selectProduct.from} 
                        value={selectProduct.to}
                        step={0.01}></input>
                </label><br></br>
                Criteria: {selectProduct.criterion} <br></br>
                <label>
                    Percentage: 
                    <input type="number"
                        onKeyDown={() => false}
                        onChange={(e) => updateSelected({percentage: Number(e.target.value)})}
                        min={0} max={100}
                        value={selectProduct.percentage}
                        step={1}></input>
                    {selectProduct.percentage===100 && <span className='error'>Warning</span>}
                </label><br></br>
            </div>}

            {selectProduct && isNewProduct && <div className="group-update">
                <label>
                    Product:
                    <input type="text"
                        onChange={(e) => updateSelected({product: e.target.value})}
                        value={selectProduct.product || ''}></input>
                </label><br></br>
                Threshold from: {selectProduct.from} <br></br>
                <label>
                    Threshold to: 
                    <input type="number"
                        onKeyDown={() => false}
                        onChange={(e) => updateSelected({to: Number(e.target.value)})}
                        min={selectProduct.from+0.01} 
                        value={selectProduct.to}
                        step={0.01}></input>
                </label><br></br>
                <label>
                    Criteria:
                    <input type="text"
                        onChange={(e) => updateSelected({criterion: e.target.value})}
                        value={selectProduct.criterion}></input>
                </label><br></br>
                <label>
                    Percentage: 
                    <input type="number"
                        onKeyDown={() => false}
                        onChange={(e) => updateSelected({percentage: Number(e.target.value)})}
                        min={0} max={100}
                        value={selectProduct.percentage}
                        step={1}></input>
                    {selectProduct.percentage===100 && <span className='error'>Warning</span>}
                </label><br></br>
            </div>}
        </Modal.Body>
        <Modal.Footer>
          <button onClick={handleNewProduct}>Add</button>
        </Modal.Footer>
      </Modal>
    )
}