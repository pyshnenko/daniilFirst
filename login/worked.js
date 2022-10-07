var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

document.getElementById("image1").hidden = true;
var root = ReactDOM.createRoot(document.getElementById("content"));

var Form = function (_React$Component) {
    _inherits(Form, _React$Component);

    function Form() {
        _classCallCheck(this, Form);

        var _this = _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).call(this));

        _this.state = { url: '', login: '', pass: '', loginHidden: { general: false, error: true }, min: true };
        return _this;
    }

    _createClass(Form, [{
        key: "handleURL",
        value: function handleURL(event) {
            this.state.url = event.target.value;
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
        key: "handleEnter",
        value: function handleEnter(event) {
            document.getElementById("image1").hidden = false;
            event.preventDefault();
            if (auth(this.state)) {
                this.state.loginHidden = { error: true, general: true };
                document.getElementById("image1").hidden = this.state.loginHidden.error;
            } else this.state.loginHidden.error = false;
            this.setState(this.state);
        }
    }, {
        key: "render",
        value: function render() {
            var form = this.state.loginHidden.general ? React.createElement(
                "div",
                { id: "parent" },
                test(this.state)
            ) : React.createElement(
                "form",
                { className: "workedForm", onSubmit: this.handleEnter.bind(this), id: "loginForm" },
                React.createElement(
                    "p",
                    { className: "formLable", style: { color: 'red' }, hidden: this.state.loginHidden.error },
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
                    React.createElement("input", { className: "formInput", value: this.state.theme, onChange: this.handleTheme.bind(this), required: true })
                ),
                React.createElement("input", { className: "formButton", type: "submit", value: "\u0412\u0445\u043E\u0434" })
            );
            return React.createElement(
                "div",
                null,
                form
            );
        }
    }]);

    return Form;
}(React.Component);

rend();