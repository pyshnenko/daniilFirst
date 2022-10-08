document.getElementById("image1").hidden=true;
let root=ReactDOM.createRoot(document.getElementById("content"));
let loginHidden = {error: true, general: false, makeBucket: true};
class Form extends React.Component {
    constructor() {
        super();
        this.state={url: 'spamigor.site', login: 'spamigor', pass: 'ugD6s2xz', theme: 'themes', min: true};
        this.setState(this.state);
    }
    handleURL(event) {
        this.state.url=event.target.value;
        this.setState(this.state);
    }
    handleLogin(event) {
        this.state.login=event.target.value;
        this.setState(this.state);
    }
    handlePass(event) {
        this.state.pass=event.target.value;
        this.setState(this.state);
    }
    handleTheme(event) {
        this.state.theme=event.target.value;
        this.setState(this.state);
    }
    handleEnter(event) {
        document.getElementById("image1").hidden=false;
        event.preventDefault();
        auth(this.state);
        this.setState(this.state);
    }
    render() {
        let form = loginHidden.general ?
            <div id="parent">{test(this.state)}</div> :
            <form className="workedForm" onSubmit={this.handleEnter.bind(this)} id="loginForm">
                <p className="formLable" style={{color: 'red'}} hidden={loginHidden.error}>Проверь ввод</p>
                <div className="formField">
                    <p className="formLable">URL</p>
                    <input className="formInput" value={this.state.url} onChange={this.handleURL.bind(this)} required />
                </div>
                <div className="formField">
                    <p className="formLable">Login</p>
                    <input className="formInput" value={this.state.login} onChange={this.handleLogin.bind(this)} required />
                </div>
                <div className="formField">
                    <p className="formLable">Password</p>
                    <input className="formInput" type="Password" value={this.state.pass} onChange={this.handlePass.bind(this)} required />
                </div>
                <div className="formField">
                    <p className="formLable">Theme prod</p>
                    <input className="formInput" value={this.state.theme} onChange={this.handleTheme.bind(this)} />
                </div>
                <input className="formButton" type="submit" value='Вход' />
            </form> ;
        let errForm = loginHidden.makeBucket ?
            <div></div> :
                <div className="workedForm">
                    <p className="formLable">Create bucket or object?</p>
                    <input className="formButton" type="submit" value='Yes' onClick={event => creatBorF('yes', event)} />
                    <input className="formButton" type="submit" value='No' onClick={event => creatBorF('no', event)} />
                </div>
        return <div>
            {form}{errForm}
        </div>
    }
}
rend();

