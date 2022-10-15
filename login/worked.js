var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

document.getElementById("image1").hidden = true;
var root = ReactDOM.createRoot(document.getElementById("content"));
var loginHidden = { error: true, general: false, makeBucket: true, savedData: { button: localStorage.data ? false : true, list: true } };

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form() {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this));

        _this.state = { url: '', port: '', ssl: true, login: '', pass: '', theme: '', min: true, folder: '' };
        _this.setState(_this.state);
        return _this;
    }

    _createClass(Form, [{
        key: "handleURL",
        value: function handleURL(event) {
            this.state.url = event.target.value;
            this.setState(this.state);
        }
    }, {
        key: "handlePort",
        value: function handlePort(event) {
            if (Number(event.target.value) || event.target.value == '') this.state.port = event.target.value;
            this.setState(this.state);
        }
    }, {
        key: "handleSSL",
        value: function handleSSL(event) {
            this.state.ssl = !this.state.ssl;
            this.setState(this.state);
        }
    }, {
        key: "handleLogin",
        value: function handleLogin(event) {
            this.state.login = event.target.value;
            this.setState(this.state);
        }
    }, {
        key: "handlePass",
        value: function handlePass(event) {
            this.state.pass = event.target.value;
            this.setState(this.state);
        }
    }, {
        key: "handleTheme",
        value: function handleTheme(event) {
            this.state.theme = event.target.value;
            this.setState(this.state);
        }
    }, {
        key: "handleFolder",
        value: function handleFolder(event) {
            this.state.folder = event.target.value;
            this.setState(this.state);
        }
    }, {
        key: "handleEnter",
        value: function handleEnter(event) {
            document.getElementById("image1").hidden = false;
            event.preventDefault();
            auth(this.state);
            this.setState(this.state);
        }
    }, {
        key: "handleSavedListGeneral",
        value: function handleSavedListGeneral(event) {
            loginHidden.savedData.list = !loginHidden.savedData.list;
            this.setState(this.state);
        }
    }, {
        key: "savedListCheck",
        value: function savedListCheck(event, index) {
            console.log(index);
            var numb = index;
            var authBuf = JSON.parse(localStorage.data);
            if (numb == 134568) localStorage.clear();else {
                this.state.url = authBuf[numb].url;
                this.state.port = authBuf[numb].port;
                this.state.ssl = authBuf[numb].ssl;
                this.state.login = authBuf[numb].login;
                this.state.pass = authBuf[numb].pass;
                this.state.theme = authBuf[numb].theme;
                this.state.folder = authBuf[numb].folder;
            }
            this.setState(this.state);
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            var listSavedDataBuf = localStorage.data ? JSON.parse(localStorage.data) : '';
            var listSavedData = [];
            if (listSavedDataBuf != '') {
                listSavedData = listSavedDataBuf.map(function (item, index) {
                    return React.createElement("input", { className: "formButton", type: "submit", value: item.url, onClick: function onClick(event) {
                            return _this2.savedListCheck(event, index);
                        } });
                });
                listSavedData.push(React.createElement("input", { className: "formButton", type: "submit", value: "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u044C", onClick: function onClick(event) {
                        return _this2.savedListCheck(event, 134568);
                    } }));
            }
            var form = loginHidden.general ? React.createElement(
                "div",
                { id: "parent" },
                test(this.state)
            ) : React.createElement(
                "form",
                { className: "workedForm", onSubmit: this.handleEnter.bind(this), id: "loginForm" },
                React.createElement(
                    "p",
                    { className: "formLable", style: { color: 'red' }, hidden: loginHidden.error },
                    "\u041F\u0440\u043E\u0432\u0435\u0440\u044C \u0432\u0432\u043E\u0434"
                ),
                React.createElement(
                    "div",
                    { className: "formField" },
                    React.createElement(
                        "p",
                        { className: "formLable" },
                        "URL"
                    ),
                    React.createElement("input", { className: "formInput", value: this.state.url, onChange: this.handleURL.bind(this), required: true })
                ),
                React.createElement(
                    "div",
                    { className: "formField" },
                    React.createElement(
                        "p",
                        { className: "formLable" },
                        "port"
                    ),
                    React.createElement("input", { className: "formInput", value: this.state.port, onChange: this.handlePort.bind(this) })
                ),
                React.createElement(
                    "div",
                    { className: "formField", id: "checkbaboxPlace" },
                    React.createElement(
                        "p",
                        { className: "formLable" },
                        "use SSL"
                    ),
                    React.createElement("input", { type: "checkbox", className: "formInput", checked: this.state.ssl, onChange: this.handleSSL.bind(this) })
                ),
                React.createElement(
                    "div",
                    { className: "formField" },
                    React.createElement(
                        "p",
                        { className: "formLable" },
                        "Login"
                    ),
                    React.createElement("input", { className: "formInput", value: this.state.login, onChange: this.handleLogin.bind(this), required: true })
                ),
                React.createElement(
                    "div",
                    { className: "formField" },
                    React.createElement(
                        "p",
                        { className: "formLable" },
                        "Password"
                    ),
                    React.createElement("input", { className: "formInput", type: "Password", value: this.state.pass, onChange: this.handlePass.bind(this), required: true })
                ),
                React.createElement(
                    "div",
                    { className: "formField" },
                    React.createElement(
                        "p",
                        { className: "formLable" },
                        "Theme prod"
                    ),
                    React.createElement("input", { className: "formInput", value: this.state.theme, onChange: this.handleTheme.bind(this) })
                ),
                React.createElement(
                    "div",
                    { className: "formField" },
                    React.createElement(
                        "p",
                        { className: "formLable" },
                        "folder"
                    ),
                    React.createElement("input", { className: "formInput", value: this.state.folder, onChange: this.handleFolder.bind(this) })
                ),
                React.createElement("input", { className: "formButton", type: "submit", value: "\u0412\u0445\u043E\u0434" })
            );
            var errForm = loginHidden.makeBucket ? React.createElement("div", null) : React.createElement(
                "div",
                { className: "workedForm" },
                React.createElement(
                    "p",
                    { className: "formLable" },
                    "Create bucket or object?"
                ),
                React.createElement("input", { className: "formButton", type: "submit", value: "Yes", onClick: function onClick(event) {
                        return creatBorF('yes', event);
                    } }),
                React.createElement("input", { className: "formButton", type: "submit", value: "No", onClick: function onClick(event) {
                        return creatBorF('no', event);
                    } })
            );
            var openStorageDataList = loginHidden.savedData.list ? React.createElement("div", null) : React.createElement(
                "div",
                { className: "openStorageDataList" },
                listSavedData
            );
            var openStorageData = loginHidden.general || loginHidden.savedData.button ? React.createElement("div", null) : React.createElement(
                "div",
                { className: "openStorageData" },
                React.createElement("input", { className: "formButton", type: "submit", value: "Saved logins", onClick: function onClick(event) {
                        return _this2.handleSavedListGeneral(event);
                    } }),
                openStorageDataList
            );
            return React.createElement(
                "div",
                null,
                openStorageData,
                form,
                errForm
            );
        }
    }]);

    return Form;
}(React.Component);

rend();