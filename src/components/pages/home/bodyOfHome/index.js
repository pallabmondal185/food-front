import React from 'react'

const index = () => {
    return (
        <div>
            <div classNAme="booking">
                <div classNAme="container">
                    <div classNAme="row align-items-center">
                        <div classNAme="col-lg-7">
                            <div classNAme="booking-content">
                                <div classNAme="section-header">
                                    <p>Book A Table</p>
                                    <h2>Book Your Table For Private Dinners & Happy Hours</h2>
                                </div>
                                <div classNAme="about-text">
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem.
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec pretium mi. Curabitur facilisis ornare velit non vulputate. Aliquam metus tortor, auctor id gravida condimentum, viverra quis sem. Curabitur non nisl nec nisi scelerisque maximus. Aenean consectetur convallis porttitor. Aliquam interdum at lacus non blandit.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div classNAme="col-lg-5">
                            <div classNAme="booking-form">
                                <form>
                                    <div classNAme="control-group">
                                        <div classNAme="input-group">
                                            <input type="text" classNAme="form-control" placeholder="Name" required="required" />
                                            <div classNAme="input-group-append">
                                                <div classNAme="input-group-text"><i classNAme="far fa-user"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div classNAme="control-group">
                                        <div classNAme="input-group">
                                            <input type="email" classNAme="form-control" placeholder="Email" required="required" />
                                            <div classNAme="input-group-append">
                                                <div classNAme="input-group-text"><i classNAme="far fa-envelope"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div classNAme="control-group">
                                        <div classNAme="input-group">
                                            <input type="text" classNAme="form-control" placeholder="Mobile" required="required" />
                                            <div classNAme="input-group-append">
                                                <div classNAme="input-group-text"><i classNAme="fa fa-mobile-alt"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div classNAme="control-group">
                                        <div classNAme="input-group date" id="date" data-target-input="nearest">
                                            <input type="text" classNAme="form-control datetimepicker-input" placeholder="Date" data-target="#date" data-toggle="datetimepicker" />
                                            <div classNAme="input-group-append" data-target="#date" data-toggle="datetimepicker">
                                                <div classNAme="input-group-text"><i classNAme="far fa-calendar-alt"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div classNAme="control-group">
                                        <div classNAme="input-group time" id="time" data-target-input="nearest">
                                            <input type="text" classNAme="form-control datetimepicker-input" placeholder="Time" data-target="#time" data-toggle="datetimepicker" />
                                            <div classNAme="input-group-append" data-target="#time" data-toggle="datetimepicker">
                                                <div classNAme="input-group-text"><i classNAme="far fa-clock"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div classNAme="control-group">
                                        <div classNAme="input-group">
                                            <select classNAme="custom-select form-control">
                                                <option selected>Guest</option>
                                                <option value="1">1 Guest</option>
                                                <option value="2">2 Guest</option>
                                                <option value="3">3 Guest</option>
                                                <option value="4">4 Guest</option>
                                                <option value="5">5 Guest</option>
                                                <option value="6">6 Guest</option>
                                                <option value="7">7 Guest</option>
                                                <option value="8">8 Guest</option>
                                                <option value="9">9 Guest</option>
                                                <option value="10">10 Guest</option>
                                            </select>
                                            <div classNAme="input-group-append">
                                                <div classNAme="input-group-text"><i classNAme="fa fa-chevron-down"></i></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <button classNAme="btn custom-btn" type="submit">Book Now</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default index
