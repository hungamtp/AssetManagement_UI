
import Navbar from "../Navbar";
import Menu from "../Menu";
import * as business from "../../constants/Business";
import './Assetedit.css'
import axios from 'axios';
import { ButtonToggle } from "reactstrap";
import { useHistory, useParams } from 'react-router-dom';
import { useCookies } from "react-cookie";
import { Button, Form, FormGroup, Label, Input, Col, CustomInput } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { get, put } from '../../httpHelper';


const EditAsset = () => {
    const [id, setid] = useState("");
    const [Name, setName] = useState("");
    const [Category, setCategory] = useState("");
    const [Specification, setSpecification] = useState("");
    const [InstalledDate, setInstalledDate] = useState("");
    const [State, setState] = useState("");
    const [categoryList, setCategoryList] = useState([]);

    const [checkedAvailalbe, setCheckedAvailalbe] = useState(true);
    const [checkedNotAvailable, setCheckedNotAvailable] = useState(true);
    const [checkedWaitingforrecycling, setCheckedWaitingforrecycling] = useState(true);
    const [checkedRecycled, setCheckedRecycled] = useState(false);

    const [valid, setValid] = useState("");
    const [validIDay, setValidIDay] = useState(true);
    const [isDisabled, setIsDisable] = useState(true);

    let history = useHistory();

    useEffect(() => {
        //getCategoryList
        let Url = "category";
        get(Url)
            .then(response => setCategoryList(response.data.data))
            .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        //do something
    }, [valid])

    useEffect(() => {
        if (Name.length > 0 && Category.length > 0 && Specification.length > 0 &&
            InstalledDate.length > 0 && State.length > 0)
            setIsDisable(false)
        else setIsDisable(true);
    }, [Name, Category, Specification, InstalledDate, State])

    const handleValid = (mes, type) => {
        setValid(mes);
        if (!type)
            setValidIDay(false)
        else setValidIDay(true);
    }

    const handleEdit = () => {
        let Url = "asset/edit" + id;
        let data = {
            Name, Category, Specification, InstalledDate: InstalledDate + " 00:00", State
        }
        //console.log(data);
        put(Url, data)
            .then(() => alert("Edit Aset Successfull!"))
            .catch(err => console.log(err));
    }

    const handleChangeAvailable = () => {
        setState("available");
        setCheckedAvailalbe(checkedAvailalbe => !checkedAvailalbe);
        setCheckedNotAvailable(false);
        setCheckedRecycled(false);
        setCheckedWaitingforrecycling(false);
    };

    const handleChangeNotAvailable = () => {
        setState("Not Available");
        setCheckedNotAvailable(checkedNotAvailable => !checkedNotAvailable);
        setCheckedAvailalbe(false);
        setCheckedRecycled(false);
        setCheckedWaitingforrecycling(false);
    };
    const handleChangeRecycled = () => {
        setState("Recycled");
        setCheckedRecycled(checkedRecycled => !checkedRecycled);
        setCheckedAvailalbe(false);
        setCheckedNotAvailable(false);
        setCheckedWaitingforrecycling(false);
    };
    const handleChangeWaitingforrecycling = () => {
        setState("Waiting for recycling");
        setCheckedWaitingforrecycling(checkedWaitingforrecycling => !checkedWaitingforrecycling);
        setCheckedAvailalbe(false);
        setCheckedNotAvailable(false);
        setCheckedRecycled(false);
    };
    const handleCancelEdit = () => {
        //cancel
        history.push("/ManageAsset");
    }
    return (
        <div>
            <div id="Edit_Asset">
                <span>Edit Asset</span>
            </div>
            <div id="Form_fsc">
                <div id="Specification_fsd">
                    <FormGroup row>
                        <Label htmlFor="specification" sm={2}>Specific</Label>
                        <Col md={10}>
                            <Input type="textarea" id="text" name="text" style={{}} value={Specification}
                                onChange={(event) => setSpecification(event.target.value)} />
                        </Col>
                    </FormGroup>
                </div>
                <div id="State_fsh">
                    <FormGroup row>
                        <legend className="col-form-label col-sm-2" sm={2}>State</legend>
                        <Col sm={10} id="lb">
                            <FormGroup check>
                                <Label check >
                                    <Input type="radio" name="customRadio" value={checkedAvailalbe} onClick={handleChangeAvailable} />{' '}
                                    Available
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="customRadio" value={checkedNotAvailable} onClick={handleChangeNotAvailable} />{' '}
                                    Not available
                                </Label>
                            </FormGroup>
                            <FormGroup check disabled>
                                <Label check>
                                    <Input type="radio" name="customRadio" value={checkedWaitingforrecycling} onClick={handleChangeWaitingforrecycling} />{' '}
                                    Waiting for recycling
                                </Label>
                            </FormGroup>
                            <FormGroup check disabled>
                                <Label check>
                                    <Input type="radio" name="customRadio" value={checkedRecycled} onClick={handleChangeRecycled} />{' '}
                                    Recycled
                                </Label>
                            </FormGroup>
                        </Col>
                    </FormGroup>
                </div>
                <div id="Installed_Date">
                    <FormGroup row>
                        <Label htmlFor="date" sm={2}>Date</Label>
                        <Col sm={10}>
                            <Input className={!validIDay ? "red-input" : "input"}
                                value={InstalledDate}
                                type="date"
                                name="date"
                                placeholder="date placeholder"
                                onChange={({ target }) => setInstalledDate(target.value)} />
                        </Col>
                    </FormGroup>

                </div>
                <div id="Category_fs" class="Category">
                    <FormGroup row>
                        <Label htmlFor="category" sm={2}>Category</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" value={Category}
                                onChange={({ target }) => setCategory(target.value)}>
                                {categoryList.map(item => <option value={item.categoryName}>{item.categoryName}</option>)}

                            </Input>
                        </Col>
                    </FormGroup>
                </div>
                <div id="Cancel_btn_fte" class="Cancel_btn">
                    <div onclick="application.goToTargetView(event)" className="Cancel_btn">
                        <Button outline color="secondary" onClick={handleCancelEdit}>Cancel</Button>
                    </div>
                </div>
                <div id="Save_btn_fth" class="Save_btn">
                    <div className="Save_btn" onclick="application.goToTargetView(event)">
                        <ButtonToggle className=" btn-block" color="danger" onClick={handleEdit} disabled={isDisabled}> Save </ButtonToggle>
                    </div>
                </div>
                <div id="Name">
                    <Form>
                        <FormGroup row>
                            <Label htmlFor="name" sm={2}>Name </Label>
                            <Col sm={10}>
                                <Input type="text" name="name" value={Name}
                                    onChange={(event) => setName(event.target.value)} />
                            </Col>
                        </FormGroup>
                    </Form>
                </div>
            </div>
        </div>
    )
}
export default EditAsset;
