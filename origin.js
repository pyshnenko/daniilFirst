function test(buf) {
    var resources = [];
    var colors = [];

    var _loop = function _loop(key) {
        resources.push(React.createElement(
            "div",
            { className: "resources" },
            React.createElement(
                "p",
                { className: "formLable", id: "formLable" },
                key
            ),
            React.createElement("input", { className: "formInput", id: "formInput", value: data.resources[key], onChange: function onChange(event) {
                    return formChange(key, event);
                } })
        ));
    };

    for (var key in data.resources) {
        _loop(key);
    }var resourcesMin = resources.slice(0, 3);
    var resourcesT = buf.min ? resourcesMin : resources;
    colors = setColors(data.colors);
    var forms = React.createElement(
        "div",
        { className: "formAndButton" },
        React.createElement(
            "form",
            { id: "bigForm", onSubmit: function onSubmit(event) {
                    return onFormSave(event, 'send');
                } },
            React.createElement(
                "div",
                { className: "resources" },
                React.createElement(
                    "p",
                    { className: "formLable", id: "formLable" },
                    "company name"
                ),
                React.createElement("input", { className: "formInput", id: "formInput", value: data.company_name, onChange: function onChange(event) {
                        return formChange('company_name', event);
                    }, required: true })
            ),
            resourcesT,
            React.createElement(
                "button",
                { className: "formButton", onClick: function onClick(event) {
                        return openCloseListButton(buf, event);
                    } },
                buf.min ? 'Раскрыть' : 'Скрыть'
            ),
            React.createElement(
                "div",
                { id: "colors" },
                colors
            ),
            React.createElement("input", { className: "formButton", type: "submit", value: "Save" })
        )
    );
    var file1 = React.createRef();
    var file2 = React.createRef();
    var file3 = React.createRef();
    var faviconfiles = React.createElement(
        "form",
        { className: "formAndButton", onSubmit: function onSubmit(event) {
                return uploadForm(event, 'favicon', file1);
            }, method: "post" },
        React.createElement(
            "div",
            { className: "uploadLable" },
            React.createElement(
                "p",
                null,
                "Upload favicon"
            ),
            React.createElement("input", { id: "sendForm", className: "formButton", type: "file", name: "favicon", accept: "image/x-icon", ref: file1 })
        ),
        React.createElement("input", { className: "formButton", type: "submit" }),
        React.createElement("img", { className: "formImg", src: data.images.favicon })
    );
    var logofiles = React.createElement(
        "form",
        { className: "formAndButton", onSubmit: function onSubmit(event) {
                return uploadForm(event, 'flogo', file2);
            }, method: "post" },
        React.createElement(
            "div",
            { className: "uploadLable" },
            React.createElement(
                "p",
                null,
                "Upload logo"
            ),
            React.createElement("input", { id: "sendForm", className: "formButton", type: "file", name: "logo", accept: "image/*", ref: file2 })
        ),
        React.createElement("input", { className: "formButton", type: "submit" }),
        React.createElement("img", { className: "formImg", src: data.images.logo })
    );
    var shortLogofiles = React.createElement(
        "form",
        { className: "formAndButton", onSubmit: function onSubmit(event) {
                return uploadForm(event, 'slogo', file3);
            }, method: "post" },
        React.createElement(
            "div",
            { className: "uploadLable" },
            React.createElement(
                "p",
                null,
                "Upload short logo"
            ),
            React.createElement("input", { id: "sendForm", className: "formButton", type: "file", name: "shortLogo", accept: "image/*", ref: file3 })
        ),
        React.createElement("input", { className: "formButton", type: "submit" }),
        React.createElement("img", { className: "formImg", src: data.images.logo_mini })
    );
    document.getElementById("image1").hidden = true;
    return React.createElement(
        "div",
        { id: "total" },
        forms,
        React.createElement(
            "div",
            { id: "uploads" },
            faviconfiles,
            logofiles,
            shortLogofiles
        )
    );
}

function formChange(buf, event) {
    if (buf === 'company_name') {
        data.company_name = event.target.value;
        rend();
    } else if (buf.length > 2) {
        data.resources[buf] = event.target.value;
        rend();
    }
}

function setColors(buf) {
    var forExit = [];
    var inpKeys = [];

    var _loop2 = function _loop2(key) {
        if (getKeysCount(buf[key]) == 1) forExit.push(React.createElement(
            "div",
            { className: "primeColor" },
            React.createElement(
                "p",
                { className: "colorP" },
                key
            ),
            React.createElement("input", { type: "color",
                value: shextohex(data.colors[key].main), onChange: function onChange(event) {
                    return colorChange(key, 'main', event);
                } })
        ));else {
            var _loop3 = function _loop3(key2) {
                inpKeys.push(React.createElement(
                    "div",
                    { className: "seckondColor" },
                    React.createElement(
                        "p",
                        { className: "colorP", id: "colorPS" },
                        key2
                    ),
                    React.createElement("input", { type: "color",
                        value: shextohex(data.colors[key][key2]), onChange: function onChange(event) {
                            return colorChange(key, key2, event);
                        } })
                ));
            };

            for (var key2 in buf[key]) {
                _loop3(key2);
            }forExit.push(React.createElement(
                "div",
                { className: "primeColor" },
                React.createElement(
                    "p",
                    { className: "colorP" },
                    key
                ),
                inpKeys
            ));
            inpKeys = [];
        }
    };

    for (var key in buf) {
        _loop2(key);
    }return forExit;
}
function colorChange(buf, buf2, event) {
    if (buf.length > 2) {
        data.colors[buf][buf2] = event.target.value;
        rend();
    }
}
function onFormSave(event, operat) {
    event.preventDefault();
    if (operat === 'send') jsonSave();
}
var ghjjk = void 0;
function uploadForm(event, arg, file) {
    console.log(file.current.files);
    ghjjk = file;
    event.preventDefault();
    imageSave(event, arg, file);
}

function openCloseListButton(buf, event) {
    buf.min = !buf.min;
    rend();
}

function rend() {
    document.getElementById("image1").hidden = false;
    root.render(React.createElement(Form, null));
    document.getElementById("image1").hidden = true;
}