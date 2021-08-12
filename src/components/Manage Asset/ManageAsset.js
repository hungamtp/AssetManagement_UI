import React, { Component } from 'react'
import Navbar from "../Navbar";
import Menu from "../Menu";
import * as business from "../../constants/Business";
import './Manageasset.css';

export default class ManageAsset extends Component {
	render() {
		return (
			<div>
				<Navbar businessName=" Manage Assignment" />
				<Menu business={business.MANAGE_ASSET} />

				<div id="Manage_Asset">
					<div id="Navbar_ial" class="Navbar">
						<div id="Menu_iam">
							<div id="NavbarCreate_ian" class="Navbar_Create">
								<svg class="transparent_iao">
									<rect id="transparent_iao" rx="4" ry="4" x="0" y="0" width="115" height="38">
									</rect>
								</svg>
								<div id="Create_user_iap">
									<span>Create user</span>
								</div>
							</div>
							<div id="NavbarView_iaq" class="Navbar_View">
								<svg class="transparent_iar">
									<rect id="transparent_iar" rx="4" ry="4" x="0" y="0" width="146" height="38">
									</rect>
								</svg>
								<div id="View_user_ias">
									<span>View user</span>
								</div>
							</div>
						</div>
						<div id="Dropusername_iat" class="Drop_username">
							<svg class="transparent_iau">
								<rect id="transparent_iau" rx="4" ry="4" x="0" y="0" width="114" height="38">
								</rect>
							</svg>
							<div id="Label_iav">
								<span>Hi, user123</span>
							</div>
							<div id="icondropdown_arrowdefault_iaw" class="icon_dropdown_arrow_default">
								<svg class="DropdownButtonCarotDown_backgr_iax">
									<rect id="DropdownButtonCarotDown_backgr_iax" rx="0" ry="0" x="0" y="0" width="14" height="14">
									</rect>
								</svg>
								<svg class="icondropdown_arrow_iay" viewBox="0.023 -6 12 6">
									<path id="icondropdown_arrow_iay" d="M 0.02301025576889515 -6 L 12.02301120758057 -6 L 6.002416610717773 1.862645149230957e-09 L 0.02301025576889515 -6 Z">
									</path>
								</svg>
							</div>
						</div>
					</div>
					<div id="heading_iaz">
						<div id="state_heading_ia">
							<div id="Component_10__766" class="Component_10___766">
								<svg class="Rectangle_328_iba">
									<rect id="Rectangle_328_iba" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_iba" viewBox="0 0 100 1">
								<path id="Line_3_iba" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="State_ia">
								<span>State</span>
							</div>
							<div id="icondropdown_arrowdefault_ia" class="icon_dropdown_arrow_default">
								<svg class="DropdownButtonCarotDown_backgr_ia">
									<rect id="DropdownButtonCarotDown_backgr_ia" rx="0" ry="0" x="0" y="0" width="14" height="14">
									</rect>
								</svg>
								<svg class="icondropdown_arrow_ia" viewBox="0.023 -6 12 6">
									<path id="icondropdown_arrow_ia" d="M 0.02301025576889515 -6 L 12.02301120758057 -6 L 6.002416610717773 1.862645149230957e-09 L 0.02301025576889515 -6 Z">
									</path>
								</svg>
							</div>
						</div>
						<div id="Category_heading_ia">
							<div id="Component_10__767" class="Component_10___767">
								<svg class="Rectangle_328_ibb">
									<rect id="Rectangle_328_ibb" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ibb" viewBox="0 0 158.252 1">
								<path id="Line_3_ibb" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Category_ibc">
								<span>Category</span>
							</div>
							<div id="icondropdown_arrowdefault_ibd" class="icon_dropdown_arrow_default">
								<svg class="DropdownButtonCarotDown_backgr_ibe">
									<rect id="DropdownButtonCarotDown_backgr_ibe" rx="0" ry="0" x="0" y="0" width="14" height="14">
									</rect>
								</svg>
								<svg class="icondropdown_arrow_ibf" viewBox="0.023 -6 12 6">
									<path id="icondropdown_arrow_ibf" d="M 0.02301025576889515 -6 L 12.02301120758057 -6 L 6.002416610717773 1.862645149230957e-09 L 0.02301025576889515 -6 Z">
									</path>
								</svg>
							</div>
						</div>
						<div id="name_heading_ibg">
							<div id="Component_10__768" class="Component_10___768">
								<svg class="Rectangle_328_ibi">
									<rect id="Rectangle_328_ibi" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ibj" viewBox="0 0 280 1">
								<path id="Line_3_ibj" d="M 0 0 L 280 0">
								</path>
							</svg>
							<div id="Full_Name_ibk">
								<span>Asset Name</span>
							</div>
							<div id="icondropdown_arrowdefault_ibl" class="icon_dropdown_arrow_default">
								<svg class="DropdownButtonCarotDown_backgr_ibm">
									<rect id="DropdownButtonCarotDown_backgr_ibm" rx="0" ry="0" x="0" y="0" width="14" height="14">
									</rect>
								</svg>
								<svg class="icondropdown_arrow_ibn" viewBox="0.023 -6 12 6">
									<path id="icondropdown_arrow_ibn" d="M 0.02301025576889515 -6 L 12.02301120758057 -6 L 6.002416610717773 1.862645149230957e-09 L 0.02301025576889515 -6 Z">
									</path>
								</svg>
							</div>
						</div>
						<div id="Staff_code_heading_ibo">
							<div id="Component_10__769" class="Component_10___769">
								<svg class="Rectangle_328_ibq">
									<rect id="Rectangle_328_ibq" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ibr" viewBox="0 0 100 2">
								<path id="Line_3_ibr" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Asset_Code_ibs">
								<span>Asset Code</span>
							</div>
							<div id="icondropdown_arrowdefault_ibt" class="icon_dropdown_arrow_default">
								<svg class="DropdownButtonCarotDown_backgr_ibu">
									<rect id="DropdownButtonCarotDown_backgr_ibu" rx="0" ry="0" x="0" y="0" width="14" height="14">
									</rect>
								</svg>
								<svg class="icondropdown_arrow_ibv" viewBox="0.023 -6 12 6">
									<path id="icondropdown_arrow_ibv" d="M 0.02301025576889515 -6 L 12.02301120758057 -6 L 6.002416610717773 1.862645149230957e-09 L 0.02301025576889515 -6 Z">
									</path>
								</svg>
							</div>
						</div>
					</div>
					<div onclick="application.goToTargetView(event)" id="row_1_ibw">
						<div id="c14_ibx">
							<div id="Component_10__777" class="Component_10___777">
								<svg class="Rectangle_328_ibz">
									<rect id="Rectangle_328_ibz" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ib" viewBox="0 0 100 1">
								<path id="Line_3_ib" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Available_ib">
								<span>Available</span>
							</div>
						</div>
						<div id="c13_ib">
							<div id="Component_10__778" class="Component_10___778">
								<svg class="Rectangle_328_ica">
									<rect id="Rectangle_328_ica" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ica" viewBox="0 0 158.252 1">
								<path id="Line_3_ica" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Laptop_ib">
								<span>Laptop</span>
							</div>
						</div>
						<div id="c12_ib">
							<div id="Component_10__779" class="Component_10___779">
								<svg class="Rectangle_328_icb">
									<rect id="Rectangle_328_icb" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Laptop_HP_Probook_450_G1__ica">
									<span>Laptop HP Probook 450 G1 </span>
								</div>
							</div>
							<svg class="Line_3_icb" viewBox="0 0 280 1">
								<path id="Line_3_icb" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div onclick="application.goToTargetView(event)" id="c11_icc">
							<div id="Component_10__780" class="Component_10___780">
								<svg class="Rectangle_328_ice">
									<rect id="Rectangle_328_ice" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="LA100001_icf">
									<span>LA100001</span>
								</div>
							</div>
							<svg class="Line_3_icg" viewBox="0 0 100 1">
								<path id="Line_3_icg" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div onclick="application.goToTargetView(event)" id="row_1_ich">
						<div id="c14_ici">
							<div id="Component_10__777_icj" class="Component_10___777">
								<svg class="Rectangle_328_ick">
									<rect id="Rectangle_328_ick" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_icl" viewBox="0 0 100 1">
								<path id="Line_3_icl" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Available_icm">
								<span>Available</span>
							</div>
						</div>
						<div id="c13_icn">
							<div id="Component_10__778_ico" class="Component_10___778">
								<svg class="Rectangle_328_icp">
									<rect id="Rectangle_328_icp" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_icq" viewBox="0 0 158.252 1">
								<path id="Line_3_icq" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Laptop_icr">
								<span>Laptop</span>
							</div>
						</div>
						<div id="c12_ics">
							<div id="Component_10__779_ict" class="Component_10___779">
								<svg class="Rectangle_328_icu">
									<rect id="Rectangle_328_icu" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Laptop_HP_Probook_450_G1__icv">
									<span>Laptop HP Probook 450 G1 </span>
								</div>
							</div>
							<svg class="Line_3_icw" viewBox="0 0 280 1">
								<path id="Line_3_icw" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_icx">
							<div id="Component_10__780_icy" class="Component_10___780">
								<svg class="Rectangle_328_icz">
									<rect id="Rectangle_328_icz" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="LA100002_ic">
									<span>LA100002</span>
								</div>
							</div>
							<svg class="Line_3_ida" viewBox="0 0 100 1">
								<path id="Line_3_ida" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div id="row_1_ic">
						<div id="c14_ic">
							<div id="Component_10__777_ic" class="Component_10___777">
								<svg class="Rectangle_328_ic">
									<rect id="Rectangle_328_ic" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_idb" viewBox="0 0 100 1">
								<path id="Line_3_idb" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Assigned_ic">
								<span>Assigned</span>
							</div>
						</div>
						<div id="c13_ic">
							<div id="Component_10__778_ic" class="Component_10___778">
								<svg class="Rectangle_328_ida">
									<rect id="Rectangle_328_ida" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_idc" viewBox="0 0 158.252 1">
								<path id="Line_3_idc" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Laptop_idc">
								<span>Laptop</span>
							</div>
						</div>
						<div onclick="application.goToTargetView(event)" id="c12_idd">
							<div id="Component_10__779_ide" class="Component_10___779">
								<svg class="Rectangle_328_idf">
									<rect id="Rectangle_328_idf" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Laptop_HP_Probook_450_G1__idg">
									<span>Laptop HP Probook 450 G1 </span>
								</div>
							</div>
							<svg class="Line_3_idh" viewBox="0 0 280 1">
								<path id="Line_3_idh" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_idi">
							<div id="Component_10__780_idj" class="Component_10___780">
								<svg class="Rectangle_328_idk">
									<rect id="Rectangle_328_idk" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="LA100003_idl">
									<span>LA100003</span>
								</div>
							</div>
							<svg class="Line_3_idm" viewBox="0 0 100 1">
								<path id="Line_3_idm" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div id="row_1_idn">
						<div id="c14_ido">
							<div id="Component_10__777_idp" class="Component_10___777">
								<svg class="Rectangle_328_idq">
									<rect id="Rectangle_328_idq" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_idr" viewBox="0 0 100 1">
								<path id="Line_3_idr" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Not_available_ids">
								<span>Not available</span>
							</div>
						</div>
						<div id="c13_idt">
							<div id="Component_10__778_idu" class="Component_10___778">
								<svg class="Rectangle_328_idv">
									<rect id="Rectangle_328_idv" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_idw" viewBox="0 0 158.252 1">
								<path id="Line_3_idw" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Laptop_idx">
								<span>Laptop</span>
							</div>
						</div>
						<div id="c12_idy">
							<div id="Component_10__779_idz" class="Component_10___779">
								<svg class="Rectangle_328_id">
									<rect id="Rectangle_328_id" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Laptop_HP_Probook_450_G1__id">
									<span>Laptop HP Probook 450 G1 </span>
								</div>
							</div>
							<svg class="Line_3_id" viewBox="0 0 280 1">
								<path id="Line_3_id" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_id">
							<div id="Component_10__780_id" class="Component_10___780">
								<svg class="Rectangle_328_iea">
									<rect id="Rectangle_328_iea" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="LA100004_id">
									<span>LA100004</span>
								</div>
							</div>
							<svg class="Line_3_iea" viewBox="0 0 100 1">
								<path id="Line_3_iea" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div id="row_1_id">
						<div id="c14_id">
							<div id="Component_10__777_iea" class="Component_10___777">
								<svg class="Rectangle_328_ieb">
									<rect id="Rectangle_328_ieb" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_iec" viewBox="0 0 100 1">
								<path id="Line_3_iec" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Available_ied">
								<span>Available</span>
							</div>
						</div>
						<div id="c13_iee">
							<div id="Component_10__778_ief" class="Component_10___778">
								<svg class="Rectangle_328_ieg">
									<rect id="Rectangle_328_ieg" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ieh" viewBox="0 0 158.252 1">
								<path id="Line_3_ieh" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Monitor_iei">
								<span>Monitor</span>
							</div>
						</div>
						<div id="c12_iej">
							<div id="Component_10__779_iek" class="Component_10___779">
								<svg class="Rectangle_328_iel">
									<rect id="Rectangle_328_iel" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Monitor_Dell_UltraSharp_iem">
									<span>Monitor Dell UltraSharp</span>
								</div>
							</div>
							<svg class="Line_3_ien" viewBox="0 0 280 1">
								<path id="Line_3_ien" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_ieo">
							<div id="Component_10__780_iep" class="Component_10___780">
								<svg class="Rectangle_328_ieq">
									<rect id="Rectangle_328_ieq" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="MO100001_ier">
									<span>MO100001</span>
								</div>
							</div>
							<svg class="Line_3_ies" viewBox="0 0 100 1">
								<path id="Line_3_ies" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div id="row_1_iet">
						<div id="c14_ieu">
							<div id="Component_10__777_iev" class="Component_10___777">
								<svg class="Rectangle_328_iew">
									<rect id="Rectangle_328_iew" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_iex" viewBox="0 0 100 1">
								<path id="Line_3_iex" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Available_iey">
								<span>Available</span>
							</div>
						</div>
						<div id="c13_iez">
							<div id="Component_10__778_ie" class="Component_10___778">
								<svg class="Rectangle_328_ie">
									<rect id="Rectangle_328_ie" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ie" viewBox="0 0 158.252 1">
								<path id="Line_3_ie" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Monitor_ie">
								<span>Monitor</span>
							</div>
						</div>
						<div id="c12_ie">
							<div id="Component_10__779_ie" class="Component_10___779">
								<svg class="Rectangle_328_ifa">
									<rect id="Rectangle_328_ifa" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Monitor_Dell_UltraSharp_ie">
									<span>Monitor Dell UltraSharp</span>
								</div>
							</div>
							<svg class="Line_3_ifa" viewBox="0 0 280 1">
								<path id="Line_3_ifa" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_ie">
							<div id="Component_10__780_ifa" class="Component_10___780">
								<svg class="Rectangle_328_ifb">
									<rect id="Rectangle_328_ifb" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="MO100002_ifc">
									<span>MO100002</span>
								</div>
							</div>
							<svg class="Line_3_ifd" viewBox="0 0 100 1">
								<path id="Line_3_ifd" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div id="row_1_ife">
						<div id="c14_iff">
							<div id="Component_10__777_ifg" class="Component_10___777">
								<svg class="Rectangle_328_ifh">
									<rect id="Rectangle_328_ifh" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ifi" viewBox="0 0 100 1">
								<path id="Line_3_ifi" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Available_ifj">
								<span>Available</span>
							</div>
						</div>
						<div id="c13_ifk">
							<div id="Component_10__778_ifl" class="Component_10___778">
								<svg class="Rectangle_328_ifm">
									<rect id="Rectangle_328_ifm" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ifn" viewBox="0 0 158.252 1">
								<path id="Line_3_ifn" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Monitor_ifo">
								<span>Monitor</span>
							</div>
						</div>
						<div id="c12_ifp">
							<div id="Component_10__779_ifq" class="Component_10___779">
								<svg class="Rectangle_328_ifr">
									<rect id="Rectangle_328_ifr" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Monitor_Dell_UltraSharp_ifs">
									<span>Monitor Dell UltraSharp</span>
								</div>
							</div>
							<svg class="Line_3_ift" viewBox="0 0 280 1">
								<path id="Line_3_ift" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_ifu">
							<div id="Component_10__780_ifv" class="Component_10___780">
								<svg class="Rectangle_328_ifw">
									<rect id="Rectangle_328_ifw" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="MO100003_ifx">
									<span>MO100003</span>
								</div>
							</div>
							<svg class="Line_3_ify" viewBox="0 0 100 1">
								<path id="Line_3_ify" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div id="row_1_ifz">
						<div id="c14_iga">
							<div id="Component_10__777_if" class="Component_10___777">
								<svg class="Rectangle_328_if">
									<rect id="Rectangle_328_if" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_if" viewBox="0 0 100 1">
								<path id="Line_3_if" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Assigned_if">
								<span>Assigned</span>
							</div>
						</div>
						<div id="c13_if">
							<div id="Component_10__778_if" class="Component_10___778">
								<svg class="Rectangle_328_iga">
									<rect id="Rectangle_328_iga" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_iga" viewBox="0 0 158.252 1">
								<path id="Line_3_iga" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Monitor_if">
								<span>Monitor</span>
							</div>
						</div>
						<div id="c12_iga">
							<div id="Component_10__779_igb" class="Component_10___779">
								<svg class="Rectangle_328_igc">
									<rect id="Rectangle_328_igc" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Monitor_Dell_UltraSharp_igd">
									<span>Monitor Dell UltraSharp</span>
								</div>
							</div>
							<svg class="Line_3_ige" viewBox="0 0 280 1">
								<path id="Line_3_ige" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_igf">
							<div id="Component_10__780_igg" class="Component_10___780">
								<svg class="Rectangle_328_igh">
									<rect id="Rectangle_328_igh" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="MO100004_igi">
									<span>MO100004</span>
								</div>
							</div>
							<svg class="Line_3_igj" viewBox="0 0 100 1">
								<path id="Line_3_igj" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div id="row_1_igk">
						<div id="c14_igl">
							<div id="Component_10__777_igm" class="Component_10___777">
								<svg class="Rectangle_328_ign">
									<rect id="Rectangle_328_ign" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_igo" viewBox="0 0 100 1">
								<path id="Line_3_igo" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Assigned_igp">
								<span>Assigned</span>
							</div>
						</div>
						<div id="c13_igq">
							<div id="Component_10__778_igr" class="Component_10___778">
								<svg class="Rectangle_328_igs">
									<rect id="Rectangle_328_igs" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_igt" viewBox="0 0 158.252 1">
								<path id="Line_3_igt" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Monitor_igu">
								<span>Monitor</span>
							</div>
						</div>
						<div id="c12_igv">
							<div id="Component_10__779_igw" class="Component_10___779">
								<svg class="Rectangle_328_igx">
									<rect id="Rectangle_328_igx" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Monitor_Dell_UltraSharp_igy">
									<span>Monitor Dell UltraSharp</span>
								</div>
							</div>
							<svg class="Line_3_igz" viewBox="0 0 280 1">
								<path id="Line_3_igz" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_ig">
							<div id="Component_10__780_ig" class="Component_10___780">
								<svg class="Rectangle_328_ig">
									<rect id="Rectangle_328_ig" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="MO100005_ig">
									<span>MO100005</span>
								</div>
							</div>
							<svg class="Line_3_ig" viewBox="0 0 100 1">
								<path id="Line_3_ig" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div id="row_1_ig">
						<div id="c14_ig">
							<div id="Component_10__777_ig" class="Component_10___777">
								<svg class="Rectangle_328_iha">
									<rect id="Rectangle_328_iha" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_iha" viewBox="0 0 100 1">
								<path id="Line_3_iha" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Available_iha">
								<span>Available</span>
							</div>
						</div>
						<div id="c13_ihb">
							<div id="Component_10__778_ihc" class="Component_10___778">
								<svg class="Rectangle_328_ihd">
									<rect id="Rectangle_328_ihd" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ihe" viewBox="0 0 158.252 1">
								<path id="Line_3_ihe" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Personal_Computer_ihf">
								<span>Personal Computer</span>
							</div>
						</div>
						<div id="c12_ihg">
							<div id="Component_10__779_ihh" class="Component_10___779">
								<svg class="Rectangle_328_ihi">
									<rect id="Rectangle_328_ihi" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Personal_Computer_ihj">
									<span>Personal Computer</span>
								</div>
							</div>
							<svg class="Line_3_ihk" viewBox="0 0 280 1">
								<path id="Line_3_ihk" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_ihl">
							<div id="Component_10__780_ihm" class="Component_10___780">
								<svg class="Rectangle_328_ihn">
									<rect id="Rectangle_328_ihn" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="PC100111_iho">
									<span>PC100111</span>
								</div>
							</div>
							<svg class="Line_3_ihp" viewBox="0 0 100 1">
								<path id="Line_3_ihp" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div id="row_1_ihq">
						<div id="c14_ihr">
							<div id="Component_10__777_ihs" class="Component_10___777">
								<svg class="Rectangle_328_iht">
									<rect id="Rectangle_328_iht" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ihu" viewBox="0 0 100 1">
								<path id="Line_3_ihu" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Avalable_ihv">
								<span>Avalable</span>
							</div>
						</div>
						<div id="c13_ihw">
							<div id="Component_10__778_ihx" class="Component_10___778">
								<svg class="Rectangle_328_ihy">
									<rect id="Rectangle_328_ihy" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ihz" viewBox="0 0 158.252 1">
								<path id="Line_3_ihz" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Personal_Computer_ih">
								<span>Personal Computer</span>
							</div>
						</div>
						<div id="c12_ih">
							<div id="Component_10__779_ih" class="Component_10___779">
								<svg class="Rectangle_328_iia">
									<rect id="Rectangle_328_iia" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Personal_Computer_iia">
									<span>Personal Computer</span>
								</div>
							</div>
							<svg class="Line_3_ih" viewBox="0 0 280 1">
								<path id="Line_3_ih" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_ih">
							<div id="Component_10__780_ih" class="Component_10___780">
								<svg class="Rectangle_328_iib">
									<rect id="Rectangle_328_iib" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="PC100112_ih">
									<span>PC100112</span>
								</div>
							</div>
							<svg class="Line_3_iia" viewBox="0 0 100 1">
								<path id="Line_3_iia" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div id="row_1_iib">
						<div id="c14_iic">
							<div id="Component_10__777_iid" class="Component_10___777">
								<svg class="Rectangle_328_iie">
									<rect id="Rectangle_328_iie" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_iif" viewBox="0 0 100 1">
								<path id="Line_3_iif" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Not_available_iig">
								<span>Not available</span>
							</div>
						</div>
						<div id="c13_iih">
							<div id="Component_10__778_iii" class="Component_10___778">
								<svg class="Rectangle_328_iij">
									<rect id="Rectangle_328_iij" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_iik" viewBox="0 0 158.252 1">
								<path id="Line_3_iik" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Personal_Computer_iil">
								<span>Personal Computer</span>
							</div>
						</div>
						<div id="c12_iim">
							<div id="Component_10__779_iin" class="Component_10___779">
								<svg class="Rectangle_328_iio">
									<rect id="Rectangle_328_iio" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Personal_Computer_iip">
									<span>Personal Computer</span>
								</div>
							</div>
							<svg class="Line_3_iiq" viewBox="0 0 280 1">
								<path id="Line_3_iiq" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_iir">
							<div id="Component_10__780_iis" class="Component_10___780">
								<svg class="Rectangle_328_iit">
									<rect id="Rectangle_328_iit" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="PC100113_iiu">
									<span>PC100113</span>
								</div>
							</div>
							<svg class="Line_3_iiv" viewBox="0 0 100 1">
								<path id="Line_3_iiv" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div id="row_1_iiw">
						<div id="c14_iix">
							<div id="Component_10__777_iiy" class="Component_10___777">
								<svg class="Rectangle_328_iiz">
									<rect id="Rectangle_328_iiz" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ija" viewBox="0 0 100 1">
								<path id="Line_3_ija" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Assigned_ii">
								<span>Assigned</span>
							</div>
						</div>
						<div id="c13_ii">
							<div id="Component_10__778_ii" class="Component_10___778">
								<svg class="Rectangle_328_ii">
									<rect id="Rectangle_328_ii" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ijb" viewBox="0 0 158.252 1">
								<path id="Line_3_ijb" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Personal_Computer_ii">
								<span>Personal Computer</span>
							</div>
						</div>
						<div id="c12_ii">
							<div id="Component_10__779_ii" class="Component_10___779">
								<svg class="Rectangle_328_ija">
									<rect id="Rectangle_328_ija" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Personal_Computer_ija">
									<span>Personal Computer</span>
								</div>
							</div>
							<svg class="Line_3_ijc" viewBox="0 0 280 1">
								<path id="Line_3_ijc" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_ijc">
							<div id="Component_10__780_ijd" class="Component_10___780">
								<svg class="Rectangle_328_ije">
									<rect id="Rectangle_328_ije" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="PC100114_ijf">
									<span>PC100114</span>
								</div>
							</div>
							<svg class="Line_3_ijg" viewBox="0 0 100 1">
								<path id="Line_3_ijg" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div id="row_1_ijh">
						<div id="c14_iji">
							<div id="Component_10__777_ijj" class="Component_10___777">
								<svg class="Rectangle_328_ijk">
									<rect id="Rectangle_328_ijk" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ijl" viewBox="0 0 100 1">
								<path id="Line_3_ijl" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Assigned_ijm">
								<span>Assigned</span>
							</div>
						</div>
						<div id="c13_ijn">
							<div id="Component_10__778_ijo" class="Component_10___778">
								<svg class="Rectangle_328_ijp">
									<rect id="Rectangle_328_ijp" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ijq" viewBox="0 0 158.252 1">
								<path id="Line_3_ijq" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Personal_Computer_ijr">
								<span>Personal Computer</span>
							</div>
						</div>
						<div id="c12_ijs">
							<div id="Component_10__779_ijt" class="Component_10___779">
								<svg class="Rectangle_328_iju">
									<rect id="Rectangle_328_iju" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Personal_Computer_ijv">
									<span>Personal Computer</span>
								</div>
							</div>
							<svg class="Line_3_ijw" viewBox="0 0 280 1">
								<path id="Line_3_ijw" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_ijx">
							<div id="Component_10__780_ijy" class="Component_10___780">
								<svg class="Rectangle_328_ijz">
									<rect id="Rectangle_328_ijz" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="PC100115_ij">
									<span>PC100115</span>
								</div>
							</div>
							<svg class="Line_3_ij" viewBox="0 0 100 1">
								<path id="Line_3_ij" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div id="row_1_ij">
						<div id="c14_ij">
							<div id="Component_10__777_ij" class="Component_10___777">
								<svg class="Rectangle_328_ij">
									<rect id="Rectangle_328_ij" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ika" viewBox="0 0 100 1">
								<path id="Line_3_ika" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Assigned_ij">
								<span>Assigned</span>
							</div>
						</div>
						<div id="c13_ij">
							<div id="Component_10__778_ij" class="Component_10___778">
								<svg class="Rectangle_328_ika">
									<rect id="Rectangle_328_ika" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ikb" viewBox="0 0 158.252 1">
								<path id="Line_3_ikb" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Personal_Computer_ikc">
								<span>Personal Computer</span>
							</div>
						</div>
						<div id="c12_ikd">
							<div id="Component_10__779_ike" class="Component_10___779">
								<svg class="Rectangle_328_ikf">
									<rect id="Rectangle_328_ikf" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Personal_Computer_ikg">
									<span>Personal Computer</span>
								</div>
							</div>
							<svg class="Line_3_ikh" viewBox="0 0 280 1">
								<path id="Line_3_ikh" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_iki">
							<div id="Component_10__780_ikj" class="Component_10___780">
								<svg class="Rectangle_328_ikk">
									<rect id="Rectangle_328_ikk" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="PC100116_ikl">
									<span>PC100116</span>
								</div>
							</div>
							<svg class="Line_3_ikm" viewBox="0 0 100 1">
								<path id="Line_3_ikm" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div id="row_1_ikn">
						<div id="c14_iko">
							<div id="Component_10__777_ikp" class="Component_10___777">
								<svg class="Rectangle_328_ikq">
									<rect id="Rectangle_328_ikq" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ikr" viewBox="0 0 100 1">
								<path id="Line_3_ikr" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Assigned_iks">
								<span>Assigned</span>
							</div>
						</div>
						<div id="c13_ikt">
							<div id="Component_10__778_iku" class="Component_10___778">
								<svg class="Rectangle_328_ikv">
									<rect id="Rectangle_328_ikv" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ikw" viewBox="0 0 158.252 1">
								<path id="Line_3_ikw" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Personal_Computer_ikx">
								<span>Personal Computer</span>
							</div>
						</div>
						<div id="c12_iky">
							<div id="Component_10__779_ikz" class="Component_10___779">
								<svg class="Rectangle_328_ik">
									<rect id="Rectangle_328_ik" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Personal_Computer_ik">
									<span>Personal Computer</span>
								</div>
							</div>
							<svg class="Line_3_ik" viewBox="0 0 280 1">
								<path id="Line_3_ik" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_ik">
							<div id="Component_10__780_ik" class="Component_10___780">
								<svg class="Rectangle_328_ila">
									<rect id="Rectangle_328_ila" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="PC100117_ik">
									<span>PC100117</span>
								</div>
							</div>
							<svg class="Line_3_ila" viewBox="0 0 100 1">
								<path id="Line_3_ila" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div id="row_1_ik">
						<div id="c14_ik">
							<div id="Component_10__777_ila" class="Component_10___777">
								<svg class="Rectangle_328_ilb">
									<rect id="Rectangle_328_ilb" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ilc" viewBox="0 0 100 1">
								<path id="Line_3_ilc" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Assigned_ild">
								<span>Assigned</span>
							</div>
						</div>
						<div id="c13_ile">
							<div id="Component_10__778_ilf" class="Component_10___778">
								<svg class="Rectangle_328_ilg">
									<rect id="Rectangle_328_ilg" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ilh" viewBox="0 0 158.252 1">
								<path id="Line_3_ilh" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Personal_Computer_ili">
								<span>Personal Computer</span>
							</div>
						</div>
						<div id="c12_ilj">
							<div id="Component_10__779_ilk" class="Component_10___779">
								<svg class="Rectangle_328_ill">
									<rect id="Rectangle_328_ill" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Personal_Computer_ilm">
									<span>Personal Computer</span>
								</div>
							</div>
							<svg class="Line_3_iln" viewBox="0 0 280 1">
								<path id="Line_3_iln" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_ilo">
							<div id="Component_10__780_ilp" class="Component_10___780">
								<svg class="Rectangle_328_ilq">
									<rect id="Rectangle_328_ilq" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="PC100118_ilr">
									<span>PC100118</span>
								</div>
							</div>
							<svg class="Line_3_ils" viewBox="0 0 100 1">
								<path id="Line_3_ils" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div id="row_1_ilt">
						<div id="c14_ilu">
							<div id="Component_10__777_ilv" class="Component_10___777">
								<svg class="Rectangle_328_ilw">
									<rect id="Rectangle_328_ilw" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_ilx" viewBox="0 0 100 1">
								<path id="Line_3_ilx" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Assigned_ily">
								<span>Assigned</span>
							</div>
						</div>
						<div id="c13_ilz">
							<div id="Component_10__778_il" class="Component_10___778">
								<svg class="Rectangle_328_il">
									<rect id="Rectangle_328_il" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_il" viewBox="0 0 158.252 1">
								<path id="Line_3_il" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Personal_Computer_il">
								<span>Personal Computer</span>
							</div>
						</div>
						<div id="c12_il">
							<div id="Component_10__779_il" class="Component_10___779">
								<svg class="Rectangle_328_ima">
									<rect id="Rectangle_328_ima" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Personal_Computer_ima">
									<span>Personal Computer</span>
								</div>
							</div>
							<svg class="Line_3_ima" viewBox="0 0 280 1">
								<path id="Line_3_ima" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_il">
							<div id="Component_10__780_ima" class="Component_10___780">
								<svg class="Rectangle_328_imb">
									<rect id="Rectangle_328_imb" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="PC100119_imc">
									<span>PC100119</span>
								</div>
							</div>
							<svg class="Line_3_imd" viewBox="0 0 100 1">
								<path id="Line_3_imd" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div id="row_1_ime">
						<div id="c14_imf">
							<div id="Component_10__777_img" class="Component_10___777">
								<svg class="Rectangle_328_imh">
									<rect id="Rectangle_328_imh" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_imi" viewBox="0 0 100 1">
								<path id="Line_3_imi" d="M 0 0 L 100 0">
								</path>
							</svg>
							<div id="Assigned_imj">
								<span>Assigned</span>
							</div>
						</div>
						<div id="c13_imk">
							<div id="Component_10__778_iml" class="Component_10___778">
								<svg class="Rectangle_328_imm">
									<rect id="Rectangle_328_imm" rx="0" ry="0" x="0" y="0" width="158" height="32">
									</rect>
								</svg>
							</div>
							<svg class="Line_3_imn" viewBox="0 0 158.252 1">
								<path id="Line_3_imn" d="M 0 0 L 158.25244140625 0">
								</path>
							</svg>
							<div id="Personal_Computer_imo">
								<span>Personal Computer</span>
							</div>
						</div>
						<div id="c12_imp">
							<div id="Component_10__779_imq" class="Component_10___779">
								<svg class="Rectangle_328_imr">
									<rect id="Rectangle_328_imr" rx="0" ry="0" x="0" y="0" width="280" height="32">
									</rect>
								</svg>
								<div id="Personal_Computer_ims">
									<span>Personal Computer</span>
								</div>
							</div>
							<svg class="Line_3_imt" viewBox="0 0 280 1">
								<path id="Line_3_imt" d="M 0 0 L 280 0">
								</path>
							</svg>
						</div>
						<div id="c11_imu">
							<div id="Component_10__780_imv" class="Component_10___780">
								<svg class="Rectangle_328_imw">
									<rect id="Rectangle_328_imw" rx="0" ry="0" x="0" y="0" width="100" height="32">
									</rect>
								</svg>
								<div id="PC100120_imx">
									<span>PC100120</span>
								</div>
							</div>
							<svg class="Line_3_imy" viewBox="0 0 100 1">
								<path id="Line_3_imy" d="M 0 0 L 100 0">
								</path>
							</svg>
						</div>
					</div>
					<div onclick="application.goToTargetView(event)" id="edit_icon_imz" class="edit_icon">
						<svg class="edit_icon_im" viewBox="0 0 16.001 16">
							<path onclick="application.goToTargetView(event)" id="edit_icon_im" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
							</path>
						</svg>
					</div>
					<div onclick="application.goToTargetView(event)" id="x-circle-fill_im" class="x_circle_fill">
						<svg class="x-circle-fill_ina" viewBox="0 0 16 16">
							<path id="x-circle-fill_ina" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
							</path>
						</svg>
					</div>
					<div id="Group_122">
						<div id="edit_icon_ina" class="edit_icon">
							<svg class="edit_icon_inb" viewBox="0 0 16.001 16">
								<path id="edit_icon_inb" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
								</path>
							</svg>
						</div>
						<div onclick="application.goToTargetView(event)" id="x-circle-fill_inb" class="x_circle_fill">
							<svg class="x-circle-fill_inc" viewBox="0 0 16 16">
								<path id="x-circle-fill_inc" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
								</path>
							</svg>
						</div>
					</div>
					<div id="Group_123">
						<div id="edit_icon_inc" class="edit_icon">
							<svg class="edit_icon_ind" viewBox="0 0 16.001 16">
								<path id="edit_icon_ind" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
								</path>
							</svg>
						</div>
						<div id="x-circle-fill_ind" class="x_circle_fill">
							<svg class="x-circle-fill_ine" viewBox="0 0 16 16">
								<path id="x-circle-fill_ine" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
								</path>
							</svg>
						</div>
					</div>
					<div id="Group_124">
						<div id="edit_icon_ine" class="edit_icon">
							<svg class="edit_icon_inf" viewBox="0 0 16.001 16">
								<path id="edit_icon_inf" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
								</path>
							</svg>
						</div>
						<div id="x-circle-fill_ing" class="x_circle_fill">
							<svg class="x-circle-fill_inh" viewBox="0 0 16 16">
								<path id="x-circle-fill_inh" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
								</path>
							</svg>
						</div>
					</div>
					<div id="Group_125">
						<div id="edit_icon_inj" class="edit_icon">
							<svg class="edit_icon_ink" viewBox="0 0 16.001 16">
								<path id="edit_icon_ink" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
								</path>
							</svg>
						</div>
						<div id="x-circle-fill_inl" class="x_circle_fill">
							<svg class="x-circle-fill_inm" viewBox="0 0 16 16">
								<path id="x-circle-fill_inm" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
								</path>
							</svg>
						</div>
					</div>
					<div id="Group_126">
						<div id="edit_icon_ino" class="edit_icon">
							<svg class="edit_icon_inp" viewBox="0 0 16.001 16">
								<path id="edit_icon_inp" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
								</path>
							</svg>
						</div>
						<div id="x-circle-fill_inq" class="x_circle_fill">
							<svg class="x-circle-fill_inr" viewBox="0 0 16 16">
								<path id="x-circle-fill_inr" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
								</path>
							</svg>
						</div>
					</div>
					<div id="Group_127">
						<div id="edit_icon_int" class="edit_icon">
							<svg class="edit_icon_inu" viewBox="0 0 16.001 16">
								<path id="edit_icon_inu" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
								</path>
							</svg>
						</div>
						<div id="x-circle-fill_inv" class="x_circle_fill">
							<svg class="x-circle-fill_inw" viewBox="0 0 16 16">
								<path id="x-circle-fill_inw" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
								</path>
							</svg>
						</div>
					</div>
					<div id="Group_128">
						<div id="edit_icon_iny" class="edit_icon">
							<svg class="edit_icon_inz" viewBox="0 0 16.001 16">
								<path id="edit_icon_inz" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
								</path>
							</svg>
						</div>
						<div id="x-circle-fill_in" class="x_circle_fill">
							<svg class="x-circle-fill_ioa" viewBox="0 0 16 16">
								<path id="x-circle-fill_ioa" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
								</path>
							</svg>
						</div>
					</div>
					<div id="Group_129">
						<div id="edit_icon_in" class="edit_icon">
							<svg class="edit_icon_ioa" viewBox="0 0 16.001 16">
								<path id="edit_icon_ioa" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
								</path>
							</svg>
						</div>
						<div id="x-circle-fill_iob" class="x_circle_fill">
							<svg class="x-circle-fill_ioc" viewBox="0 0 16 16">
								<path id="x-circle-fill_ioc" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
								</path>
							</svg>
						</div>
					</div>
					<div onclick="application.goToTargetView(event)" id="edit_icon_iob" class="edit_icon">
						<svg class="edit_icon_ioc" viewBox="0 0 16.001 16">
							<path id="edit_icon_ioc" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
							</path>
						</svg>
					</div>
					<div id="x-circle-fill_iod" class="x_circle_fill">
						<svg class="x-circle-fill_ioe" viewBox="0 0 16 16">
							<path id="x-circle-fill_ioe" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
							</path>
						</svg>
					</div>
					<div onclick="application.goToTargetView(event)" id="edit_icon_iod" class="edit_icon">
						<svg class="edit_icon_ioe" viewBox="0 0 16.001 16">
							<path id="edit_icon_ioe" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
							</path>
						</svg>
					</div>
					<div id="x-circle-fill_iof" class="x_circle_fill">
						<svg class="x-circle-fill_iog" viewBox="0 0 16 16">
							<path id="x-circle-fill_iog" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
							</path>
						</svg>
					</div>
					<div onclick="application.goToTargetView(event)" id="edit_icon_iof" class="edit_icon">
						<svg class="edit_icon_iog" viewBox="0 0 16.001 16">
							<path id="edit_icon_iog" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
							</path>
						</svg>
					</div>
					<div id="x-circle-fill_ioh" class="x_circle_fill">
						<svg class="x-circle-fill_ioi" viewBox="0 0 16 16">
							<path id="x-circle-fill_ioi" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
							</path>
						</svg>
					</div>
					<div id="Group_133">
						<div id="edit_icon_iok" class="edit_icon">
							<svg class="edit_icon_iol" viewBox="0 0 16.001 16">
								<path id="edit_icon_iol" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
								</path>
							</svg>
						</div>
						<div id="x-circle-fill_iom" class="x_circle_fill">
							<svg class="x-circle-fill_ion" viewBox="0 0 16 16">
								<path id="x-circle-fill_ion" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
								</path>
							</svg>
						</div>
					</div>
					<div id="Group_134">
						<div id="edit_icon_iop" class="edit_icon">
							<svg class="edit_icon_ioq" viewBox="0 0 16.001 16">
								<path id="edit_icon_ioq" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
								</path>
							</svg>
						</div>
						<div id="x-circle-fill_ior" class="x_circle_fill">
							<svg class="x-circle-fill_ios" viewBox="0 0 16 16">
								<path id="x-circle-fill_ios" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
								</path>
							</svg>
						</div>
					</div>
					<div id="Group_135">
						<div id="edit_icon_iou" class="edit_icon">
							<svg class="edit_icon_iov" viewBox="0 0 16.001 16">
								<path id="edit_icon_iov" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
								</path>
							</svg>
						</div>
						<div id="x-circle-fill_iow" class="x_circle_fill">
							<svg class="x-circle-fill_iox" viewBox="0 0 16 16">
								<path id="x-circle-fill_iox" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
								</path>
							</svg>
						</div>
					</div>
					<div id="Group_136">
						<div id="edit_icon_ioz" class="edit_icon">
							<svg class="edit_icon_io" viewBox="0 0 16.001 16">
								<path id="edit_icon_io" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
								</path>
							</svg>
						</div>
						<div id="x-circle-fill_io" class="x_circle_fill">
							<svg class="x-circle-fill_ipa" viewBox="0 0 16 16">
								<path id="x-circle-fill_ipa" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
								</path>
							</svg>
						</div>
					</div>
					<div id="Group_137">
						<div id="edit_icon_ipa" class="edit_icon">
							<svg class="edit_icon_ipb" viewBox="0 0 16.001 16">
								<path id="edit_icon_ipb" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
								</path>
							</svg>
						</div>
						<div id="x-circle-fill_ipb" class="x_circle_fill">
							<svg class="x-circle-fill_ipc" viewBox="0 0 16 16">
								<path id="x-circle-fill_ipc" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
								</path>
							</svg>
						</div>
					</div>
					<div id="Group_138">
						<div id="edit_icon_ipc" class="edit_icon">
							<svg class="edit_icon_ipd" viewBox="0 0 16.001 16">
								<path id="edit_icon_ipd" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
								</path>
							</svg>
						</div>
						<div id="x-circle-fill_ipd" class="x_circle_fill">
							<svg class="x-circle-fill_ipe" viewBox="0 0 16 16">
								<path id="x-circle-fill_ipe" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
								</path>
							</svg>
						</div>
					</div>
					<div id="Group_139">
						<div id="edit_icon_ipe" class="edit_icon">
							<svg class="edit_icon_ipf" viewBox="0 0 16.001 16">
								<path id="edit_icon_ipf" d="M 12.85400009155273 0.1459999978542328 C 12.65875053405762 -0.04919072985649109 12.34224987030029 -0.04919090867042542 12.14700031280518 0.1459997892379761 L 10.5 1.792999982833862 L 14.20699977874756 5.5 L 15.85400009155273 3.854000091552734 C 15.94804191589355 3.760195732116699 16.00089263916016 3.632827281951904 16.00089263916016 3.5 C 16.00089263916016 3.367172718048096 15.94804191589355 3.239804267883301 15.85400009155273 3.146000146865845 L 12.85400009155273 0.1460001468658447 Z M 13.5 6.206999778747559 L 9.793000221252441 2.5 L 3.292999982833862 9 L 3.5 9 C 3.776142358779907 9 4 9.223857879638672 4 9.5 L 4 10 L 4.5 10 C 4.776142597198486 10 5 10.22385787963867 5 10.5 L 5 11 L 5.5 11 C 5.776142597198486 11 6 11.22385787963867 6 11.5 L 6 12 L 6.5 12 C 6.776142597198486 12 7 12.22385787963867 7 12.5 L 7 12.70699977874756 L 13.5 6.206999778747559 Z M 6.032000064849854 13.67499923706055 C 6.010957717895508 13.61904811859131 6.000119686126709 13.55977725982666 5.999999523162842 13.5 L 6 13 L 5.5 13 C 5.223857402801514 13 5 12.77614212036133 5 12.5 L 5 12 L 4.5 12 C 4.223857402801514 12 4 11.77614212036133 4 11.5 L 4 11 L 3.5 11 C 3.223857641220093 11 3 10.77614212036133 3 10.5 L 3 10 L 2.5 10 C 2.440221071243286 9.999902725219727 2.380945920944214 9.98906421661377 2.325000286102295 9.968001365661621 L 2.146000146865845 10.14600086212158 C 2.098350048065186 10.19398593902588 2.060928821563721 10.25113868713379 2.03600025177002 10.31400108337402 L 0.03600025177001953 15.31400108337402 C -0.03834319114685059 15.49973201751709 0.005179375410079956 15.71189785003662 0.1466411948204041 15.85336017608643 C 0.288102924823761 15.99482154846191 0.5002692937850952 16.03834342956543 0.6860000491142273 15.9640007019043 L 5.686000347137451 13.9640007019043 C 5.748862743377686 13.93907165527344 5.806015014648438 13.90165138244629 5.854000568389893 13.85400104522705 L 6.032000541687012 13.67600059509277 Z">
								</path>
							</svg>
						</div>
						<div id="x-circle-fill_ipg" class="x_circle_fill">
							<svg class="x-circle-fill_iph" viewBox="0 0 16 16">
								<path id="x-circle-fill_iph" d="M 16 8 C 16 12.41827774047852 12.41827774047852 16 7.999999523162842 16 C 3.581721782684326 16 0 12.41827774047852 0 7.999999523162842 C 0 3.581722259521484 3.581721782684326 4.76837158203125e-07 7.999999523162842 0 C 12.41827774047852 0 16 3.581721782684326 16 7.999999523162842 Z M 5.354000091552734 4.645999908447266 C 5.158491134643555 4.450490951538086 4.841508865356445 4.450490951538086 4.645999908447266 4.645999908447266 C 4.450490951538086 4.841508865356445 4.450490951538086 5.158491134643555 4.645999908447266 5.354000091552734 L 7.293000221252441 8 L 4.645999908447266 10.64599990844727 C 4.450490951538086 10.84150791168213 4.450490951538086 11.15849113464355 4.645999908447266 11.35400009155273 C 4.841508388519287 11.54950904846191 5.158491134643555 11.54950904846191 5.354000091552734 11.35400009155273 L 8 8.706999778747559 L 10.64599990844727 11.35400009155273 C 10.84150886535645 11.54950904846191 11.15849113464355 11.54950904846191 11.35400009155273 11.35400009155273 C 11.54950904846191 11.15849113464355 11.54950904846191 10.84150886535645 11.35400009155273 10.64599990844727 L 8.706999778747559 8 L 11.35400009155273 5.354000091552734 C 11.54950904846191 5.158490657806396 11.54950904846191 4.841508388519287 11.35400009155273 4.645999431610107 C 11.15849113464355 4.450490951538086 10.84150791168213 4.450490951538086 10.64599990844727 4.646000385284424 L 8 7.293000221252441 L 5.354000091552734 4.645999908447266 Z">
								</path>
							</svg>
						</div>
					</div>
					<div id="Asset_List_ipi">
						<span>Asset List</span>
					</div>
					<div onclick="application.goToTargetView(event)" id="create_user_btn_ipj" class="create_user_btn">
						<svg class="Primary__007BFF_ipk">
							<rect id="Primary__007BFF_ipk" rx="5" ry="5" x="0" y="0" width="157" height="37">
							</rect>
						</svg>
						<div id="Create_new_asset_ipl">
							<span>Create new asset</span>
						</div>
					</div>
					<div id="pagination_ipm">
						<div id="pre_ipn" class="pre">
							<svg class="InputGroupBaseOutlineLeft_ipo">
								<rect id="InputGroupBaseOutlineLeft_ipo" rx="4" ry="4" x="0" y="0" width="90" height="38">
								</rect>
							</svg>
							<div id="Previous_ipp">
								<span>Previous</span>
							</div>
						</div>
						<div id="next_ipq" class="next">
							<svg class="InputGroupBaseOutlineLeft_ipr">
								<rect id="InputGroupBaseOutlineLeft_ipr" rx="0" ry="0" x="0" y="0" width="61" height="37">
								</rect>
							</svg>
							<div id="Next_ips">
								<span>Next</span>
							</div>
						</div>
						<div id="ID1_ipt" class="1">
							<svg class="InputGroupBaseOutlineLeft_ipu">
								<rect id="InputGroupBaseOutlineLeft_ipu" rx="0" ry="0" x="0" y="0" width="37" height="37">
								</rect>
							</svg>
							<div id="ID1_ipv">
								<span>1</span>
							</div>
						</div>
						<div id="ID2_ipw" class="2">
							<svg class="InputGroupBaseOutlineLeft_ipx">
								<rect id="InputGroupBaseOutlineLeft_ipx" rx="0" ry="0" x="0" y="0" width="37" height="37">
								</rect>
							</svg>
							<div id="ID2_ipy">
								<span>2</span>
							</div>
						</div>
						<div id="ID3_ipz" class="3">
							<svg class="InputGroupBaseOutlineLeft_ip">
								<rect id="InputGroupBaseOutlineLeft_ip" rx="0" ry="0" x="0" y="0" width="37" height="37">
								</rect>
							</svg>
							<div id="ID3_ip">
								<span>3</span>
							</div>
						</div>
					</div>
					<div id="narbav_ip">
						<svg class="Rectangle_329_ip">
							<rect id="Rectangle_329_ip" rx="0" ry="0" x="0" y="0" width="1920" height="72">
							</rect>
						</svg>
						<div id="Manage_Asset_ip">
							<span>Manage Asset</span>
						</div>
						<div id="account_ip" class="account">
							<div id="account_iqa" class="account">
								<div id="icondropdown_arrowdefault_ip" class="icon_dropdown_arrow_default">
									<svg class="DropdownButtonCarotDown_backgr_ip">
										<rect id="DropdownButtonCarotDown_backgr_ip" rx="0" ry="0" x="0" y="0" width="14" height="14">
										</rect>
									</svg>
									<svg class="icondropdown_arrow_ip" viewBox="0.023 -6 12 6">
										<path id="icondropdown_arrow_ip" d="M 0.02301025576889515 -6 L 12.02301120758057 -6 L 6.002416610717773 1.862645149230957e-09 L 0.02301025576889515 -6 Z">
										</path>
									</svg>
								</div>
								<div id="binhnv_iqa">
									<span>binhnv</span>
								</div>
							</div>
							<div id="log_out_iqb" class="log_out">
								<svg class="Path_1_iqc" viewBox="0 0 198 40">
									<path id="Path_1_iqc" d="M 0 0 L 198 0 L 198 40 L 0 40 L 0 0 Z">
									</path>
								</svg>
								<div id="Log_out_iqd">
									<span>Log out</span>
								</div>
							</div>
							<div onclick="application.goToTargetView(event)" id="change_pw_iqe" class="change_pw">
								<svg class="Path_1_iqf" viewBox="0 0 198 40">
									<path id="Path_1_iqf" d="M 0 0 L 198 0 L 198 40.00000381469727 L 0 40.00000381469727 L 0 0 Z">
									</path>
								</svg>
								<div id="Change_password_iqg">
									<span>Change password</span>
								</div>
							</div>
						</div>
					</div>
					<div id="Menu_iqh">
						<div onclick="application.goToTargetView(event)" id="Report_iqi" class="Report">
							<svg class="Path_1_iqj" viewBox="0 0 262 60">
								<path id="Path_1_iqj" d="M 0 0 L 262 0 L 262 60 L 0 60 L 0 0 Z">
								</path>
							</svg>
							<div id="Report_iqk">
								<span>Report</span>
							</div>
						</div>
						<div onclick="application.goToTargetView(event)" id="Request_for_Returning_iql" class="Request_for_Returning">
							<svg class="Path_1_iqm" viewBox="0 0 262 60">
								<path id="Path_1_iqm" d="M 0 0 L 262 0 L 262 60 L 0 60 L 0 0 Z">
								</path>
							</svg>
							<div id="Request_for_Returning_iqn">
								<span>Request for Returning</span>
							</div>
						</div>
						<div onclick="application.goToTargetView(event)" id="Manage_Assignment_iqo" class="Manage_Assignment">
							<svg class="Path_1_iqp" viewBox="0 0 262 60">
								<path id="Path_1_iqp" d="M 0 0 L 262 0 L 262 60 L 0 60 L 0 0 Z">
								</path>
							</svg>
							<div id="Manage_Assignment_iqq">
								<span>Manage Assignment</span>
							</div>
						</div>
						<div id="Manage_Asset_iqr" class="Manage_Asset">
							<svg class="Path_1_iqs" viewBox="0 0 262 60">
								<path id="Path_1_iqs" d="M 0 0 L 262 0 L 262 60 L 0 60 L 0 0 Z">
								</path>
							</svg>
							<div id="Manage_Asset_iqt">
								<span>Manage Asset</span>
							</div>
						</div>
						<div onclick="application.goToTargetView(event)" id="Manage_User_iqu" class="Manage_User">
							<svg class="Path_1_iqv" viewBox="0 0 262 60">
								<path id="Path_1_iqv" d="M 0 0 L 262 0 L 262 60 L 0 60 L 0 0 Z">
								</path>
							</svg>
							<div id="Manage_User_iqw">
								<span>Manage User</span>
							</div>
						</div>
						<div onclick="application.goToTargetView(event)" id="Home_iqx" class="Home">
							<svg class="Path_1_iqy" viewBox="0 0 262 60">
								<path id="Path_1_iqy" d="M 0 0 L 262 0 L 262 60 L 0 60 L 0 0 Z">
								</path>
							</svg>
							<div id="Home_iqz">
								<span>Home</span>
							</div>
						</div>
					</div>
					<div id="Search_bar_iq">
						{/* <svg className="Rectangle_336_iq">
							<rect id="Rectangle_336_iq" rx="5" ry="5" x="0" y="0" width="200" height="35">
							</rect>
						</svg> */}
						<input type="text" className="Rectangle_336_iq search-input"/>
						<svg class="Line_5_iq" viewBox="0 0 1 33">
							<path id="Line_5_iq" d="M 0 0 L 0 33">
							</path>
						</svg>
						<svg class="search_iq" viewBox="-0.001 0.002 16.001 15.998">
							<path id="search_iq" d="M 11.74199962615967 10.3439998626709 C 13.75034236907959 7.603466033935547 13.3092155456543 3.77855372428894 10.72976493835449 1.567129611968994 C 8.150315284729004 -0.6442947387695313 4.30290412902832 -0.4960470199584961 1.90126895904541 1.907307624816895 C -0.5003666877746582 4.310660362243652 -0.6458611488342285 8.158176422119141 1.567407608032227 10.73604393005371 C 3.780675888061523 13.31391143798828 7.605902671813965 13.75230312347412 10.34499931335449 11.74200057983398 L 10.34399890899658 11.74199962615967 C 10.37399864196777 11.7819995880127 10.40599918365479 11.81999969482422 10.44199848175049 11.85699939727783 L 14.2919979095459 15.70699882507324 C 14.68246269226074 16.09774017333984 15.31575584411621 16.09796333312988 15.70649719238281 15.70749855041504 C 16.09723854064941 15.3170337677002 16.09746170043945 14.68374061584473 15.70699787139893 14.29299926757813 L 11.85699844360352 10.4429988861084 C 11.82124614715576 10.4068078994751 11.78280258178711 10.37337875366211 11.74199867248535 10.34299850463867 Z M 12 6.5 C 12 9.537567138671875 9.537566184997559 12 6.5 12 C 3.4624342918396 12 1.000000476837158 9.537566184997559 1.000000476837158 6.5 C 1.000000476837158 3.4624342918396 3.462434530258179 1.000000476837158 6.500000953674316 1.000000476837158 C 9.537567138671875 1.000000476837158 12 3.462434530258179 12 6.500000953674316 Z">
							</path>
						</svg>
					</div>

					<div id="Filter_category_iq" class="Filter_category">
						<div id="Group_199_iq">
							<svg class="Rectangle_336_ira">
								<rect id="Rectangle_336_ira" rx="5" ry="5" x="0" y="0" width="180" height="35">
								</rect>
							</svg>
							<svg class="Line_5_ira" viewBox="0 0 1 33">
								<path id="Line_5_ira" d="M 0 0 L 0 33">
								</path>
							</svg>
						</div>
						<svg class="funnel-fill_irb" viewBox="1.5 1 13 13">
							<path id="funnel-fill_irb" d="M 1.49999988079071 1.464298129081726 C 1.49999988079071 1.207873582839966 1.723857641220093 0.9999999403953552 2.000000238418579 1 L 14.00000286102295 1 C 14.27614307403564 1 14.5 1.207873582839966 14.5 1.464298129081726 L 14.5 3.32149076461792 C 14.5 3.43591046333313 14.45443630218506 3.546375513076782 14.37205982208252 3.631580114364624 L 10.00000190734863 8.142763137817383 L 10.00000190734863 12.60745429992676 C 9.999837875366211 12.80721282958984 9.86209774017334 12.98448371887207 9.658001899719238 13.047607421875 L 6.658000946044922 13.97620391845703 C 6.505598545074463 14.02334022521973 6.338087558746338 13.99961280822754 6.207751274108887 13.91242599487305 C 6.077413558959961 13.82524013519287 6.000123023986816 13.68521404266357 6.000000476837158 13.53604984283447 L 6.000000476837158 8.142763137817383 L 1.628000020980835 3.63164210319519 C 1.545608043670654 3.546451568603516 1.500022053718567 3.435994148254395 1.49999988079071 3.32149076461792 L 1.49999988079071 1.464298129081726 Z">
							</path>
						</svg>
						<div id="Category_irc">
							<span>Category</span>
						</div>
						<div id="Filter_type_ird">
							<svg class="Rectangle_333_ire">
								<rect id="Rectangle_333_ire" rx="0" ry="0" x="0" y="0" width="169.375" height="113">
								</rect>
							</svg>
							<div id="staff_irf">
								<div id="Staff_irg">
									<span>Staff</span>
								</div>
								<svg class="check_irh">
									<rect id="check_irh" rx="5" ry="5" x="0" y="0" width="20" height="20">
									</rect>
								</svg>
							</div>
							<div id="admin_iri">
								<div id="Admin_irj">
									<span>Admin</span>
								</div>
								<svg class="check_irk">
									<rect id="check_irk" rx="5" ry="5" x="0" y="0" width="20" height="20">
									</rect>
								</svg>
							</div>
							<div id="all_irl">
								<div id="All_irm">
									<span>All</span>
								</div>
								<svg class="check_irn">
									<rect id="check_irn" rx="5" ry="5" x="0" y="0" width="20" height="20">
									</rect>
								</svg>
								<div id="iconcheck_iro" class="icon_check">
									<svg class="check_irp" viewBox="4.085 4.745 14 14">
										<path id="check_irp" d="M 15.88251972198486 5.22925853729248 C 16.37931823730469 4.592541694641113 17.1929931640625 4.582422256469727 17.69981956481934 5.206541061401367 C 18.20664978027344 5.830659866333008 18.21470642089844 6.852676868438721 17.71781730651855 7.489279270172119 L 10.87727165222168 18.22909164428711 C 10.63972759246826 18.55045890808105 10.30831336975098 18.73660850524902 9.959246635437012 18.74472999572754 C 9.610179901123047 18.75284767150879 9.273505210876465 18.58223915100098 9.026650428771973 18.27213668823242 L 4.494339942932129 12.57717704772949 C 4.150516510009766 12.17476177215576 4.008988380432129 11.56871318817139 4.125275611877441 10.9967794418335 C 4.241561889648438 10.42484664916992 4.59712028503418 9.978251457214355 5.052460670471191 9.832186698913574 C 5.507802963256836 9.686124801635742 5.990307807922363 9.8638916015625 6.310689926147461 10.29575061798096 L 9.898839950561523 14.80049419403076 L 15.8499641418457 5.276608467102051 C 15.86058139801025 5.25993537902832 15.87202930450439 5.244120597839355 15.88423347473145 5.229257583618164 Z">
										</path>
									</svg>
									<svg class="base_irq">
										<rect id="base_irq" rx="0" ry="0" x="0" y="0" width="0" height="0">
										</rect>
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div id="Filter_state_irr" class="Filter_state">
						<div id="Group_199_irs">
							<svg class="Rectangle_336_irt">
								<rect id="Rectangle_336_irt" rx="5" ry="5" x="0" y="0" width="185" height="35">
								</rect>
							</svg>
							<svg class="Line_5_iru" viewBox="0 0 1 33">
								<path id="Line_5_iru" d="M 0 0 L 0 33">
								</path>
							</svg>
						</div>
						<div id="Scroll_Group_1_irv">
							<svg class="funnel-fill_irw" viewBox="1.5 1 15 15">
								<path id="funnel-fill_irw" d="M 1.49999988079071 1.535728693008423 C 1.49999988079071 1.239854097366333 1.758297204971313 0.9999999403953552 2.076923131942749 1 L 15.92307758331299 1 C 16.24170112609863 1 16.49999809265137 1.239854097366333 16.49999809265137 1.535728693008423 L 16.49999809265137 3.678643465042114 C 16.49999809265137 3.81066632270813 16.44742393493652 3.938126087188721 16.35237503051758 4.036438941955566 L 11.307692527771 9.24165153503418 L 11.307692527771 14.39321804046631 C 11.30750370025635 14.62370872497559 11.14857292175293 14.8282527923584 10.91307735443115 14.90108776092529 L 7.451538562774658 15.9725456237793 C 7.275689601898193 16.02693367004395 7.08240795135498 15.99955558776855 6.932019710540771 15.89895534515381 C 6.781630516052246 15.79835605621338 6.692448616027832 15.63678741455078 6.692307472229004 15.464674949646 L 6.692307472229004 9.24165153503418 L 1.647692322731018 4.036510467529297 C 1.552624702453613 3.93821382522583 1.500025510787964 3.810762882232666 1.49999988079071 3.678643465042114 L 1.49999988079071 1.535728693008423 Z">
								</path>
							</svg>
						</div>
						<div id="State_irx">
							<span>State</span>
						</div>
						<div id="Filter_state_iry">
							<svg class="Rectangle_333_irz">
								<rect id="Rectangle_333_irz" rx="0" ry="0" x="0" y="0" width="173.333" height="113">
								</rect>
							</svg>
							<div id="staff_ir">
								<div id="Staff_ir">
									<span>Staff</span>
								</div>
								<svg class="check_ir">
									<rect id="check_ir" rx="5" ry="5" x="0" y="0" width="20" height="20">
									</rect>
								</svg>
							</div>
							<div id="admin_ir">
								<div id="Admin_ir">
									<span>Admin</span>
								</div>
								<svg class="check_isa">
									<rect id="check_isa" rx="5" ry="5" x="0" y="0" width="20" height="20">
									</rect>
								</svg>
							</div>
							<div id="all_ir">
								<div id="All_ir">
									<span>All</span>
								</div>
								<svg class="check_isb">
									<rect id="check_isb" rx="5" ry="5" x="0" y="0" width="20" height="20">
									</rect>
								</svg>
								<div onclick="application.goToTargetView(event)" id="iconcheck_ir" class="icon_check">
									<svg class="check_isc" viewBox="4.085 4.745 14 14">
										<path id="check_isc" d="M 15.88251972198486 5.22925853729248 C 16.37931823730469 4.592541694641113 17.1929931640625 4.582422256469727 17.69981956481934 5.206541061401367 C 18.20664978027344 5.830659866333008 18.21470642089844 6.852676868438721 17.71781730651855 7.489279270172119 L 10.87727165222168 18.22909164428711 C 10.63972759246826 18.55045890808105 10.30831336975098 18.73660850524902 9.959246635437012 18.74472999572754 C 9.610179901123047 18.75284767150879 9.273505210876465 18.58223915100098 9.026650428771973 18.27213668823242 L 4.494339942932129 12.57717704772949 C 4.150516510009766 12.17476177215576 4.008988380432129 11.56871318817139 4.125275611877441 10.9967794418335 C 4.241561889648438 10.42484664916992 4.59712028503418 9.978251457214355 5.052460670471191 9.832186698913574 C 5.507802963256836 9.686124801635742 5.990307807922363 9.8638916015625 6.310689926147461 10.29575061798096 L 9.898839950561523 14.80049419403076 L 15.8499641418457 5.276608467102051 C 15.86058139801025 5.25993537902832 15.87202930450439 5.244120597839355 15.88423347473145 5.229257583618164 Z">
										</path>
									</svg>
									<svg class="base_isb">
										<rect id="base_isb" rx="0" ry="0" x="0" y="0" width="0" height="0">
										</rect>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		)
	}
}
