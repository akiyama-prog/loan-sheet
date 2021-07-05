export default function CustomerInfo(props){
    return (
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                本人情報<br />
              </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="accordion-body">
                <div className="pb-3"><label for="name_kana">お名前（かな）</label>
                  <input type="text" id="name_kana" name="name_kana" className="form-control" onChange={props.customerInfoChange} value={props.customerInfo.name_kana} />{props.errorMessage.name_kana}</div>
                <div className="pb-3"><label for="name_kanji">お名前（漢字）</label>
                <input type="text" id="name_kanji" name="name_kanji" className="form-control" onChange={props.customerInfoChange} value={props.customerInfo.name_kanji} />{props.errorMessage.name_kanji}</div>
                <div className="pb-3"><label for="birthday">生年月日</label>
                <input type="date" id="birthday" name="birthday" className="form-control" onChange={props.customerInfoChange} value={ props.customerInfo.birthday } /></div>
                <div className="pb-3"><label for="zipcode">郵便番号</label>
                <input type="text" id="zipcode" name="zipcode" className="form-control" placeholder="ハイフン無しで入力"  onChange={props.customerInfoChange} value={props.customerInfo.zipcode} />{props.errorMessage.zipcode}</div>
                <div className="pb-3"><label for="address">住所</label>
                  <input type="text" id="address" name="address" className="form-control" onChange={props.customerInfoChange} value={props.customerInfo.address} />{props.errorMessage.address}
                </div>
                <div className="pb-3"><label for="building_name">マンション名</label>
                <input type="text" id="building_name" name="building_name" className="form-control" placeholder="例：Aマンション 101号室"  onChange={props.customerInfoChange} value={props.customerInfo.building_name} /></div>
                <div className="pb-3"><label for="email">メールアドレス</label>
                  <input type="email" id="email" name="email" className="form-control" placeholder="半角英数字でご記入ください" onChange={props.customerInfoChange} value={props.customerInfo.email} />{props.errorMessage.email}</div>
                <div className="pb-3"><label for="tel">電話番号</label>
                <input type="text" id="tel" name="tel" className="form-control" placeholder="ハイフン無しで入力"  onChange={props.customerInfoChange} value={props.customerInfo.tel} />{props.errorMessage.tel}</div>
                <div className="pb-3">配偶者<br  />
                  <div class="btn-group" role="group" >
                    <input type="radio" className="btn-check btn-sm" name="spouse" id="spouse_true" autoComplete="off" value="true"  onChange={props.customerInfoChange} checked={props.customerInfo.spouse === 'true'}/>
                    <label className="btn btn-outline-success" for="spouse_true">有</label>
                    <input type="radio" className="btn-check btn-sm" name="spouse" id="spouse_false" autoComplete="off" value="false" onChange={props.customerInfoChange} checked={props.customerInfo.spouse === 'false'} />
                    <label className="btn btn-outline-success" for="spouse_false">無</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}