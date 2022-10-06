document.getElementById("image1").hidden=true;
let root=ReactDOM.createRoot(document.getElementById("content"));
class Form extends React.Component {
    constructor() {
        super();
        this.state={url: '', login: '', pass: '', loginHidden: {general: false, error: true}, min: true};
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
        if (auth(this.state)) {
            this.state.loginHidden={error: true, general: true};
            document.getElementById("image1").hidden=this.state.loginHidden.error;
        }
        else 
            this.state.loginHidden.error=false;
        this.setState(this.state);
    }
    render() {
        let form = this.state.loginHidden.general ?
            <div id="parent">{test(this.state)}</div> :
            <form className="workedForm" onSubmit={this.handleEnter.bind(this)} id="loginForm">
                <p className="formLable" style={{color: 'red'}} hidden={this.state.loginHidden.error}>Проверь ввод</p>
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
                    <input className="formInput" value={this.state.theme} onChange={this.handleTheme.bind(this)} required />
                </div>
                <input className="formButton" type="submit" value='Вход' />
            </form> ;
        return <div>
            {form}
        </div>
    }
}
rend();

