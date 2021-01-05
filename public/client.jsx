class App extends React.Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row classHeightFullVH">
                    <div className="col-xl-7 classBannerSection">
                        <div className="classImgBanner"></div>
                        <img className="classImgLogo" src="images/agmo-logo.png" alt="agmo-logo"></img>
                    </div>
                    <div className="col-xl-5 classLoginSection">
                        <div className="classHorizontalPadding classVerticalPadding">
                            <h2 className="classHeaderText">Hello,</h2>
                            <h2 className="classHeaderText">Welcome Back</h2>
                        </div>
                        <form className="classHorizontalPadding" action="" method="POST">
                            <div className="form-group">
                                <div className="classInputPadding classInputMinWidth">
                                    <input id="email" className="form-control" type="email" name="email" placeholder="testing@test.com" required></input>
                                </div>
                                <div className="classInputPadding classInputMinWidth">
                                    <input id="password" className="form-control" type="password" name="password" placeholder="password" minlength="8" required></input>
                                </div>
                                <div className="row">
                                    <div className="col-6 col-md-6 classCheckboxSection">
                                        <input className="smallFont" type="checkbox" id="rememberme" name="rememberme"></input>
                                        <label className="classCheckboxLabel smallFont" for="rememberme">Remember Me</label>
                                    </div>
                                    <div className="col-6 col-md-6 classCheckboxSection">
                                        <a href="#" target="_blank" className="classTextBlack smallFont classTextRight">Forgot your password?</a>
                                    </div>
                                </div>
                            </div>
                            <div className="classVerticalPadding">
                                <button id="submit-btn" className="btn btn-dark classDarkBtn" type="submit">Log In</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
};
ReactDOM.render(<App/>, document.getElementById("react"))