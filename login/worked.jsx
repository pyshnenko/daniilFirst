document.getElementById("image1").hidden=true;
let root=ReactDOM.createRoot(document.getElementById("content"));
let loginHidden = {error: true, general: false, makeBucket: true, savedData: {button: (localStorage.data?false:true), list: true}};
class Form extends React.Component {
    constructor() {
        super();
        this.state={url: '', port: '', ssl: true, login: '', pass: '', theme: '', min: true, folder: ''};
        this.setState(this.state);
    }
    handleURL(event) {
        this.state.url=event.target.value;
        this.setState(this.state);
    }
    handlePort(event) {
        if ((Number(event.target.value))||(event.target.value=='')) this.state.port=event.target.value;
        this.setState(this.state);
    }
    handleSSL(event) {
        this.state.ssl=!this.state.ssl;
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
    handleFolder(event) {
        this.state.folder=event.target.value;
        this.setState(this.state);
    }
    handleEnter(event) {
        document.getElementById("image1").hidden=false;
        event.preventDefault();
        auth(this.state);
        this.setState(this.state);
    }
    handleSavedListGeneral(event) {
        loginHidden.savedData.list=!loginHidden.savedData.list;
        this.setState(this.state);
    }
    savedListCheck(event,index) {
        console.log(index);
        let numb=index;
        let authBuf=JSON.parse(localStorage.data);
        if (numb == 134568) localStorage.clear();
        else {
            this.state.url=authBuf[numb].url;
            this.state.port=authBuf[numb].port;
            this.state.ssl=authBuf[numb].ssl;
            this.state.login=authBuf[numb].login;
            this.state.pass=authBuf[numb].pass;
            this.state.theme=authBuf[numb].theme;
            this.state.folder=authBuf[numb].folder;
        }
        this.setState(this.state);
    }
    render() {
        let listSavedDataBuf=localStorage.data?JSON.parse(localStorage.data):'';
        let listSavedData=[];
        if (listSavedDataBuf!='') {
            listSavedData=listSavedDataBuf.map((item,index)=>
                <input className="formButton" type="submit" value={item.url} onClick={event=>this.savedListCheck(event,index)} />)
            listSavedData.push(<input className="formButton" type="submit" value="Очистить" onClick={event=>this.savedListCheck(event,134568)} />);
        }
        let form = loginHidden.general ?
            <div id="parent">{test(this.state)}</div> :
            <form className="workedForm" onSubmit={this.handleEnter.bind(this)} id="loginForm">
                <p className="formLable" style={{color: 'red'}} hidden={loginHidden.error}>Проверь ввод</p>
                <div className="formField">
                    <p className="formLable">URL</p>
                    <input className="formInput" value={this.state.url} onChange={this.handleURL.bind(this)} required />
                </div>
                <div className="formField">
                    <p className="formLable">port</p>
                    <input className="formInput" value={this.state.port} onChange={this.handlePort.bind(this)} />
                </div>
                <div className="formField" id="checkbaboxPlace">
                    <p className="formLable">use SSL</p>
                    <input type='checkbox' className="formInput" checked={this.state.ssl} onChange={this.handleSSL.bind(this)} />
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
                <div className="formField">
                    <p className="formLable">folder</p>
                    <input className="formInput" value={this.state.folder} onChange={this.handleFolder.bind(this)} />
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
        let openStorageDataList = loginHidden.savedData.list ? <div></div> : <div className="openStorageDataList">
            {listSavedData}
        </div>;
        let openStorageData = ((loginHidden.general)||(loginHidden.savedData.button)) ?
            <div></div> :
                <div className="openStorageData">
                    <input className="formButton" type="submit" value='Saved logins' onClick={event => this.handleSavedListGeneral(event)} />
                    {openStorageDataList}
                </div>
        return <div>
            {openStorageData}{form}{errForm}
        </div>
    }
}
rend();

