import React from 'react'

export function Form(props) {
    let { name, label, type, min, max, onChange, inputMode, values, value,onChangeCurrency, onChangeCheckbox } = props;
    // console.log({value});
    if (type === 'text') {
        return (
            <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor={name}>{label}</label>
                <div className="col-sm-10">
                    <input name={name} type="type" className="form-control" id={name} inputMode={inputMode || 'text'} placeholder={label} onChange={onChange} value={value} />
                </div>
            </div>
        )
    } else if (type === 'number') {
        return (
            <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor={name}>{label}</label>
                <div className="col-sm-10">
                    <input name={name} type="tel" pattern="[0-9]{X,1}" maxLength="1" className="form-control" id={name} min={min} max={max} placeholder={label} onChange={onChange} required={true} value={value} />
                </div>
            </div>
        )
    } 
    else if (type === 'money'){
        return (
            <div className="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor={name}>{label}</label>
                <div className="col-sm-10">
                    <input name={name} type="text" className="form-control" id={name} inputMode={inputMode || 'text'} placeholder={label} onChange={onChangeCurrency} required={true} value={value}/>
                </div>
            </div>
        )
    } 
    else if (type === 'textarea') {
        return (
            <div className="form-group row">
                <label htmlFor={label} className="col-sm-2 col-form-label">{label}</label>
                <div className="col-sm-10">
                    <textarea className="form-control" id={name} name={name} inputMode={inputMode || 'text'} placeholder={label} onChange={onChange} rows="5" value={value} />
                </div>
            </div>
        )
    } else if (type === 'checkbox') {
        // console.log('values >', props.values);
        // console.log( props.checked );
        return (
            <div className="form-group row">
                <label htmlFor={label} className="col-sm-2 col-form-label">{label}</label>
                {props.values.map((value, index) => (
                    <div key={index} className="col">
                        <div  className="custom-control custom-checkbox col">
                            <input type="checkbox" className="custom-control-input" id={props.nomor[index]} value={value} checked={props.checked.includes(value.toString())} onChange={event => onChangeCheckbox(event, name)} />
                            <label className="custom-control-label" htmlFor={props.nomor[index]}>{props.options[index]}</label>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
    return (
        <div></div>
    )
}