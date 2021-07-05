import firebase from 'firebase';
import Router from 'next/router';
import { db } from '../lib/db'

export default function SaveButton(props) {
    //エラーメッセージなければボタンを有効化
    return <button onClick={(e)=>Save(e,props)} className="btn btn-primary" disabled={props.errorMessage.name_kana || props.errorMessage.name_kanji || props.errorMessage.zipcode || props.errorMessage.email || props.errorMessage.tel || props.errorMessage.options_outlined || props.errorMessage.house_borrowing_amount || props.errorMessage.remaining_loan_year || props.errorMessage.remaining_loan_month || props.errorMessage.room_type || props.errorMessage.room_rent || props.errorMessage.company_section || props.errorMessage.company_job_type || props.errorMessage.company_position || props.errorMessage.company_tel || props.errorMessage.working_year || props.errorMessage.working_month || props.errorMessage.retire_age || props.errorMessage.three_years_ago_income || props.errorMessage.two_years_ago_income || props.errorMessage.previous_income || props.errorMessage1.family_name || props.errorMessage1.family_relationship || props.errorMessage1.family_birthday || props.errorMessage1.family_address || props.errorMessage1.family_working_for || props.errorMessage1.family_income || props.errorMessage2.family_name || props.errorMessage2.family_relationship || props.errorMessage2.family_birthday || props.errorMessage2.family_address || props.errorMessage2.family_working_for || props.errorMessage2.family_income || props.errorMessage3.family_name || props.errorMessage3.family_relationship || props.errorMessage3.family_birthday || props.errorMessage3.family_address || props.errorMessage3.family_working_for || props.errorMessage3.family_income || props.errorMessage4.family_name || props.errorMessage4.family_relationship || props.errorMessage4.family_birthday || props.errorMessage4.family_address || props.errorMessage4.family_working_for || props.errorMessage4.family_income || props.errorMessage5.family_name || props.errorMessage5.family_relationship || props.errorMessage5.family_birthday || props.errorMessage5.family_address || props.errorMessage5.family_working_for || props.errorMessage5.family_income || props.errorMessage6.family_name || props.errorMessage6.family_relationship || props.errorMessage6.family_birthday || props.errorMessage6.family_address || props.errorMessage6.family_working_for || props.errorMessage6.family_income || props.errorMessage1.building_use || props.errorMessage1.building_address || props.errorMessage1.building_square_meters || props.errorMessage1.building_price || props.errorMessage1.building_structure || props.errorMessage1.building_built_year || props.errorMessage1.property_borrowing_amount || props.errorMessage1.building_income || props.errorMessage1.borrowing_amount || props.errorMessage1.building_remaining_period || props.errorMessage1.tax_payment_slip || props.errorMessage1.copy_of_register || props.errorMessage1.repayment_slip || props.errorMessage2.building_use || props.errorMessage2.building_address || props.errorMessage2.building_square_meters || props.errorMessage2.building_price || props.errorMessage2.building_structure || props.errorMessage2.building_built_year || props.errorMessage2.property_borrowing_amount || props.errorMessage2.building_income || props.errorMessage2.borrowing_amount || props.errorMessage2.building_remaining_period || props.errorMessage2.tax_payment_slip || props.errorMessage2.copy_of_register || props.errorMessage2.repayment_slip || props.errorMessage3.building_use || props.errorMessage3.building_address || props.errorMessage3.building_square_meters || props.errorMessage3.building_price || props.errorMessage3.building_structure || props.errorMessage3.building_built_year || props.errorMessage3.property_borrowing_amount || props.errorMessage3.building_income || props.errorMessage3.borrowing_amount || props.errorMessage3.building_remaining_period || props.errorMessage3.tax_payment_slip || props.errorMessage3.copy_of_register || props.errorMessage3.repayment_slip || props.errorMessage4.building_use || props.errorMessage4.building_address || props.errorMessage4.building_square_meters || props.errorMessage4.building_price || props.errorMessage4.building_structure || props.errorMessage4.building_built_year || props.errorMessage4.property_borrowing_amount || props.errorMessage4.building_income || props.errorMessage4.borrowing_amount || props.errorMessage4.building_remaining_period || props.errorMessage4.tax_payment_slip || props.errorMessage4.copy_of_register || props.errorMessage4.repayment_slip || props.errorMessage5.building_use || props.errorMessage5.building_address || props.errorMessage5.building_square_meters || props.errorMessage5.building_price || props.errorMessage5.building_structure || props.errorMessage5.building_built_year || props.errorMessage5.property_borrowing_amount || props.errorMessage5.building_income || props.errorMessage5.borrowing_amount || props.errorMessage5.building_remaining_period || props.errorMessage5.tax_payment_slip || props.errorMessage5.copy_of_register || props.errorMessage5.repayment_slip || props.errorMessage6.building_use || props.errorMessage6.building_address || props.errorMessage6.building_square_meters || props.errorMessage6.building_price || props.errorMessage6.building_structure || props.errorMessage6.building_built_year || props.errorMessage6.property_borrowing_amount || props.errorMessage6.building_income || props.errorMessage6.borrowing_amount || props.errorMessage6.building_remaining_period || props.errorMessage6.tax_payment_slip || props.errorMessage6.copy_of_register || props.errorMessage6.repayment_slip || props.errorMessage.bank_deposit_detail || props.errorMessage.bank_borrowing_amount || props.errorMessage.bank_deposit_others || props.errorMessage.securities_detail || props.errorMessage.securities_borrowing_amount || props.errorMessage.securities_others}>入力内容を保存する</button>
}

