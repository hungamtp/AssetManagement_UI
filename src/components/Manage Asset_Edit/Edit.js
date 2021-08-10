import React, { Component } from 'react'
import Navbar from "../Navbar";
import Menu from "../Menu";
import * as business from "../../constants/Business";
import './Assetedit.css'


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
                        <div id="Specification_fse">
                            <span>Specification</span>
                        </div>
                        <svg class="Rectangle_330_fsf">
                            <rect id="Rectangle_330_fsf" rx="5" ry="5" x="0" y="0" width="280" height="86">
                            </rect>
                        </svg>
                        <div id="Core_i5_8GB_RAM_750_GB_HDD_Win_fsg">
                            <span>Core i5, 8GB RAM, 750 GB HDD, Windows 8</span>
                        </div>
                    </div>
                    <div id="State_fsh">
                        <div id="state">
                            <div id="available" class="available">
                                <div id="Label_fsk">
                                    <span>Available</span>
                                </div>
                                <div id="Radio_fsl" class="Radio">
                                    <svg class="Oval_fsm" viewBox="0 0 16 16">
                                        <path id="Oval_fsm" d="M 8 0 C 12.41827774047852 0 16 3.581722259521484 16 8 C 16 12.41827774047852 12.41827774047852 16 8 16 C 3.581722259521484 16 0 12.41827774047852 0 8 C 0 3.581722259521484 3.581722259521484 0 8 0 Z">
                                        </path>
                                    </svg>
                                    <svg class="Ellipse_3_fsn">
                                        <ellipse id="Ellipse_3_fsn" rx="3" ry="3" cx="3" cy="3">
                                        </ellipse>
                                    </svg>
                                </div>
                            </div>
                            <div id="not_available" class="not_available">
                                <div id="Label_fsp">
                                    <span>Not available</span>
                                </div>
                                <div id="Radio_fsq" class="Radio">
                                    <svg class="Oval_fsr">
                                        <ellipse id="Oval_fsr" rx="8" ry="8" cx="8" cy="8">
                                        </ellipse>
                                    </svg>
                                </div>
                            </div>
                            <div id="waiting" class="waiting">
                                <div id="Label_fst">
                                    <span>Waiting for recycling</span>
                                </div>
                                <div id="Radio_fsu" class="Radio">
                                    <svg class="Oval_fsv">
                                        <ellipse id="Oval_fsv" rx="8" ry="8" cx="8" cy="8">
                                        </ellipse>
                                    </svg>
                                </div>
                            </div>
                            <div id="recycled" class="recycled">
                                <div id="Label_fsx">
                                    <span>Recycled</span>
                                </div>
                                <div id="Radio_fsy" class="Radio">
                                    <svg class="Oval_fsz">
                                        <ellipse id="Oval_fsz" rx="8" ry="8" cx="8" cy="8">
                                        </ellipse>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div id="State_fs">
                            <span>State</span>
                        </div>
                    </div>
                    <div id="Installed_Date">
                        <div id="Installed_Date_fs">
                            <span>Installed Date</span>
                        </div>
                        <svg class="Rectangle_330_fs">
                            <rect id="Rectangle_330_fs" rx="5" ry="5" x="0" y="0" width="280" height="35">
                            </rect>
                        </svg>
                        <div id="calendar-date-fill_fs">
                            <svg class="Path_2_fs" viewBox="0 0 16 10.246">
                                <path id="Path_2_fs" d="M 4 0.5 C 4 0.2238576114177704 3.776142358779907 0 3.5 0 C 3.223857641220093 0 3 0.2238576412200928 3 0.5 L 3 1 L 2 1 C 0.8954304456710815 1 -2.384185791015625e-07 1.89543080329895 0 3.000000238418579 L 0 4 L 16 4 L 16 3 C 16 1.895430445671082 15.10456943511963 1 14 1 L 13 1 L 13 0.5 C 13 0.2238576114177704 12.77614212036133 0 12.5 0 C 12.22385787963867 0 12 0.2238576412200928 12 0.5 L 12 1 L 4 1 L 4 0.5 Z M 9.402000427246094 10.24600028991699 C 10.02700042724609 10.24600028991699 10.58600044250488 9.76200008392334 10.58600044250488 9.065999984741211 C 10.58600044250488 8.234000205993652 10.05900001525879 7.835999965667725 9.426000595092773 7.835999965667725 C 8.840000152587891 7.835999965667725 8.258000373840332 8.222999572753906 8.258000373840332 9.045999526977539 C 8.258000373840332 9.86299991607666 8.801000595092773 10.24599933624268 9.402000427246094 10.24599933624268 Z">
                                </path>
                            </svg>
                            <svg class="Path_3_fs" viewBox="0 5 16 11">
                                <path id="Path_3_fs" d="M 16 14 L 16 5 L 0 5 L 0 14 C 0 15.10456943511963 0.8954305648803711 16 2 16 L 14 16 C 15.10456943511963 16 16 15.10456943511963 16 14 Z M 9.336000442504883 12.78999996185303 C 8.226000785827637 12.78999996185303 7.680000305175781 12.02299976348877 7.633000373840332 11.38300037384033 L 8.315999984741211 11.38300037384033 C 8.359000205993652 11.75300025939941 8.703000068664551 12.20300006866455 9.366999626159668 12.20300006866455 C 10.21099948883057 12.20300006866455 10.66799926757813 11.35500049591064 10.67199993133545 10.03899955749512 L 10.64499950408936 10.03899955749512 C 10.49199962615967 10.45299911499023 10.00799942016602 10.82899951934814 9.261999130249023 10.82899951934814 C 8.409998893737793 10.82899951934814 7.585999011993408 10.2189998626709 7.585999011993408 9.059000015258789 C 7.585999011993408 7.921999931335449 8.456998825073242 7.25 9.382999420166016 7.25 C 10.55499935150146 7.25 11.33599948883057 7.984000205993652 11.33599948883057 9.918000221252441 C 11.33599948883057 11.72300052642822 10.5939998626709 12.78900051116943 9.335999488830566 12.78900051116943 Z M 6.446000099182129 7.355000019073486 L 6.446000099182129 12.6870002746582 L 5.769999980926514 12.6870002746582 L 5.769999980926514 8.079000473022461 L 5.757999897003174 8.079000473022461 C 5.467999935150146 8.235000610351563 4.875 8.599000930786133 4.5 8.856000900268555 L 4.5 8.159999847412109 C 4.920842170715332 7.865143775939941 5.359328269958496 7.596308708190918 5.813000202178955 7.354998588562012 L 6.444999694824219 7.355000019073486 Z">
                                </path>
                            </svg>
                        </div>
                        <div id="ID20042020">
                            <span>20/04/2020</span>
                        </div>
                    </div>
                    <div id="Category_fs" class="Category">
                        <div id="Category_fta">
                            <span>Category</span>
                        </div>
                        <div id="Dropdown">
                            <svg class="Path_8_ftb" viewBox="0 0 280 35">
                                <path id="Path_8_ftb" d="M 6 0 L 275 0 C 277.7614135742188 0 280 2.238576173782349 280 5 L 280 30 C 280 32.76142501831055 277.7614135742188 35 275 35 L 5 35 C 2.238576173782349 35 0 32.76142501831055 0 30 L 0 5 C 0 2.238576173782349 3.238576173782349 0 6 0 Z">
                                </path>
                            </svg>
                            <div id="Laptop_ftc">
                                <span>Laptop</span>
                            </div>
                        </div>
                        <svg class="icondropdown_arrow_ftd" viewBox="0.023 -6 12 6">
                            <path id="icondropdown_arrow_ftd" d="M 0.02301025576889515 -6 L 12.02301120758057 -6 L 6.002416610717773 1.862645149230957e-09 L 0.02301025576889515 -6 Z">
                            </path>
                        </svg>
                    </div>
                    <div onclick="application.goToTargetView(event)" id="Cancel_btn_fte" class="Cancel_btn">
                        <svg class="Secondary__6C757D_ftf">
                            <rect id="Secondary__6C757D_ftf" rx="5" ry="5" x="0" y="0" width="82" height="37">
                            </rect>
                        </svg>
                        <div id="Cancel_ftg">
                            <span>Cancel</span>
                        </div>
                    </div>
                    <div id="Save_btn_fth" class="Save_btn">
                        <svg class="Primary__007BFF_fti">
                            <rect id="Primary__007BFF_fti" rx="5" ry="5" x="0" y="0" width="68" height="37">
                            </rect>
                        </svg>
                        <div id="Save_ftj">
                            <span>Save</span>
                        </div>
                    </div>
                    <div id="Name">
                        <div id="Name_ftl">
                            <span>Name</span>
                        </div>
                        <svg class="Rectangle_330_ftm">
                            <rect id="Rectangle_330_ftm" rx="5" ry="5" x="0" y="0" width="280" height="35">
                            </rect>
                        </svg>
                        <div id="Laptop_HP_ProBook_450_G1">
                            <span>Laptop HP ProBook 450 G1</span>
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}
