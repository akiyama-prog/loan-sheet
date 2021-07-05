import PreviousIncome from '../components/PreviousIncome'

export default function CompanyInfo(props) {
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#job" aria-expanded="false" aria-controls="job">
                勤務先について<br />
              </button>
            </h2>
            <div id="job" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="pb-3"><label for="company_name">会社名</label>
                <input type="text" id="company_name" name="company_name" className="form-control" onChange={props.companyInfoChange} value={props.companyInfo.company_name} /></div>
                <div className="pb-3"><label for="company_section">所属部署</label>
                <input type="text" id="company_section" name="company_section" className="form-control" onChange={props.companyInfoChange} value={props.companyInfo.company_section} />{props.errorMessage.company_section}</div>
                <div className="pb-3"><label for="company_job_type">職種</label>
                <input type="text" id="company_job_type" name="company_job_type" className="form-control" onChange={props.companyInfoChange} value={props.companyInfo.company_job_type} />{props.errorMessage.company_job_type}</div>
                <div className="pb-3"><label for="company_position">役職名</label>
                <input type="text" id="company_position" name="company_position" className="form-control" onChange={props.companyInfoChange} value={props.companyInfo.company_position} />{props.errorMessage.company_position}</div>
                <div className="pb-3"><label for="company_address">住所</label>
                <input type="text" id="company_address" name="company_address" className="form-control" onChange={props.companyInfoChange} value={props.companyInfo.company_address} />{props.errorMessage.company_address}</div>
                <div className="pb-3"><label for="company_tel">電話番号</label>
                <input type="text" id="company_tel" name="company_tel" className="form-control" onChange={props.companyInfoChange} value={props.companyInfo.company_tel} />{props.errorMessage.company_tel}</div>
                <div className="pb-3"><label for="service_years">勤続年数</label>
                  <div className="row justify-content-between">
                    <div className="col-6">
                      <div className="input-group">
                        <input type="text" id="working_year" name="working_year" className="form-control" onChange={props.companyInfoChange} value={props.companyInfo.working_year} />
                        <span className="input-group-text">年</span>
                      </div>{props.errorMessage.working_year}
                    </div>
                    <div className="col-6">
                      <div className="input-group">
                        <input type="text" id="working_month" name="working_month" className="form-control" onChange={props.companyInfoChange} value={props.companyInfo.working_month} />
                        <span className="input-group-text">ヶ月</span>
                      </div>{props.errorMessage.working_month}
                    </div>
                  </div>
                </div>
                <div className="pb-3"><label for="retire_age">定年</label>
                  <div className="input-group">
                    <span className="input-group-text">満</span>
                    <input type="text" id="retire_age" name="retire_age" className="form-control" onChange={props.companyInfoChange} value={props.companyInfo.retire_age} />
                    <span className="input-group-text">歳</span>
                  </div>{props.errorMessage.retire_age}
                </div>
                <div className="pb-3"><label for="service_years">税込年収</label>
                  <div className="row justify-content-between">
                    <div className="col-4">
                    <div className="input-group">
                      <span className="input-group-text"><PreviousIncome year='3' />年</span>
                      <input type="text" id="three_years_ago_income" name="three_years_ago_income" className="form-control" onChange={props.companyInfoChange} value={props.companyInfo.three_years_ago_income} />
                      <span className="input-group-text">万円</span>
                      </div>{props.errorMessage.three_years_ago_income}
                    </div>
                    <div className="col-4">
                    <div className="input-group">
                    <span className="input-group-text"><PreviousIncome year='2' />年</span>
                    <input type="text" id="two_years_ago_income" name="two_years_ago_income" className="form-control" onChange={props.companyInfoChange} value={props.companyInfo.two_years_ago_income} />
                    <span className="input-group-text">万円</span>
                      </div>{props.errorMessage.two_years_ago_income}
                    </div>
                    <div className="col-4">
                    <div className="input-group">
                    <span className="input-group-text"><PreviousIncome year='1' />年</span>
                    <input type="text" id="previous_income" name="previous_income" className="form-control" onChange={props.companyInfoChange} value={props.companyInfo.previous_income} />
                    <span className="input-group-text">万円</span>
                      </div>{props.errorMessage.previous_income}
                      </div>
                  </div>
                </div>
                <div className="pb-3">◆収入証明　※源泉徴収票や確定申告書の写しをご添付ください。<br  />
                {props.companyInfo.income_proof && <p>登録済みファイル：{ props.companyInfo.income_proof }</p>}
                <input type="file" name="income_proof" onChange={props.companyFileChange} /></div>{props.errorMessage.income_proof}
              </div>

            </div>
          </div>
    )
}