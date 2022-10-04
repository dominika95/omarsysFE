import './index.scss';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FormName() {
    return (
        <div className="form form-name">
            <Container>
                <Row as="label">
                    <Col as="span" md={3} sm={12}>Name*</Col>
                    <Col as="input" md={9} sm={12} type="text"/>
                </Row>

                <Row as="label">
                    <Col as="span" md={3} sm={12}>Prefemed</Col>
                    <Col as="input" md={9} sm={12} type="checkbox"/>
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