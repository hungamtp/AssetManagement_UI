
import './Assetedit.css'
import { ButtonToggle } from "reactstrap";
import { useHistory, useParams } from 'react-router-dom';
import { Button, Form, FormGroup, Label, Input, Col, CustomInput } from 'reactstrap';
import React, { useEffect, useState } from 'react';
import { get, put } from '../../httpHelper';


const EditAsset = () => {
  
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
    const [role, setRole] = useState("ROLE_ADMIN");
    

    const [valid, setValid] = useState("");
    const [validIDay, setValidIDay] = useState(true);
    const [isDisabled, setIsDisable] = useState(true);

    const [AssetInfo, setAssetInfo] = useState(null);


    let history = useHistory();
    let { assetCode } = useParams();

    useEffect(() => {
        //get asset info
        let Url = `asset/${assetCode}`;
        get(Url)
            .then((response) => setAssetInfo(response.data.data))
            .catch(err => console.log(err));
    }, [])

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
        console.log(AssetInfo);
        if (AssetInfo !== null) {
            setName(AssetInfo.assetName);
            setCategory(AssetInfo.category.categoryName);
            setSpecification(AssetInfo.specification);
            setInstalledDate(AssetInfo.installDate.slice(0,10));
            switch (AssetInfo.state) {
                case 1:
                    handleChangeAvailable();
                    break;
                case 2:
                    handleChangeNotAvailable();
                    break;
                case 4:
                    handleChangeWaitingforrecycling();
                    break;
                case 5:
                    handleChangeRecycled();
                    break;
                default:
                    break;
            }
        }
    }, [AssetInfo])

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
        let Url = "asset/edit/" + assetCode;
        let data = {
            name: Name, specification: Specification, installDate: InstalledDate, state: State
        }
        console.log(data);
        put(Url, data)
            .then(() => alert("Edit Aset Successfull!"))
            .catch(err => console.log(err));
    }

    const handleChangeAvailable = () => {
        setState("available");
        setCheckedAvailalbe(true);
        setCheckedNotAvailable(false);
        setCheckedRecycled(false);
        setCheckedWaitingforrecycling(false);
    };

    const handleChangeNotAvailable = () => {
        setState("not available");
        setCheckedNotAvailable(true);
        setCheckedAvailalbe(false);
        setCheckedRecycled(false);
        setCheckedWaitingforrecycling(false);
    };
    const handleChangeRecycled = () => {
        setState("recycled");
        setCheckedRecycled(true);
        setCheckedAvailalbe(false);
        setCheckedNotAvailable(false);
        setCheckedWaitingforrecycling(false);
    };
    const handleChangeWaitingforrecycling = () => {
        setState("waiting for recycling");
        setCheckedWaitingforrecycling(true);
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
                            <Input type="textarea" id="specification_textarea" name="text" style={{}} value={Specification}
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
                                    <Input type="radio" name="customRadio" value={"available"} 
                                    onClick={handleChangeAvailable} checked={checkedAvailalbe} />{' '}Available
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="radio" name="customRadio" value={"not available"} 
                                    onClick={handleChangeNotAvailable} checked={checkedNotAvailable} />{' '}Not available
                                </Label>
                            </FormGroup>
                            <FormGroup check disabled>
                                <Label check>
                                    <Input type="radio" name="customRadio" value={"waiting for recycling"} 
                                    onClick={handleChangeWaitingforrecycling} checked={checkedWaitingforrecycling}/>{' '}Waiting for recycling
                                </Label>
                            </FormGroup>
                            <FormGroup check disabled>
                                <Label check>
                                    <Input type="radio" name="customRadio" value={"recycled"} 
                                    onClick={handleChangeRecycled} checked={checkedWaitingforrecycling}/>{' '}Recycled
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
                <div id="Category_fs" className="Category">
                    <FormGroup row>
                        <Label htmlFor="category" sm={2}>Category</Label>
                        <Col sm={10}>
                            <Input type="select" name="select" value={Category} disabled>
                                {categoryList.map(item => <option value={item.categoryName}>{item.categoryName}</option>)}
                            </Input>
                        </Col>
                    </FormGroup>
                </div>
                <Button id="Cancel_btn_fte" className="Cancel_btn" outline color="secondary" onClick={handleCancelEdit}>Cancel</Button>
                <ButtonToggle id="Save_btn_fth" className="Save_btn btn-block" color="danger" onClick={handleEdit} disabled={isDisabled}> Save </ButtonToggle>
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
