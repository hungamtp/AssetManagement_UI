import React, { Component } from 'react'
import Navbar from "../Navbar";
import Menu from "../Menu";
import * as business from "../../constants/Business";
import './Assetedit.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ButtonToggle } from "reactstrap";
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap';


export default class Edit extends Component {
    render() {
        return (
            <div>
                <Navbar businessName=" Manage Asset > Edit Asset" />
                <Menu business={business.MANAGE_ASSET} />

                <div id="Edit_Asset">
                    <span>Edit Asset</span>
                </div>
                <div id="Form_fsc">
                    <div id="Specification_fsd">
                        <FormGroup row>
                            <Label for="exampleText" sm={2}>Specific</Label>
                            <Col md={10}>
                                <Input type="textarea" name="text" id="exampleText" />
                            </Col>                           
                        </FormGroup>                  
                        </div>
                    <div id="State_fsh">
                        <FormGroup  row>
                            <legend className="col-form-label col-sm-2"  sm={2}>State</legend>
                            <Col sm={10} id="lb">
                                <FormGroup check>
                                    <Label check >
                                        <Input type="radio" name="radio2" />{' '}
                                        Available
                                    </Label>
                                </FormGroup>
                                <FormGroup check>
                                    <Label check>
                                        <Input type="radio" name="radio2" />{' '}
                                        Not available
                                    </Label>
                                </FormGroup>
                                <FormGroup check disabled>
                                    <Label check>
                                        <Input type="radio" name="radio2" disabled />{' '}
                                        Waiting for recycling
                                    </Label>
                                </FormGroup>
                                <FormGroup check disabled>
                                    <Label check>
                                        <Input type="radio" name="radio2" disabled />{' '}
                                       Recycled
                                    </Label>
                                </FormGroup>
                            </Col>
                        </FormGroup>
                    </div>
                    <div id="Installed_Date">
                        <FormGroup row>
                            <Label sm={2}>Date</Label>
                            <Col sm={10}>
                                <Input
                                    type="date"
                                    name="date"
                                    id="exampleDate"
                                    placeholder="date placeholder" />
                            </Col>
                        </FormGroup>

                    </div>
                    <div id="Category_fs" class="Category">
                        <FormGroup row>
                            <Label sm={2}>Category</Label>
                            <Col sm={10}>
                                <Input type="select" name="select" >
                                    <option>Laptop</option>
                                    <option>Mouse</option>
                                    <option>PC</option>
                                    <option>USB</option>
                                    <option>Head</option>
                                </Input>
                            </Col>
                        </FormGroup>
                    </div>
                    <div onclick="application.goToTargetView(event)" id="Cancel_btn_fte" class="Cancel_btn">
                    <div onclick="application.goToTargetView(event)" className="Cancel_btn">
					<Button outline color="secondary">Cancel</Button>
					</div>                 
                    </div>
                    <div id="Save_btn_fth" class="Save_btn">
                    <div  className="Save_btn" onclick="application.goToTargetView(event)">
					<ButtonToggle className=" btn-block" color="danger" > Save </ButtonToggle>
					</div>
                    </div>
                    <div id="Name">
                        <Form>
                            <FormGroup row>
                                <Label for="exampleEmail2" sm={2}>Name </Label>
                                <Col sm={10}>
                                    <Input type="text" name="name" />
                                </Col>
                            </FormGroup>
                        </Form>
                    </div>
                </div>
            </div>
        )
    }
}
