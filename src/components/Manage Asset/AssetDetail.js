import React, { Component } from 'react';
import { Container, Row, Col, Table, Alert } from 'reactstrap';
import { get } from '../../httpHelper';

export default class AssetDetail extends Component {
    constructor(props) {
        super(props);
        this.state = {
            asset: {},
            category: {},
            location: {},
            assignmentList: [],

            isFail: false,
            messageFail: ''
        }
    }

    componentDidMount() {
        let url = `asset/${this.props.id}`;
        get(url)
            .then((response) => {
                if (response.status === 200) {
                    if (response.data.successCode === 'ASSET_LOADED_SUCCESS') {
                        this.setState({
                            asset: response.data.data,
                            category: response.data.data.category,
                            location: response.data.data.location,
                            assignmentList: response.data.data.assignments
                        })
                    }
                }
            })
            .catch(() => {
                this.setState({
                    isFail: true,
                    messageFail: 'Fail to load asset info.'
                })
            })
    }

    render() {
        return (
            <div>
                {
                    this.state.isFail === true &&
                    <Alert color="danger">
                        {this.state.messageFail}
                    </Alert>
                }
                {  
                    this.state.isFail === false &&
                    <Container>
                        <Row xs="4" className="mb-4">
                            <Col>
                                Asset Code
                            </Col>
                            <Col xs="9">
                                {this.state.asset.assetCode}
                            </Col>
                        </Row>
                        <Row xs="4" className="mb-4">
                            <Col>
                                Asset Name
                            </Col>
                            <Col xs="9">
                                {this.state.asset.assetName}
                            </Col>
                        </Row>
                        <Row xs="4" className="mb-4">
                            <Col>
                                Category
                            </Col>
                            <Col xs="9">
                                {this.state.category.categoryName}
                            </Col>
                        </Row>
                        <Row xs="4" className="mb-4">
                            <Col>
                                Installed Date
                            </Col>
                            <Col xs="9">
                                {this.state.asset.installDate}
                            </Col>
                        </Row>
                        <Row xs="4" className="mb-4">
                            <Col>
                                State
                            </Col>
                            <Col xs="9">
                                {this.state.asset.state === 1 && <span>Available</span>}
                                {this.state.asset.state === 2 && <span>Not Available</span>}
                                {this.state.asset.state === 3 && <span>Assigned</span>}
                                {this.state.asset.state === 4 && <span>Waiting for recycling</span>}
                                {this.state.asset.state === 5 && <span>Recycled</span>}
                            </Col>
                        </Row>
                        <Row xs="4" className="mb-4">
                            <Col>
                                Location
                            </Col>
                            <Col xs="9">
                                {this.state.location.address}
                            </Col>
                        </Row>
                        <Row xs="4" className="mb-4">
                            <Col>
                                Specification
                            </Col>
                            <Col xs="9">
                                {this.state.asset.specification}
                            </Col>
                        </Row>
                        <Row xs="4" className="mb-4">
                            <Col>
                                History
                            </Col>
                            <Col xs="9">
                                {this.state.assignmentList.length === 0 && <span>No History</span>}
                                {this.state.assignmentList.length > 0 &&
                                    <Table hover>
                                        <thead>
                                            <tr>
                                                <th>Date</th>
                                                <th>Assigned to</th>
                                                <th>Assigned by</th>
                                                <th>Returned Date</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                this.state.assignmentList.map((assignment) => {
                                                    if (assignment.requests.length > 0) {
                                                        return (
                                                            <tr key={assignment.assignmentId}>
                                                                <td>{assignment.assignedDate.split('T')[0]}</td>
                                                                <td>{assignment.assignedTo.username}</td>
                                                                <td>{assignment.assignedBy.username}</td>
                                                                <td>
                                                                    {assignment.requests[0].returnedDate ? assignment.requests[0].returnedDate.split('T')[0] : "null"}
                                                                </td>
                                                            </tr>
                                                        )
                                                    }
                                                    else {
                                                        return (
                                                            <tr key={assignment.assignmentId}>
                                                                <td>{assignment.assignedDate.split('T')[0]}</td>
                                                                <td>{assignment.assignedTo.username}</td>
                                                                <td>{assignment.assignedBy.username}</td>
                                                                <td>not yet</td>
                                                            </tr>
                                                        )
                                                    }
                                                })
                                            }
                                        </tbody>
                                    </Table>}
                            </Col>
                        </Row>
                    </Container>
                }
            </div>
        )
    }
}