export function Save(e, props) {
    e.preventDefault();
    //storageへのアップロード
    if (props.property1.tax_payment_slip !== '') {
        let taxPaymentSlipRef = firebase.storage().ref("tax_payment_slip/" + props.property1.tax_payment_slip);
        taxPaymentSlipRef.put(props.taxPaymentSlip1)
            .then(function (snapshot) {
            })
    }
    if (props.property1.copy_of_register !== '') {
        let copyOfRegisterRef = firebase.storage().ref("copy_of_register/" + props.property1.copy_of_register);
        copyOfRegisterRef.put(props.copyOfRegister1)
            .then(function (snapshot) {
            })
    }
    if (props.property1.repayment_slip !== '') {
        let repaymentSlipRef = firebase.storage().ref("repayment_slip/" + props.property1.repayment_slip);
        repaymentSlipRef.put(props.repaymentSlip1)
            .then(function (snapshot) {
            })
    }
    if (props.property2.tax_payment_slip !== '') {
        let taxPaymentSlipRef = firebase.storage().ref("tax_payment_slip/" + props.property2.tax_payment_slip);
        taxPaymentSlipRef.put(props.taxPaymentSlip2)
            .then(function (snapshot) {
            })
    }
    if (props.property2.copy_of_register !== '') {
        let copyOfRegisterRef = firebase.storage().ref("copy_of_register/" + props.property2.copy_of_register);
        copyOfRegisterRef.put(props.copyOfRegister2)
            .then(function (snapshot) {
            })
    }
    if (props.property2.repayment_slip !== '') {
        let repaymentSlipRef = firebase.storage().ref("repayment_slip/" + props.property2.repayment_slip);
        repaymentSlipRef.put(props.repaymentSlip2)
            .then(function (snapshot) {
            })
    }
    if (props.property3.tax_payment_slip !== '') {
        let taxPaymentSlipRef = firebase.storage().ref("tax_payment_slip/" + props.property3.tax_payment_slip);
        taxPaymentSlipRef.put(props.taxPaymentSlip3)
            .then(function (snapshot) {
            })
    }
    if (props.property3.copy_of_register !== '') {
        let copyOfRegisterRef = firebase.storage().ref("copy_of_register/" + props.property3.copy_of_register);
        copyOfRegisterRef.put(props.copyOfRegister3)
            .then(function (snapshot) {
            })
    }
    if (props.property3.repayment_slip !== '') {
        let repaymentSlipRef = firebase.storage().ref("repayment_slip/" + props.property3.repayment_slip);
        repaymentSlipRef.put(props.repaymentSlip3)
            .then(function (snapshot) {
            })
    }
    if (props.property4.tax_payment_slip !== '') {
        let taxPaymentSlipRef = firebase.storage().ref("tax_payment_slip/" + props.property4.tax_payment_slip);
        taxPaymentSlipRef.put(props.taxPaymentSlip4)
            .then(function (snapshot) {
            })
    }
    if (props.property4.copy_of_register !== '') {
        let copyOfRegisterRef = firebase.storage().ref("copy_of_register/" + props.property4.copy_of_register);
        copyOfRegisterRef.put(props.copyOfRegister4)
            .then(function (snapshot) {
            })
    }
    if (props.property4.repayment_slip !== '') {
        let repaymentSlipRef = firebase.storage().ref("repayment_slip/" + props.property4.repayment_slip);
        repaymentSlipRef.put(props.repaymentSlip4)
            .then(function (snapshot) {
            })
    }
    if (props.property5.tax_payment_slip !== '') {
        let taxPaymentSlipRef = firebase.storage().ref("tax_payment_slip/" + props.property5.tax_payment_slip);
        taxPaymentSlipRef.put(props.taxPaymentSlip5)
            .then(function (snapshot) {
            })
    }
    if (props.property5.copy_of_register !== '') {
        let copyOfRegisterRef = firebase.storage().ref("copy_of_register/" + props.property5.copy_of_register);
        copyOfRegisterRef.put(props.copyOfRegister5)
            .then(function (snapshot) {
            })
    }
    if (props.property5.repayment_slip !== '') {
        let repaymentSlipRef = firebase.storage().ref("repayment_slip/" + props.property5.repayment_slip);
        repaymentSlipRef.put(props.repaymentSlip5)
            .then(function (snapshot) {
            })
    }
    if (props.property6.tax_payment_slip !== '') {
        let taxPaymentSlipRef = firebase.storage().ref("tax_payment_slip/" + props.property6.tax_payment_slip);
        taxPaymentSlipRef.put(props.taxPaymentSlip6)
            .then(function (snapshot) {
            })
    }
    if (props.property6.copy_of_register !== '') {
        let copyOfRegisterRef = firebase.storage().ref("copy_of_register/" + props.property6.copy_of_register);
        copyOfRegisterRef.put(props.copyOfRegister6)
            .then(function (snapshot) {
            })
    }
    if (props.property6.repayment_slip !== '') {
        let repaymentSlipRef = firebase.storage().ref("repayment_slip/" + props.property6.repayment_slip);
        repaymentSlipRef.put(props.repaymentSlip6)
            .then(function (snapshot) {
            })
    }
    if (props.financialAssets.passbook !== '') {
        let passbookRef = firebase.storage().ref("passbook/" + props.financialAssets.passbook);
        passbookRef.put(props.passbook)
            .then(function (snapshot) {
            })
    }
    if (props.financialAssets.securities_firm !== '') {
        let securitiesFirmRef = firebase.storage().ref("securities_firm/" + props.financialAssets.securities_firm);
        securitiesFirmRef.put(props.securitiesFirm)
            .then(function (snapshot) {
            })
    }
    if (props.companyInfo.income_proof !== '') {
        let incomeProofRef = firebase.storage().ref("income_proof/" + props.companyInfo.income_proof);
        incomeProofRef.put(props.incomeProof)
            .then(function (snapshot) {
            })
    }
    //本人情報の登録
    db.collection('customers').doc(props.currentUser.uid).collection('informations').doc('customerInfo').set(props.customerInfo), { merge: true };
    //住まいの登録
    db.collection('customers').doc(props.currentUser.uid).collection('informations').doc('houseInfo').set(props.houseInfo), { merge: true };
    //勤務先の登録
    db.collection('customers').doc(props.currentUser.uid).collection('informations').doc('companyInfo').set(props.companyInfo), { merge: true };
    //家族情報の登録
    const familyMember1 = props.familyMember1
    const familyMember2 = props.familyMember2
    const familyMember3 = props.familyMember3
    const familyMember4 = props.familyMember4
    const familyMember5 = props.familyMember5
    const familyMember6 = props.familyMember6
    db.collection('customers').doc(props.currentUser.uid).collection('informations').doc('familyInfo').set({ familyMember1,familyMember2,familyMember3,familyMember4,familyMember5,familyMember6 }
    ), { merge: true };
    //保有不動産の登録
    const property1 = props.property1
    const property2 = props.property2
    const property3 = props.property3
    const property4 = props.property4
    const property5 = props.property5
    const property6 = props.property6
    db.collection('customers').doc(props.currentUser.uid).collection('informations').doc('propertyInfo').set({ property1,property2,property3,property4,property5,property6 }), { merge: true };
    //保有金融資産の登録
    db.collection('customers').doc(props.currentUser.uid).collection('informations').doc('financialAssets').set(props.financialAssets).then(ref => {
        Router.push('/edit')
    }, { merge: true });
    //登録者一覧データへの登録
    let registerDate = new Date(props.currentUser.metadata.creationTime)
    let month = registerDate.getMonth() + 1;
    db.collection('customersIndex').doc(props.currentUser.uid).set({
        name: props.currentUser.displayName,
        email:props.currentUser.email,
        creationDate: registerDate.getFullYear()+'/'+month+'/'+registerDate.getDate()
    }, { merge: true });
}