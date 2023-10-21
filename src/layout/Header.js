import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import { ReactComponent as Add } from "../assets/images/add.svg";
import { ReactComponent as Close } from "../assets/images/close.svg";
const Header = ()=>{
    return (
        <header id="header">
            {/* <Routes>
                <Route path="/booking"> */}
                    <div className="header_inner">
                        <div className="header_inner_item ancor_box">
                            <Link to="/AddBooking" className="ancor_wrapper ">
                                <p className="ancor_item">
                                    <Add />
                                </p>
                                <p className="ancor_item add_btn_text">
                                    New Reservation
                                </p>
                            </Link>
                        </div>
                        <div className="header_inner_item title_box">
                            <p className="header_title">Reservation</p>
                            <p className="header_title_item_count_box">5</p>
                        </div>
                        <div className="header_inner_item exit_box">
                            <p>
                                <Close />
                            </p>
                        </div>
                    </div>
                {/* </Route>
                <Route path="/addBooking">
                    <h2>어바웃</h2>
                </Route>
                <Route path="/editBooking">
                    <h2>홈</h2>
                </Route>
            </Routes> */}
        </header>
    );
}

export default Header;