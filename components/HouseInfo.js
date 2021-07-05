export default function HouseInfo(props) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                今のお住まいについて<br />
              </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="pb-3">お住まい状況<br  />
                  <div class="btn-group" role="group" >
                    <input type="radio" className="btn-check btn-sm" name="options_outlined" id="home_owned" autoComplete="off" value="持ち家" onChange={props.houseInfoChange} checked={ props.houseInfo.options_outlined === '持ち家'} />
                    <label className="btn btn-outline-success" for="home_owned">持ち家</label>
                    <input type="radio" className="btn-check btn-sm" name="options_outlined" id="home_rent" autoComplete="off" value="借家" onChange={props.houseInfoChange} checked={ props.houseInfo.options_outlined === '借家'} />
                    <label className="btn btn-outline-success" for="home_rent">借家</label>
                    <input type="radio" className="btn-check btn-sm" name="options_outlined" id="home_other" autoComplete="off" value="その他" onChange={props.houseInfoChange} checked={ props.houseInfo.options_outlined === 'その他'} />
                    <label className="btn btn-outline-success" for="home_other">その他</label>
                  </div>
                </div>

                <div id="home_owned_details">
                  <div className="card mb-4">
                    <div className="card-header">住宅ローン</div>
                    <div className="card-body">
                      <div className="pb-3">借入額
                        <div className="input-group">
                          <input type="text" name="house_borrowing_amount" id="house_borrowing_amount" className="form-control" onChange={props.houseInfoChange} value={props.houseInfo.house_borrowing_amount} />
                          <span className="input-group-text">万円</span>
                        </div>{props.errorMessage.house_borrowing_amount}
                      </div>
                      <div className="pb-3">ローン残存期間
                        <div className="row">
                          <div className="col-6">
                            <div className="input-group">
                              <input type="text" name="remaining_loan_year" id="remaining_loan_year" className="form-control" onChange={props.houseInfoChange} value={props.houseInfo.remaining_loan_year} />
                              <span className="input-group-text">年</span>
                            </div>{props.errorMessage.remaining_loan_year}
                          </div>
                          <div className="col-6">
                            <div className="input-group">
                              <input type="text" name="remaining_loan_month" id="remaining_loan_month" className="form-control" onChange={props.houseInfoChange} value={props.houseInfo.remaining_loan_month} />
                              <span className="input-group-text">ヶ月</span>
                            </div>{props.errorMessage.remaining_loan_month}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div id="home_rent_details">
                  <div className="card">
                    <div className="card-header">部屋について</div>
                    <div className="card-body">
                      <div className="pb-3">種類<br  />
                        <div class="btn-group" role="group" >
                          <input type="radio" className="btn-check btn-sm" name="room_type" id="normal_rent" autoComplete="off" value="賃貸" onChange={props.houseInfoChange} checked={ props.houseInfo.room_type === '賃貸'} />
                          <label className="btn btn-outline-success" for="normal_rent">賃貸</label>
                          <input type="radio" className="btn-check btn-sm" name="room_type" id="company_rent" autoComplete="off" value="社宅" onChange={props.houseInfoChange} checked={ props.houseInfo.room_type === '社宅'} />
                          <label className="btn btn-outline-success" for="company_rent">社宅</label>
                        </div>
                      </div>
                      <div className="pb-3">家賃
                        <div className="input-group">
                          <input type="text" name="room_rent" id="room_rent" className="form-control" onChange={props.houseInfoChange} value={props.houseInfo.room_rent} />
                          <span className="input-group-text">円/月</span>
                        </div>{props.errorMessage.room_rent}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

    )
}