import React, { useState } from 'react';

export default function AddProperty(props) {
    const [indexes, setIndexes] = useState([]);
    const [counter, setCounter] = useState(1);
    const [maxProperty,setMaxProperty] = useState(false)
    const addProperty = () => {
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
        if (indexes.length !== 0) {
            if (indexes.reduce((a, b) => Math.max(a, b)) === 5) {
                setMaxProperty(true)
            }
        }
    };
    const removeProperty = (index,e) => {
        setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setCounter(prevCounter => prevCounter - 1);
        //追加ボタンを有効化
        if (indexes.reduce((a, b) => Math.max(a, b)) !== 5) {
            setMaxProperty(false)
        }
        //stateに登録されたデータを空にする
        switch (index) {
            case 1:
                props.setProperty1({
                    building_use: '',
                    building_address:'',
                    building_square_meters:'',
                    building_price:'',
                    building_structure:'',
                    building_built_year:'',
                    property_borrowing_amount:'',
                    building_income:'',
                    borrowing_amount:'',
                    building_remaining_period:'',
                    repayment_slip: '',
                    tax_payment_slip: '',
                    copy_of_register:''
                });
                props.setRepaymentSlip1('');
                props.setTaxPaymentSlip1('');
                props.setCopyOfRegister1('');
                break;
            case 2:
                props.setProperty2({
                    building_use: '',
                    building_address:'',
                    building_square_meters:'',
                    building_price:'',
                    building_structure:'',
                    building_built_year:'',
                    property_borrowing_amount:'',
                    building_income:'',
                    borrowing_amount:'',
                    building_remaining_period:'',
                    repayment_slip: '',
                    tax_payment_slip: '',
                    copy_of_register:''
                });
                props.setRepaymentSlip1('');
                props.setTaxPaymentSlip2('');
                props.setCopyOfRegister2('');
                break;
            case 3:
                props.setProperty3({
                    building_use: '',
                    building_address:'',
                    building_square_meters:'',
                    building_price:'',
                    building_structure:'',
                    building_built_year:'',
                    property_borrowing_amount:'',
                    building_income:'',
                    borrowing_amount:'',
                    building_remaining_period:'',
                    repayment_slip: '',
                    tax_payment_slip: '',
                    copy_of_register:''
                });
                props.setRepaymentSlip3('');
                props.setTaxPaymentSlip3('');
                props.setCopyOfRegister3('');
              break;
            case 4:
                props.setProperty4({
                    building_use: '',
                    building_address:'',
                    building_square_meters:'',
                    building_price:'',
                    building_structure:'',
                    building_built_year:'',
                    property_borrowing_amount:'',
                    building_income:'',
                    borrowing_amount:'',
                    building_remaining_period:'',
                    repayment_slip: '',
                    tax_payment_slip: '',
                    copy_of_register:''
                });
                props.setRepaymentSlip4('');
                props.setTaxPaymentSlip4('');
                props.setCopyOfRegister4('');
              break;
            case 5:
                props.setProperty5({
                    building_use: '',
                    building_address:'',
                    building_square_meters:'',
                    building_price:'',
                    building_structure:'',
                    building_built_year:'',
                    property_borrowing_amount:'',
                    building_income:'',
                    borrowing_amount:'',
                    building_remaining_period:'',
                    repayment_slip: '',
                    tax_payment_slip: '',
                    copy_of_register:''
                });
                props.setRepaymentSlip5('');
                props.setTaxPaymentSlip5('');
                props.setCopyOfRegister5('');
              break;
            case 6:
                props.setProperty6({
                    building_use: '',
                    building_address:'',
                    building_square_meters:'',
                    building_price:'',
                    building_structure:'',
                    building_built_year:'',
                    property_borrowing_amount:'',
                    building_income:'',
                    borrowing_amount:'',
                    building_remaining_period:'',
                    repayment_slip: '',
                    tax_payment_slip: '',
                    copy_of_register:''
                });
                props.setRepaymentSlip6('');
                props.setTaxPaymentSlip6('');
                props.setCopyOfRegister6('');
              break;
        }
    };
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingFour">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseThree">
                保有不動産<br />
              </button>
            </h2>
            <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                {indexes.map(index => {
                    //編集途中のデータをvalueにセットするために変数にオブジェクトを代入
                    let fieldName;
                    let propertyError;
                    switch (index) {
                    case 1:
                        fieldName = props.property1;
                        propertyError = props.errorMessage1;
                        break;
                    case 2:
                        fieldName = props.property2;
                        propertyError = props.errorMessage2;
                        break;
                    case 3:
                        fieldName = props.property3;
                        propertyError = props.errorMessage3;
                        break;
                    case 4:
                        fieldName = props.property4;
                        propertyError = props.errorMessage4;
                        break;
                    case 5:
                        fieldName = props.property5;
                        propertyError = props.errorMessage5;
                        break;
                    case 6:
                        fieldName = props.property6;
                        propertyError = props.errorMessage6;
                        break;
                    }
                    return (
                        <div className="card mb-4" name={`property${index}`} key={`property${index}`}>
                            <div className="card-header">{index}棟目　<button type="button" onClick={(e) => removeProperty(index, e)}>Remove</button></div>
                            <div className="card-body">
                                <div className="pb-3">用途 (アパート他)<br />
                                    <input type="text" name="building_use" className="form-control" onChange={(e) => props.propertyInfoChange(index, e)} value={fieldName.building_use} />{propertyError.building_use}
                                </div>
                                <div className="pb-3">所在(住居表示)<br />
                                    <input type="text" name="building_address" className="form-control" onChange={(e) => props.propertyInfoChange(index, e)} value={fieldName.building_address} />{propertyError.building_address}
                                </div>
                                <div className="pb-3">面積<br />
                                    <div className="input-group">
                                        <input type="text" name="building_square_meters" id="building_square_meters" className="form-control" onChange={(e) => props.propertyInfoChange(index, e)} value={fieldName.building_square_meters} />
                                        <span className="input-group-text">㎡</span>
                                    </div>{propertyError.building_square_meters}
                                </div>
                                <div className="pb-3">価格<br />
                                    <div className="input-group">
                                        <input type="text" name="building_price" id="building_price" className="form-control" onChange={(e) => props.propertyInfoChange(index, e)} value={fieldName.building_price} />
                                        <span className="input-group-text">万円</span>
                                    </div>{propertyError.building_price}
                                </div>
                                <div className="pb-3">構造<br />
                                    <input type="text" name="building_structure" className="form-control" onChange={(e) => props.propertyInfoChange(index, e)} value={fieldName.building_structure} />{propertyError.building_structure}
                                </div>
                                <div className="pb-3">築年月<br />
                                    <input type="text" name="building_built_year" className="form-control" onChange={(e) => props.propertyInfoChange(index, e)} value={fieldName.building_built_year} />{propertyError.building_built_year}
                                </div>
                                <div className="pb-3">家賃収入<br />
                                    <div className="input-group">
                                        <input type="text" name="property_borrowing_amount" id="property_borrowing_amount" className="form-control" onChange={(e) => props.propertyInfoChange(index, e)} value={fieldName.property_borrowing_amount} />
                                        <span className="input-group-text">万円 / 月</span>
                                    </div>{propertyError.property_borrowing_amount}
                                </div>
                                {fieldName.repayment_slip === undefined || fieldName.repayment_slip === '' &&
                                        <div className="pb-3">借入先 ※返済明細表添付で記入省略可<br />
                                        <input type="text" name="building_income" className="form-control" placeholder="例：A銀行 B支店" onChange={(e) => props.propertyInfoChange(index, e)} value={fieldName.building_income} /></div>
                                }
                                {fieldName.tax_payment_slip === undefined || fieldName.tax_payment_slip === '' &&
                                        <div className="pb-3">ローン残高 ※返済明細表添付で記入省略可<br />
                                            <div className="input-group">
                                                <input type="text" name="borrowing_amount" id="borrowing_amount" className="form-control" onChange={(e) => props.propertyInfoChange(index, e)} value={fieldName.borrowing_amount} />
                                                <span className="input-group-text">万円</span>
                                            </div>{propertyError.borrowing_amount}
                                        </div>
                                    }
                                    {fieldName.copy_of_register === undefined || fieldName.copy_of_register === '' &&
                                        <div className="pb-3">ローン残期間 ※返済明細表添付で記入省略可<br />
                                            <input type="text" name="building_remaining_period" className="form-control" onChange={(e) => props.propertyInfoChange(index, e)} value={fieldName.building_remaining_period} />{propertyError.building_remaining_period}
                                        </div>
                                    }
                                <div className="pb-3">◆返済明細表<br />
                                    {fieldName.repayment_slip && <p>登録済みファイル：{fieldName.repayment_slip}</p>}
                                    <input type="file" name="repayment_slip" onChange={(e) => props.propertyFileChange(index, e)} /></div>{propertyError.repayment_slip}

                                <div className="pb-3">◆固定資産税納付書<br />
                                    {fieldName.tax_payment_slip && <p>登録済みファイル：{fieldName.tax_payment_slip}</p>}
                                    <input type="file" name="tax_payment_slip" onChange={(e) => props.propertyFileChange(index, e)} /></div>{propertyError.tax_payment_slip}
                                <div className="pb-3">◆登記簿謄本<br />
                                    {fieldName.copy_of_register && <p>登録済みファイル：{fieldName.copy_of_register}</p>}
                                    <input type="file" name="copy_of_register" onChange={(e) => props.propertyFileChange(index, e)} /></div>{propertyError.copy_of_register}


                            </div>
                        </div>
                    );
              })}

                <div className="mb-4 d-grid">
                  <button class="btn btn-secondary btn-block text-center" onClick={addProperty} disabled={maxProperty}>1棟追加する　<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg></button>
                </div>
              </div>
            </div>
          </div>
    )
}
