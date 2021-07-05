export default function FinancialAssets(props) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingFive">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseThree">
                保有金融資産<br />
              </button>
            </h2>
            <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#accordionExample">
              <div className="accordion-body">
              <div className="pb-3">◆通帳の写し<br  />
                {props.financialAssets.passbook && <p>登録済みファイル：{ props.financialAssets.passbook }</p>}
                  <input type="file" name="passbook" onChange={props.financialFileChange} /></div>{props.errorMessage.passbook}
                {props.financialAssets.passbook === '' &&
                    <div className="card mb-4">
                      <div className="card-header">預金 ※通帳の写し添付で記入省略可</div>
                      <div className="card-body">
                        <div className="pb-3">内容<br />
                          <input type="text" name="bank_deposit_detail" className="form-control" onChange={props.financialChange} value={props.financialAssets.bank_deposit_detail} /></div>{props.errorMessage.bank_deposit_detail}
                        <div className="pb-3">残高
                      <div className="input-group">
                            <input type="text" name="bank_borrowing_amount" id="bank_borrowing_amount" className="form-control" onChange={props.financialChange} value={props.financialAssets.bank_borrowing_amount} />
                            <span className="input-group-text">万円</span>
                          </div>{props.errorMessage.bank_borrowing_amount}
                        </div>
                        <div className="pb-3">備考<br />
                          <textarea name="bank_deposit_others" className="form-control" onChange={props.financialChange} value={props.financialAssets.bank_deposit_others}></textarea></div>
                    </div>
                  </div>}

                  <div className="pb-3">◆証券会社一覧の写し<br  />
                {props.financialAssets.securities_firm && <p>登録済みファイル：{ props.financialAssets.securities_firm }</p>}
                <input type="file" name="securities_firm" onChange={props.financialFileChange} /></div>{props.errorMessage.securities_firm}
                {props.financialAssets.securities_firm === '' &&
                <div className="card">
                  <div className="card-header">証券 ※証券会社の写しで記入省略可</div>
                  <div className="card-body">
                    <div className="pb-3">内容<br  />
                    <input type="text" name="securities_detail" id="securities_detail" className="form-control" onChange={props.financialChange} value={props.financialAssets.securities_detail}/></div>{props.errorMessage.securities_detail}
                    <div className="pb-3">残高
                      <div className="input-group">
                        <input type="text" name="securities_borrowing_amount" id="securities_borrowing_amount" className="form-control" onChange={props.financialChange} value={props.financialAssets.securities_borrowing_amount} />
                        <span className="input-group-text">万円</span>
                      </div>{props.errorMessage.securities_borrowing_amount}
                      </div>
                    <div className="pb-3">備考<br  />
                    <textarea name="securities_others" className="form-control" onChange={props.financialChange}  onChange={props.financialChange} value={props.financialAssets.securities_others}></textarea></div>
                  </div>
                  </div>}

              </div>
            </div>
        </div>
    )
}