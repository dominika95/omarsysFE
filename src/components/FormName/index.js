import './index.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FormName({saveAction, data}) {
    const {name, prefemed} = data;

    // under onCLick can be action for send request with change name to server
    const submitData = (e) => {
        e.preventDefault();
        return saveAction(name, prefemed);
    }
    return (
        <div className="form form-name">
            <Container as='form' onSubmit={submitData}>
                <Row as="label">
                    <Col as="span" md={3} sm={12}>Name*</Col>
                    <Col as="input" md={9} sm={12} type="text" value={name} onChange={(e) => saveAction(e.target.value, prefemed)}/>
                </Row>

                <Row as="label">
                    <Col as="span" md={3} sm={12}>Prefemed</Col>
                    <Col as="input" md={9} sm={12} type="checkbox" checked={prefemed} onChange={() => saveAction(name, !prefemed)}/>
                </Row>

                <Row>
                    <Col as="button" md={{span:4, offset:3}} sm={12}>
                        Save & continue editing
                    </Col>
                </Row>
            </Container>
        </div>
    )
}