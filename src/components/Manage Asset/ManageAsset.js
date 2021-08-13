import React, { Component } from 'react'
import Navbar from "../Navbar";
import Menu from "../Menu";
import * as business from "../../constants/Business";
import './Manageasset.css';
import {
	Table, Button, UncontrolledDropdown,
	DropdownToggle, DropdownMenu,
	Modal, ModalHeader, ModalBody, ModalFooter, Alert
}
	from "reactstrap";
import { post, get } from "../../httpHelper";
import { withRouter } from "react-router-dom";
import AssetDetail from './AssetDetail';

class ManageAsset extends Component {

	constructor(props) {
		super(props);
		this.state = {
			assetList: [],
			categoryList: [],
			pageList: [],

			sizeInPage: 3,
			currentPage: 1,

			sortField: "assetCode",
			sortType: "ASC",
			searchValue: "",

			available: true,
			notAvailable: true,
			assigned: true,
			waiting: false,
			recycled: false,
			allState: false,

			allCategory: true,
			selectedCategory: [],

			modal: false,
			assetId: '',

			isFail: false,
			messageFail: ''
		}
	}

	componentDidMount() {
		this.loadData();
		this.loadCategory();
		this.returnPageList();
	}

	returnStateList() {
		let stateList = [];
		if (this.state.allState === false) {
			if (this.state.available === true) {
				stateList.push(1);
			}
			if (this.state.notAvailable === true) {
				stateList.push(2);
			}
			if (this.state.assigned === true) {
				stateList.push(3);
			}
			if (this.state.waiting === true) {
				stateList.push(4);
			}
			if (this.state.recycled === true) {
				stateList.push(5);
			}
		}
		return stateList;
	}

	returnSelectedCategory() {
		let selectedCategory;
		if (this.state.allCategory === true) {
			selectedCategory = []
		}
		else {
			selectedCategory = this.state.selectedCategory;
		}
		return selectedCategory;
	}

	loadData() {
		let stateList = this.returnStateList();
		let selectedCategory = this.returnSelectedCategory();
		let url = `asset/filter-search-sort?page=${this.state.currentPage - 1}&size=${this.state.sizeInPage}`;
		let body = {
			states: stateList,
			categoriesCode: selectedCategory,
			sortField: this.state.sortField,
			sortType: this.state.sortType,
			searchKeyWord: this.state.searchValue
		}
		post(url, body)
			.then(response => {
				if (response.status === 200) {
					if (response.data.successCode === 'ASSET_LOADED_SUCCESS') {
						this.setState({
							assetList: response.data.data,
						})
					}
				}
			})
			.catch(() => {
				this.setState({
					isFail: true,
					messageFail: 'Fail to load asset.'
				})
			})
	}

	loadCategory() {
		let url = "category";
		get(url)
			.then(response => {
				if (response.status === 200) {
					if (response.data.successCode === 'CATEGORIES_LOADED_SUCCESS') {
						this.setState({
							categoryList: response.data.data,
						});
					}
				}
			})
			.catch(() => {
				this.setState({
					isFail: true,
					messageFail: 'Fail to load category.'
				})
			})
	}

	returnPageList() {
		let stateList = this.returnStateList();
		let selectedCategory = this.returnSelectedCategory();
		let url = 'asset/count/filter-search-sort';
		let body = {
			states: stateList,
			categoriesCode: selectedCategory,
			sortField: this.state.sortField,
			sortType: this.state.sortType,
			searchKeyWord: this.state.searchValue
		}
		post(url, body)
			.then(response => {
				if (response.status === 200) {
					if (response.data.successCode === 'ASSET_COUNT_SUCCESS') {
						let numberOfAssets = response.data.data.numberOfEntity;
						let page = [];
						if (numberOfAssets > this.state.sizeInPage) {
							let totalPage = Math.floor(numberOfAssets / this.state.sizeInPage);
							if (numberOfAssets % this.state.sizeInPage != 0) {
								totalPage++;
							}
							for (var i = 0; i < totalPage; i++) {
								page.push(i + 1);
							}
						}
						this.setState({ pageList: page });
					}
				}
			})
			.catch(() => {
				this.setState({
					isFail: true,
					messageFail: 'Fail to load pagination.'
				})
			})
	}

	filterState() {
		this.setState({ currentPage: 1 }, () => {
			this.loadData();
			this.returnPageList();
		})
	}

