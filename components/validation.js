//現在使っていないがコンポーネント化したいので一応残してある
export default function Validator(param) {
    const NameKanaValidation=(value)=> {
        const regex = /^[ぁ-ん]+$/
        if (!regex.test(value)) return '※ひらがなで入力してください'
        return '';
        }
    switch (param.target.name) {
        //本人情報
        case 'name_kana':
            return NameKanaValidation(param.target.value);
            break;
        case 'name_kanji':
            return <NameKanziValidation value={param.target.value} />;
            break;
        case 'zipcode':
            return <ZipcodeValidation value={param.target.value} />;
            break;
        case 'email':
            return <EmailValidation value={param.target.value} />;
            break;
        case 'tel':
        case 'company_tel':
            return <TelValidation value={param.target.value} />;
            break;
        //お住まい
        case 'house_borrowing_amount':
        case 'remaining_loan_year':
        case 'remaining_loan_month':
        case 'room_rent':
        case 'working_year':
        case 'working_month':
        case 'retire_age':
        case 'three_years_ago_income':
        case 'two_years_ago_income':
        case 'previous_income':
        //家族情報
        case 'family_income':
        //保有不動産
        case 'building_square_meters':
        case 'building_price':
        case 'building_built_year':
        case 'property_borrowing_amount':
            return <RequiredNumberValidation value={param.target.value} />;
            break;
        //勤務先
        case 'company_section':
        case 'company_job_type':
        case 'company_position':
        //家族情報
        case 'family_name':
        case 'family_relationship':
        case 'family_working_for':
        //保有不動産
        case 'building_use':
        case 'building_structure':
            return <RequiredJPValidation value={param.target.value} />;
            break;
        //file
        case 'building_income':
        case 'building_remaining_period':
        case 'securities_detail':
            return <JPValidation value={param.target.value} />;
             break;
        case 'borrowing_amount':
        case 'securities_borrowing_amount':
            return <NumberValidation value={param.target.value} />;
            break;
        case 'repayment_slip':
        case 'tax_payment_slip':
        case 'copy_of_register':
        case 'passbook':
        case 'securities_firm':
            return <FileValidation value={param.target.value} />;
            break;
    }

}
function NameKanziValidation(param) {
    const regex = /^[ぁ-んァ-ヶー一-龠]+$/
    if (!regex.test(param.value)) return '※正しい形式で入力してください'
    return '';
}
function ZipcodeValidation(param) {
    const regex = /^\d{7}$/
    if (!regex.test(param.value)) return '※ハイフンなしの半角数字で入力してください'
    return '';
}
function EmailValidation(param) {
    const regex = /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+$/
    if (!regex.test(param.value)) return '※正しい形式で入力してください'
    return '';
}
function TelValidation(param) {
    const regex = /^0\d{9,10}$/
    if (!regex.test(param.value)) return '※ハイフンなしの半角数字で入力してください'
    return '';
}
function RequiredNumberValidation(param) {
    const regex = /^[0-9]+$/
    if (!regex.test(param.value)) return '※半角数字で入力してください'
    return '';
}
function RequiredJPValidation(param) {
    const regex = /^[ぁ-んァ-ヶー一-龠]+$/
    if (!regex.test(param.value)) return '※正しい形式で入力してください'
    return '';
}
function NumberValidation(param) {
    const regex = /^[0-9]+$/
    if (!regex.test(param.value)) return '※半角数字で入力してください'
    return '';
}
function JPValidation(param) {
    const regex = /^[ぁ-んァ-ヶー一-龠]+$/
    if (!regex.test(param.value)) return '※正しい形式で入力してください'
    return '';
}
function FileValidation(param) {
    const regex = new RegExp('([^\s]+(\\.(jpg|png|gif|pdf))$)', 'i');
    if (!regex.test(param.value)) return '※適切なファイルを指定してください'
    return '';
}