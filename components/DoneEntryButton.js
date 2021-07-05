import {Save} from './SaveButton'

export default function DoneEntryButton(props) {
    return <button onClick={(e)=>SaveAndDone(e,props)} className="btn btn-success" disabled={props.errorMessage.name_kana || props.errorMessage.name_kanji || props.errorMessage.zipcode || props.errorMessage.email || props.errorMessage.tel || props.errorMessage.options_outlined || props.errorMessage.house_borrowing_amount || props.errorMessage.remaining_loan_year || props.errorMessage.remaining_loan_month || props.errorMessage.room_type || props.errorMessage.room_rent || props.errorMessage.company_section || props.errorMessage.company_job_type || props.errorMessage.company_position || props.errorMessage.company_tel || props.errorMessage.working_year || props.errorMessage.working_month || props.errorMessage.retire_age || props.errorMessage.three_years_ago_income || props.errorMessage.two_years_ago_income || props.errorMessage.previous_income || props.errorMessage1.family_name || props.errorMessage1.family_relationship || props.errorMessage1.family_birthday || props.errorMessage1.family_address || props.errorMessage1.family_working_for || props.errorMessage1.family_income || props.errorMessage2.family_name || props.errorMessage2.family_relationship || props.errorMessage2.family_birthday || props.errorMessage2.family_address || props.errorMessage2.family_working_for || props.errorMessage2.family_income || props.errorMessage3.family_name || props.errorMessage3.family_relationship || props.errorMessage3.family_birthday || props.errorMessage3.family_address || props.errorMessage3.family_working_for || props.errorMessage3.family_income || props.errorMessage4.family_name || props.errorMessage4.family_relationship || props.errorMessage4.family_birthday || props.errorMessage4.family_address || props.errorMessage4.family_working_for || props.errorMessage4.family_income || props.errorMessage5.family_name || props.errorMessage5.family_relationship || props.errorMessage5.family_birthday || props.errorMessage5.family_address || props.errorMessage5.family_working_for || props.errorMessage5.family_income || props.errorMessage6.family_name || props.errorMessage6.family_relationship || props.errorMessage6.family_birthday || props.errorMessage6.family_address || props.errorMessage6.family_working_for || props.errorMessage6.family_income || props.errorMessage1.building_use || props.errorMessage1.building_address || props.errorMessage1.building_square_meters || props.errorMessage1.building_price || props.errorMessage1.building_structure || props.errorMessage1.building_built_year || props.errorMessage1.property_borrowing_amount || props.errorMessage1.building_income || props.errorMessage1.borrowing_amount || props.errorMessage1.building_remaining_period || props.errorMessage1.tax_payment_slip || props.errorMessage1.copy_of_register || props.errorMessage1.repayment_slip || props.errorMessage2.building_use || props.errorMessage2.building_address || props.errorMessage2.building_square_meters || props.errorMessage2.building_price || props.errorMessage2.building_structure || props.errorMessage2.building_built_year || props.errorMessage2.property_borrowing_amount || props.errorMessage2.building_income || props.errorMessage2.borrowing_amount || props.errorMessage2.building_remaining_period || props.errorMessage2.tax_payment_slip || props.errorMessage2.copy_of_register || props.errorMessage2.repayment_slip || props.errorMessage3.building_use || props.errorMessage3.building_address || props.errorMessage3.building_square_meters || props.errorMessage3.building_price || props.errorMessage3.building_structure || props.errorMessage3.building_built_year || props.errorMessage3.property_borrowing_amount || props.errorMessage3.building_income || props.errorMessage3.borrowing_amount || props.errorMessage3.building_remaining_period || props.errorMessage3.tax_payment_slip || props.errorMessage3.copy_of_register || props.errorMessage3.repayment_slip || props.errorMessage4.building_use || props.errorMessage4.building_address || props.errorMessage4.building_square_meters || props.errorMessage4.building_price || props.errorMessage4.building_structure || props.errorMessage4.building_built_year || props.errorMessage4.property_borrowing_amount || props.errorMessage4.building_income || props.errorMessage4.borrowing_amount || props.errorMessage4.building_remaining_period || props.errorMessage4.tax_payment_slip || props.errorMessage4.copy_of_register || props.errorMessage4.repayment_slip || props.errorMessage5.building_use || props.errorMessage5.building_address || props.errorMessage5.building_square_meters || props.errorMessage5.building_price || props.errorMessage5.building_structure || props.errorMessage5.building_built_year || props.errorMessage5.property_borrowing_amount || props.errorMessage5.building_income || props.errorMessage5.borrowing_amount || props.errorMessage5.building_remaining_period || props.errorMessage5.tax_payment_slip || props.errorMessage5.copy_of_register || props.errorMessage5.repayment_slip || props.errorMessage6.building_use || props.errorMessage6.building_address || props.errorMessage6.building_square_meters || props.errorMessage6.building_price || props.errorMessage6.building_structure || props.errorMessage6.building_built_year || props.errorMessage6.property_borrowing_amount || props.errorMessage6.building_income || props.errorMessage6.borrowing_amount || props.errorMessage6.building_remaining_period || props.errorMessage6.tax_payment_slip || props.errorMessage6.copy_of_register || props.errorMessage6.repayment_slip || props.errorMessage.bank_deposit_detail || props.errorMessage.bank_borrowing_amount || props.errorMessage.bank_deposit_others || props.errorMessage.securities_detail || props.errorMessage.securities_borrowing_amount || props.errorMessage.securities_others}>入力完了！</button>
}
//２つの関数を実行する
function SaveAndDone(e,props) {
    Save(e, props);
    Done(props)
}

DoneEntryButton.getStaticProps = async ({ req }) => {
    const res = await fetch('/api/token_get')
    const json = await res.json()
    return {
        data: "",
        items: [],
        csrf: json.csrf,
      }
  }
//メール送信準備
async function Done(props) {
        try {
          const res = await fetch('/api/send_mail', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', },
            body: JSON.stringify(props),
          });
          if (res.status === 200) {
            var json = await res.json()
            alert("登録が完了しました")
          } else {
              throw new Error(await res.text());
            }
        } catch (error) {
          alert("Error, proc_test")
        }
}