	search() {
		this.setState({ currentPage: 1 }, () => {
			this.loadData();
			this.returnPageList();
		})
	}

	sortByAssetCode() {
		this.setState({
			sortField: 'assetCode',
			sortType: this.state.sortType === 'ASC' ? 'DSC' : 'ASC'
		}, () => {
			this.loadData();
		})
	}

	sortByAssetName() {
		this.setState({
			sortField: 'assetName',
			sortType: this.state.sortType === 'ASC' ? 'DSC' : 'ASC'
		}, () => {
			this.loadData();
		})
	}

	sortByCategory() {
		this.setState({
			sortField: 'category',
			sortType: this.state.sortType === 'ASC' ? 'DSC' : 'ASC'
		}, () => {
			this.loadData();
		})
	}

	sortByState() {
		this.setState({
			sortField: 'state',
			sortType: this.state.sortType === 'ASC' ? 'DSC' : 'ASC'
		}, () => {
			this.loadData();
		})
	}

	changePage(page) {
		this.setState({ currentPage: page }, () => {
			this.loadData();
			this.returnPageList();
		})
	}

	handleSelectCategory(e) {
		let list = this.state.selectedCategory;
		if (e.target.checked) {
			if (list.indexOf(e.target.value) === -1) {
				list.push(e.target.value);
			}
		}
		else {
			let index = list.indexOf(e.target.value);
			if (index > -1) {
				list.splice(index, 1);
			}
		}
		this.setState({ selectedCategory: list })
	}

	filterCategory() {
		this.setState({ currentPage: 1 }, () => {
			this.loadData();
			this.returnPageList();
		})
	}

	toggleShowButton(assetCode) {
		this.setState({
			modal: !this.state.modal,
			assetId: assetCode
		})
	}

	toggleShow() {
		this.setState({
			modal: !this.state.modal,
			assetId: ''
		})
	}

