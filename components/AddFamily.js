import React, { useState } from 'react';

export default function addFamily(props) {
    const [indexes, setIndexes] = useState([]);
    const [counter, setCounter] = useState(1);
    const [maxMember,setMaxMember] = useState(false)
    const addFamily = () => {
        setIndexes(prevIndexes => [...prevIndexes, counter]);
        setCounter(prevCounter => prevCounter + 1);
        if (indexes.length !== 0) {
            if (indexes.reduce((a, b) => Math.max(a, b)) === 5) {
                setMaxMember(true)
            }
        }
    };
    const removeFamily = (index,e) => {
        setIndexes(prevIndexes => [...prevIndexes.filter(item => item !== index)]);
        setCounter(prevCounter => prevCounter - 1);
        //追加ボタンを有効化
        if (indexes.reduce((a, b) => Math.max(a, b)) !== 5) {
            setMaxMember(false)
        }
        //stateに登録されたデータを空にする
        switch (index) {
            case 1:
                props.setfamilyMember1({
                    family_name: '',
                    family_relationship:'',
                    family_birthday:'',
                    is_live_together:'',
                    family_address:'',
                    is_guarantee: '',
                    family_working_for:'',
                    family_income: ''
                });
                break;
            case 2:
                props.setfamilyMember2({
                    family_name: '',
                    family_relationship:'',
                    family_birthday:'',
                    is_live_together:'',
                    family_address:'',
                    is_guarantee: '',
                    family_working_for:'',
                    family_income: ''
                });
                break;
            case 3:
                props.setfamilyMember3({
                    family_name: '',
                    family_relationship:'',
                    family_birthday:'',
                    is_live_together:'',
                    family_address:'',
                    is_guarantee: '',
                    family_working_for:'',
                    family_income: ''
                });
              break;
            case 4:
                props.setfamilyMember4({
                    family_name: '',
                    family_relationship:'',
                    family_birthday:'',
                    is_live_together:'',
                    family_address:'',
                    is_guarantee: '',
                    family_working_for:'',
                    family_income: ''
                 });
              break;
            case 5:
                props.setfamilyMember5({
                    family_name: '',
                    family_relationship:'',
                    family_birthday:'',
                    is_live_together:'',
                    family_address:'',
                    is_guarantee: '',
                    family_working_for:'',
                    family_income: ''
                });
              break;
            case 6:
                props.setfamilyMember6({
                    family_name: '',
                    family_relationship:'',
                    family_birthday:'',
                    is_live_together:'',
                    family_address:'',
                    is_guarantee: '',
                    family_working_for:'',
                    family_income: ''
                });
              break;
        }
    };

    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                ご家族の情報<br />
              </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div className="accordion-body">
            {indexes.map(index => {
              //編集途中のデータをvalueにセットするために変数にオブジェクトを代入
              let fieldName;
              let familyError;
              let is_live_together;
              let is_guarantee;
              switch (index) {
                case 1:
                  fieldName = props.familyMember1;
                  familyError = props.errorMessage1;
                  is_live_together = fieldName.is_live_together1;
                  is_guarantee = fieldName.is_guarantee1;
                  break;
                case 2:
                  fieldName = props.familyMember2;
                  familyError = props.errorMessage2;
                  is_live_together = fieldName.is_live_together2;
                  is_guarantee = fieldName.is_guarantee2;
                  break;
                case 3:
                  fieldName = props.familyMember3;
                  familyError = props.errorMessage3;
                  is_live_together = fieldName.is_live_together3;
                  is_guarantee = fieldName.is_guarantee3;
                  break;
                case 4:
                  fieldName = props.familyMember4;
                  familyError = props.errorMessage4;
                  is_live_together = fieldName.is_live_together4;
                  is_guarantee = fieldName.is_guarantee4;
                  break;
                case 5:
                  fieldName = props.familyMember5;
                  familyError = props.errorMessage5;
                  is_live_together = fieldName.is_live_together5;
                  is_guarantee = fieldName.is_guarantee5;
                  break;
                case 6:
                  fieldName = props.familyMember6;
                  familyError = props.errorMessage6;
                  is_live_together = fieldName.is_live_together6;
                  is_guarantee = fieldName.is_guarantee6;
                  break;
              }
                return (
                  <div className="card mb-4" name={`familyMember${index}`} key={`familyMember${index}`}>
                    <div className="card-header">{index}人目　<button type="button" class="btn-sm btn-danger" onClick={(e) => removeFamily(index, e)}>削除する</button></div>
                    <div className="card-body">
                      <div className="pb-3">氏名<br  />
                        <input type="text" name="family_name" className="form-control" onChange={(e) => props.familyChange(index, e)} value={fieldName.family_name} /></div>{familyError.family_name}
                      <div className="pb-3">続柄<br  />
                      <input type="text" name="family_relationship" className="form-control" onChange={(e) => props.familyChange(index, e)} value={fieldName.family_relationship} /></div>{familyError.family_relationship}
                      <div className="pb-3">生年月日<br  />
                      <input type="date" name="family_birthday" className="form-control" onChange={(e) => props.familyChange(index, e)} value={fieldName.family_birthday} /></div>{familyError.family_birthday}
                      <div className="pb-3">同居<br  />
                          <div class="btn-group" role="group" >
                            <input type="radio" className="btn-check btn-sm" name={`is_live_together${index}`} value="有" id={`live_together_true${index}`} autocomplete="off" onChange={(e) => props.familyChange(index, e)} checked={is_live_together === '有'} />
                            <label className="btn btn-outline-success" for={`live_together_true${index}`}>有</label>
                          <input type="radio" className="btn-check btn-sm" name={`is_live_together${index}`} value="無" id={`live_together_false${index}`} autocomplete="off" onChange={(e) => props.familyChange(index, e)} checked={is_live_together === '無'} />
                          <label className="btn btn-outline-success" for={`live_together_false${index}`}>無</label>
                        </div>
                      </div>
                      <div className="pb-3">住所<br  />
                      <input type="text" name="family_address" className="form-control" onChange={(e) => props.familyChange(index, e)} value={fieldName.family_address} /></div>{familyError.family_address}
                      <div className="pb-3">連帯保証<br  />
                        <div class="btn-group" role="group" >
                          <input type="radio" className="btn-check btn-sm" name={`is_guarantee${index}`} id={`guarantee_true${index}`} autocomplete="off" value="true" onChange={(e) => props.familyChange(index, e)} checked={is_guarantee === 'true'} />
                          <label className="btn btn-outline-success" for={`guarantee_true${index}`}>可</label>
                          <input type="radio" className="btn-check btn-sm" name={`is_guarantee${index}`} id={`guarantee_false${index}`} autocomplete="off" value="false" onChange={(e) => props.familyChange(index, e)} checked={is_guarantee === 'false'} />
                          <label className="btn btn-outline-success" for={`guarantee_false${index}`}>不可</label>
                        </div>
                      </div>
                      <div className="pb-3">勤務先<br  />
                      <input type="text" name="family_working_for" className="form-control" onChange={(e) => props.familyChange(index, e)} value={fieldName.family_working_for} /></div>{familyError.family_working_for}
                      <div className="pb-3">年収<br  />
                        <div className="input-group">
                          <input type="text" name="family_income" className="form-control" onChange={(e) => props.familyChange(index, e)} value={fieldName.family_income} /><span className="input-group-text">万円</span>
                        </div>{familyError.family_income}
                        </div>

                    </div>
                  </div>
                );
              })}

                <div className="mb-4 d-grid">
                  <button class="btn btn-secondary btn-block text-center" onClick={addFamily} disabled={maxMember}>1名追加する　<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-circle" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                  </svg></button>
                </div>
              </div>
            </div>
          </div>
    )
}