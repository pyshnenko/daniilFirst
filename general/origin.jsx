function test(buf) {
    let resources = [];
    let colors = [];
    for (let key in data.resources)
        resources.push(
            <div className="resources">
                <p className="formLable" id="formLable">{key}</p>
                <input className="formInput" id="formInput" value={data.resources[key]} onChange={event => formChange(key, event)} />
            </div>);
    colors=setColors(data.colors);
    let forms = <div className="formAndButton">
            <form id="bigForm" onSubmit={event => onFormSave(event)}>
                <div className="resources">
                    <p className="formLable" id="formLable">company name</p>
                    <input className="formInput" id="formInput" value={data.company_name} onChange={event => formChange('company_name', event)} required />
                </div>
                {resources}
                <div id="colors">{colors}</div>
                <input className="formButton" type="submit" value='Save' />
            </form>
        </div>;
    let faviconfiles = <form className="formAndButton" onSubmit={event => uploadForm(event)}>
        <div className="uploadLable"><p>Upload favicon</p><input id="sendForm" className="formButton" type="file" /></div>
            <input className="formButton" type="submit" /></form>
    let logofiles = <form className="formAndButton" onSubmit={event => uploadForm(event)}>
        <div className="uploadLable"><p>Upload logo</p><input id="sendForm" className="formButton" type="file" /></div>
            <input className="formButton" type="submit" /></form>
    let shortLogofiles = <form className="formAndButton" onSubmit={event => uploadForm(event)}>
        <div className="uploadLable"><p>Upload short logo</p><input id="sendForm" className="formButton" type="file" /></div>
            <input className="formButton" type="submit" /></form>
    document.getElementById("image1").hidden=true;
    return <div id="total">{forms}<div id="uploads">{faviconfiles}{logofiles}{shortLogofiles}</div></div>
}

function formChange(buf, event) {
    if (buf==='company_name') {
        data.company_name=event?.target.value;
        root.render(<Form />);
    }
    else if (buf.length >2) {
        data.resources[buf]=event?.target.value;
        root.render(<Form />);
    }
}

function setColors(buf) {
    let forExit = [];
    let inpKeys = [];
    for (let key in buf)
        if (getKeysCount(buf[key])==1) forExit.push(<div className="primeColor"><p className="colorP">{key}</p><input type="color" value={data.colors[key].main} 
                onChange={event => colorChange(key, 'main', event)} /></div>);
        else  {
            for (let key2 in buf[key]) inpKeys.push(<div className="seckondColor"><p className="colorP" id="colorPS">{key2}</p><input type="color" value={data.colors[key][key2]} 
                onChange={event => colorChange(key, key2, event)} /></div>)
            forExit.push(<div className="primeColor"><p className="colorP">{key}</p>{inpKeys}</div>);
            inpKeys=[];
        }
    return forExit;
}

function colorChange(buf, buf2, event) {
    if (buf.length>2) {
        data.colors[buf][buf2]=event?.target.value;
        root.render(<Form />);
    }
}
function onFormSave(event) {
    event.preventDefault();
    console.log('save');
}

function uploadForm(event) {
    event.preventDefault();
    console.log('upload');
}