	render() {
		return (
			<div>
				<Navbar businessName=" Manage Asset" />
				<Menu business={business.MANAGE_ASSET} />
				<div className="title">
					<b>Asset List</b>
				</div>
				<div className="filter">
					<div className="filter-state">
						<UncontrolledDropdown>
							<DropdownToggle caret>
								State
							</DropdownToggle>
							<DropdownMenu>
								<div>
									<input
										style={{ marginRight: '10px', marginLeft: '10px' }}
										type="checkbox"
										checked={this.state.allState === true}
										onChange={(e) => this.setState({ allState: e.target.checked })}
									/>
									All
								</div>
								<div>
									<input
										style={{ marginRight: '10px', marginLeft: '10px' }}
										type="checkbox"
										checked={this.state.assigned === true}
										onChange={(e) => this.setState({ assigned: e.target.checked })}
									/>
									Assigned
								</div>
								<div>
									<input
										style={{ marginRight: '10px', marginLeft: '10px' }}
										type="checkbox"
										checked={this.state.available === true}
										onChange={(e) => this.setState({ available: e.target.checked })}
									/>
									Available
								</div>
								<div>
									<input
										style={{ marginRight: '10px', marginLeft: '10px' }}
										type="checkbox"
										checked={this.state.notAvailable === true}
										onChange={(e) => this.setState({ notAvailable: e.target.checked })}
									/>
									Not available
								</div>
								<div>
									<input
										style={{ marginRight: '10px', marginLeft: '10px' }}
										type="checkbox"
										checked={this.state.waiting === true}
										onChange={(e) => this.setState({ waiting: e.target.checked })}
									/>
									Waiting for recycling
								</div>
								<div>
									<input
										style={{ marginRight: '10px', marginLeft: '10px' }}
										type="checkbox"
										checked={this.state.recycled === true}
										onChange={(e) => this.setState({ recycled: e.target.checked })}
									/>
									Recycled
								</div>
							</DropdownMenu>
						</UncontrolledDropdown>
					</div>
					<div className="filter-state-icon" onClick={() => this.filterState()}>
						<img src="https://cdn0.iconfinder.com/data/icons/glyphpack/36/filter-512.png"
							width="20px" />
					</div>
					<div className="filter-category">
						<UncontrolledDropdown>
							<DropdownToggle caret>
								Category
							</DropdownToggle>
							<DropdownMenu>
								<div>
									<input
										style={{ marginRight: '10px', marginLeft: '10px' }}
										type="checkbox"
										checked={this.state.allCategory === true}
										onChange={(e) => this.setState({ allCategory: e.target.checked })}
									/>
									All
								</div>
								{
									this.state.categoryList.map((category) => {
										return (
											<div key={category.categoryCode}>
												<input
													style={{ marginRight: '10px', marginLeft: '10px' }}
													type="checkbox"
													value={category.categoryCode}
													onChange={(e) => this.handleSelectCategory(e)}
												/>
												{category.categoryName}
											</div>
										)
									})
								}
							</DropdownMenu>
						</UncontrolledDropdown>
					</div>
					<div className="filter-category-icon" onClick={() => this.filterCategory()}>
						<img src="https://cdn0.iconfinder.com/data/icons/glyphpack/36/filter-512.png"
							width="20px" />
					</div>
					<div className="search">
						<input
							type="text"
							onChange={(e) => this.setState({ searchValue: e.target.value })}
						/>
					</div>
					<div className="search-icon" onClick={() => this.search()}>
						<img src="https://cdn.icon-icons.com/icons2/2566/PNG/512/search_icon_153438.png"
							width="28px" />
					</div>
					<div className="create-asset">
						<Button color="danger">
							Create new asset
						</Button>
					</div>
				</div>
				<div className="table-content">
					<Table hover>
						<thead>
							<tr>
								<th
									style={{ cursor: 'pointer' }}
									onClick={() => this.sortByAssetCode()}
								>
									Asset Code
									<img
										src="https://image.flaticon.com/icons/png/512/60/60995.png"
										width="12px"
									/>
								</th>
								<th
									style={{ cursor: 'pointer' }}
									onClick={() => this.sortByAssetName()}
								>
									Asset Name
									<img
										src="https://image.flaticon.com/icons/png/512/60/60995.png"
										width="12px"
									/>
								</th>
								<th
									style={{ cursor: 'pointer' }}
									onClick={() => this.sortByCategory()}
								>
									Category
									<img
										src="https://image.flaticon.com/icons/png/512/60/60995.png"
										width="12px"
									/>
								</th>
								<th
									style={{ cursor: 'pointer' }}
									onClick={() => this.sortByState()}
								>
									State
									<img
										src="https://image.flaticon.com/icons/png/512/60/60995.png"
										width="12px"
									/>
								</th>
								<th></th>
								<th></th>
							</tr>
						</thead>
						<tbody>
							{
								this.state.assetList.map((asset) => {
									return (
										<tr key={asset.assetCode} 
											onClick={() => this.toggleShowButton(`${asset.assetCode}`)} 
											style={{cursor: 'pointer'}}
										>
											<td>{asset.assetCode}</td>
											<td>{asset.assetName}</td>
											<td>{asset.category.categoryName}</td>
											<td>
												{asset.state === 1 && <span>Available</span>}
												{asset.state === 2 && <span>Not Available</span>}
												{asset.state === 3 && <span>Assigned</span>}
												{asset.state === 4 && <span>Waiting for recycling</span>}
												{asset.state === 5 && <span>Recycled</span>}
											</td>
											<td className="edit-icon">
												<img
													src="https://cdn0.iconfinder.com/data/icons/glyphpack/45/edit-alt-512.png"
													width="20px" />
											</td>
											<td className="delete-icon">
												<img
													src="https://cdn4.iconfinder.com/data/icons/social-messaging-ui-coloricon-1/21/52-512.png"
													width="24px"
												/>
											</td>
										</tr>
									)
								})
							}
						</tbody>
					</Table>
				</div>
				<div className="paging">
					{
						this.state.pageList.length > 1 &&
						this.state.pageList.map((page) => {
							return (
								<div
									key={page}
									className={this.state.currentPage === page ? "paging-page current-page" : "paging-page"}
									onClick={() => this.changePage(`${page}`)}
								>
									{page}
								</div>
							)
						})
					}
				</div>
				{
					this.state.isFail === true &&
					<div className="fail">
						<Alert color="danger">
							{this.state.messageFail}
						</Alert>
					</div>
				}
				<Modal size="lg" isOpen={this.state.modal} toggle={() => this.toggleShow()}>
					<ModalHeader>Detailed Asset Information</ModalHeader>
					<ModalBody>
						<AssetDetail id={this.state.assetId} />
					</ModalBody>
					<ModalFooter>
						<Button color="danger" onClick={() => this.toggleShow()}>Close</Button>
					</ModalFooter>
				</Modal>
			</div>
		)
	}
}
export default withRouter(ManageAsset);