import Link from 'next/link'
import 'bootstrap/dist/css/bootstrap.css'
import Header from '../components/Head'
import SaveButton from '../components/SaveButton'
import LogoutButton from '../components/LogoutButton'
import AddFamily from '../components/AddFamily'
import CustomerInfo from '../components/CustomerInfo'
import HouseInfo from '../components/HouseInfo'
import CompanyInfo from '../components/CompanyInfo'
import FinancialAssets from '../components/FinancialAssets'
import React, { useState, useEffect } from 'react';
import { db,auth } from '../lib/db'
import Router from 'next/router';
import AddProperty from '../components/AddProperty'
import DoneEntryButton from '../components/DoneEntryButton'

export default function Home() {
  const [currentUser, setCurrentUser] = useState('')//ログイン中のユーザ
  useEffect(() => {
    let unsubscribe = auth.onAuthStateChanged((user) => {
      user ? setCurrentUser(user) : Router.push('/')
      unsubscribe();//登録解除
    })
    db.collection('customers').doc(auth.currentUser.uid).collection('informations').doc('customerInfo').get().then(ob => {
      if (ob.data() !== undefined) {
        Router.push('edit')
      }
    })
  },[])
  //本人情報
  const [customerInfo, setCustomerInfo] = useState({
    name_kana:'',
    name_kanji:auth.currentUser.displayName,
    birthday:'',
    zipcode:'',
    address:'',
    building_name:'',
    email:auth.currentUser.email,
    tel:'',
    spouse: '',
  })
  //お住まい
  const [houseInfo, setHouseInfo] = useState({
    options_outlined: '',
    bank_borrowing_amount:'',
    bank_deposit_others:'',
    remaining_loan_month:'',
    room_type:'',
    room_rent:'',
  })
  //勤務先
  const [companyInfo, setCompanyInfo] = useState({
    company_name: '',
    company_section:'',
    company_job_type:'',
    company_position:'',
    company_address:'',
    company_tel: '',
    working_year:'',
    working_month:'',
    retire_age: '',
    three_years_ago_income:'',
    two_years_ago_income:'',
    previous_income: '',
    income_proof:'',
  })
  const [incomeProof, setIncomeProof] = useState('');//収入証明
  //家族
  const [familyMember1, setfamilyMember1] = useState({
    family_name: '',
    family_relationship:'',
    family_birthday:'',
    is_live_together1:'',
    family_address:'',
    is_guarantee1: '',
    family_working_for:'',
    family_income:'',
  })
  const [familyMember2, setfamilyMember2] = useState({
    family_name: '',
    family_relationship:'',
    family_birthday:'',
    is_live_together2:'',
    family_address:'',
    is_guarantee2: '',
    family_working_for:'',
    family_income:'',
  })
  const [familyMember3, setfamilyMember3] = useState({
    family_name: '',
    family_relationship:'',
    family_birthday:'',
    is_live_together3:'',
    family_address:'',
    is_guarantee3: '',
    family_working_for:'',
    family_income:'',
  })
  const [familyMember4, setfamilyMember4] = useState({
    family_name: '',
    family_relationship:'',
    family_birthday:'',
    is_live_together4:'',
    family_address:'',
    is_guarantee4: '',
    family_working_for:'',
    family_income:'',
  })
  const [familyMember5, setfamilyMember5] = useState({
    family_name: '',
    family_relationship:'',
    family_birthday:'',
    is_live_together5:'',
    family_address:'',
    is_guarantee5: '',
    family_working_for:'',
    family_income:'',
  })
  const [familyMember6, setfamilyMember6] = useState({
    family_name: '',
    family_relationship:'',
    family_birthday:'',
    is_live_together6:'',
    family_address:'',
    is_guarantee6: '',
    family_working_for:'',
    family_income:'',
  })
  //保有不動産
  const [property1, setProperty1] = useState({
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
  })
  const [property2, setProperty2] = useState({
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
  })
  const [property3, setProperty3] = useState({
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
  })
  const [property4, setProperty4] = useState({
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
  })
  const [property5, setProperty5] = useState({
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
  })
  const [property6, setProperty6] = useState({
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
  })
  //返済明細表
  const [repaymentSlip1,setRepaymentSlip1] = useState('')
  const [repaymentSlip2,setRepaymentSlip2] = useState('')
  const [repaymentSlip3,setRepaymentSlip3] = useState('')
  const [repaymentSlip4,setRepaymentSlip4] = useState('')
  const [repaymentSlip5,setRepaymentSlip5] = useState('')
  const [repaymentSlip6, setRepaymentSlip6] = useState('')
  //固定資産税納付書
  const [taxPaymentSlip1,setTaxPaymentSlip1] = useState('')
  const [taxPaymentSlip2,setTaxPaymentSlip2] = useState('')
  const [taxPaymentSlip3,setTaxPaymentSlip3] = useState('')
  const [taxPaymentSlip4,setTaxPaymentSlip4] = useState('')
  const [taxPaymentSlip5,setTaxPaymentSlip5] = useState('')
  const [taxPaymentSlip6, setTaxPaymentSlip6] = useState('')
  //謄本
  const [copyOfRegister1,setCopyOfRegister1] = useState('')
  const [copyOfRegister2,setCopyOfRegister2] = useState('')
  const [copyOfRegister3,setCopyOfRegister3] = useState('')
  const [copyOfRegister4,setCopyOfRegister4] = useState('')
  const [copyOfRegister5,setCopyOfRegister5] = useState('')
  const [copyOfRegister6,setCopyOfRegister6] = useState('')
  //保有金融資産
  const [financialAssets, setFinancialAssets] = useState({
    bank_deposit_detail: '',
    bank_borrowing_amount:'',
    bank_deposit_others:'',
    securities_detail:'',
    securities_borrowing_amount:'',
    securities_others:'',
    passbook:'',
    securities_firm:'',
  })
  const [passbook,setPassbook] = useState('')//通帳の写し
  const [securitiesFirm, setSecuritiesFirm] = useState('')//証券会社の写し

  const [errorMessage, setErrorMessage] = useState([])
  //追加した家族と不動産用のエラーメッセージステート
  const [errorMessage1, setErrorMessage1] = useState([])
  const [errorMessage2, setErrorMessage2] = useState([])
  const [errorMessage3, setErrorMessage3] = useState([])
  const [errorMessage4, setErrorMessage4] = useState([])
  const [errorMessage5, setErrorMessage5] = useState([])
  const [errorMessage6, setErrorMessage6] = useState([])
//バリデーション
  const validator=(e)=> {
    switch (e.target.name) {
        //本人情報
        case 'name_kana':
            return nameKanaValidation(e.target.value);
            break;
        case 'name_kanji':
            return nameKanziValidation(e.target.value);
            break;
        case 'zipcode':
            return zipcodeValidation(e.target.value);
            break;
        case 'email':
            return emailValidation(e.target.value);
            break;
        case 'tel':
        case 'company_tel':
            return telValidation(e.target.value);
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
        case 'property_borrowing_amount':
        case 'borrowing_amount':
        case 'securities_borrowing_amount':
        case 'bank_borrowing_amount':
            return numberValidation(e.target.value);
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
        //file
        case 'building_income':
            return JPValidation(e.target.value);
            break;
        case 'income_proof':
        case 'repayment_slip':
        case 'tax_payment_slip':
        case 'copy_of_register':
        case 'passbook':
        case 'securities_firm':
            return fileValidation(e.target.value);
        break;
        case 'address':
        case 'company_address':
        case 'building_address':
        case 'family_address':
        case 'building_remaining_period':
        case 'building_built_year':
        return numberJPValidation(e.target.value);
        break;
    }
  }
  const nameKanaValidation=(value)=> {
    const regex = /^[ぁ-ん]+$/
    if (!regex.test(value)) return '※ひらがなで入力してください'
    return '';
  }
  const nameKanziValidation=(value)=> {
    const regex = /^[ぁ-んァ-ヶー一-龠]+$/
    if (!regex.test(value)) return '※正しい形式で入力してください'
    return '';
  }
  const zipcodeValidation=(value)=> {
      const regex = /^\d{7}$/
      if (!regex.test(value)) return '※ハイフンなしの半角数字で入力してください'
      return '';
  }
  const emailValidation=(value)=> {
      const regex = /^[a-zA-Z0-9-_\.]+@[a-zA-Z0-9-_\.]+$/
      if (!regex.test(value)) return '※正しい形式で入力してください'
      return '';
  }
  const telValidation=(value)=> {
      const regex = /^0\d{9,10}$/
      if (!regex.test(value)) return '※ハイフンなしの半角数字で入力してください'
      return '';
  }
  const numberValidation=(value)=> {
    const regex = /^[0-9]+$/
    if (!regex.test(value)) return '※半角数字で入力してください'
    return '';
  }
  const JPValidation=(value)=> {
    const regex = /^[ぁ-んァ-ヶー一-龠]+$/
    if (!regex.test(value)) return '※正しい形式で入力してください'
    return '';
  }
  const numberJPValidation = (value) => {
    const regex = /^[0-9ぁ-んァ-ヶー一-龠]+$/
    if (!regex.test(value)) return '※正しい形式で入力してください'
    return '';
  }
  const fileValidation=(value)=> {
    const regex = new RegExp('([^\s]+(\\.(jpg|png|gif|pdf))$)', 'i');
    if (!regex.test(value)) return '※適切なファイルを指定してください'
    return '';
  }

  let today = Date.now();
//保有金融資産ファイル
const financialFileChange = e => {
  const value = e.target.value
  const name = e.target.name;
  const filePath = today + '.' + value.match(/[^.]+$/);
  setFinancialAssets({ ...financialAssets, [name]: filePath })
  if (name == 'passbook') {
    setPassbook(e.target.files[0])
  } else {
    setSecuritiesFirm(e.target.files[0])
  }
}
  const customerInfoChange = e => {
    const name = e.target.name
    const value = e.target.value
    setCustomerInfo({ ...customerInfo, [name]: value });
    setErrorMessage({ ...errorMessage, [e.target.name]: validator(e) })
  }
  const houseInfoChange = e => {
    const name = e.target.name;
    const value = e.target.value
    setHouseInfo({ ...houseInfo, [name]: value });
    setErrorMessage({ ...errorMessage, [e.target.name]: validator(e) })
  }
  const companyInfoChange = e => {
    const name = e.target.name;
    const value = e.target.value
    setCompanyInfo({ ...companyInfo, [name]: value });
    setErrorMessage({ ...errorMessage, [e.target.name]: validator(e) })
  }
  //収入証明
  const companyFileChange = e => {
    const value = e.target.value
    const name = e.target.name;
    const filePath = today + '.' + value.match(/[^.]+$/);
    setCompanyInfo({ ...companyInfo, [name]: filePath })
    setIncomeProof(e.target.files[0])
    setErrorMessage({ ...errorMessage, [e.target.name]: validator(e) })
  }
  const financialChange = e => {
    const name = e.target.name;
    const value = e.target.value
    setFinancialAssets({ ...financialAssets, [name]: value });
    setErrorMessage({ ...errorMessage, [e.target.name]: validator(e) })
  }
  const familyChange = (index, e) => {
    switch (index) {
      case 1:
        setfamilyMember1({ ...familyMember1, [e.target.name]: e.target.value });
        setErrorMessage1({ ...errorMessage1, [e.target.name]: validator(e) })
        break;
      case 2:
        setfamilyMember2({ ...familyMember2, [e.target.name]: e.target.value });
        setErrorMessage2({ ...errorMessage2, [e.target.name]: validator(e) })
        break;
      case 3:
        setfamilyMember3({ ...familyMember3, [e.target.name]: e.target.value });
        setErrorMessage3({ ...errorMessage3, [e.target.name]: validator(e) })
        break;
      case 4:
        setfamilyMember4({ ...familyMember4, [e.target.name]: e.target.value });
        setErrorMessage4({ ...errorMessage4, [e.target.name]: validator(e) })
        break;
      case 5:
        setfamilyMember5({ ...familyMember5, [e.target.name]: e.target.value });
        setErrorMessage5({ ...errorMessage5, [e.target.name]: validator(e) })
        break;
      case 6:
        setfamilyMember6({ ...familyMember6, [e.target.name]: e.target.value });
        setErrorMessage6({ ...errorMessage6, [e.target.name]: validator(e) })
        break;
    }
  }
  const propertyInfoChange = (index, e) => {
    switch (index) {
      case 1:
        setProperty1({ ...property1, [e.target.name]: e.target.value });
        setErrorMessage1({ ...errorMessage1, [e.target.name]: validator(e) })
        break;
      case 2:
        setProperty2({ ...property2, [e.target.name]: e.target.value });
        setErrorMessage2({ ...errorMessage2, [e.target.name]: validator(e) })
        break;
      case 3:
        setProperty3({ ...property3, [e.target.name]: e.target.value });
        setErrorMessage3({ ...errorMessage3, [e.target.name]: validator(e) })
        break;
      case 4:
        setProperty4({ ...property4, [e.target.name]: e.target.value });
        setErrorMessage4({ ...errorMessage4, [e.target.name]: validator(e) })
        break;
      case 5:
        setProperty5({ ...property5, [e.target.name]: e.target.value });
        setErrorMessage5({ ...errorMessage5, [e.target.name]: validator(e) })
        break;
      case 6:
        setProperty6({ ...property6, [e.target.name]: e.target.value });
        setErrorMessage6({ ...errorMessage6, [e.target.name]: validator(e) })
        break;
    }
  }
//固定資産税納付書・謄本
  const propertyFileChange = (index, e) => {
  const value = e.target.value
  const name = e.target.name;
  const filePath = today + '.' + value.match(/[^.]+$/);
  switch (index) {
    case 1:
      setProperty1({ ...property1, [name]: filePath });
      setErrorMessage1({ ...errorMessage1, [name]: validator(e) })
      if (name == 'copy_of_register') {
        setCopyOfRegister1(e.target.files[0])
      } else if (name == 'tax_payment_slip') {
        setTaxPaymentSlip1(e.target.files[0])
      } else if (name == 'repayment_slip') {
        setRepaymentSlip1(e.target.files[0])
      }
      break;
    case 2:
      setProperty2({ ...property2, [name]: filePath });
      setErrorMessage2({ ...errorMessage2, [name]: validator(e) })
      if (name == 'copy_of_register') {
        setCopyOfRegister2(e.target.files[0])
      } else if (name == 'tax_payment_slip') {
        setTaxPaymentSlip2(e.target.files[0])
      } else if (name == 'repayment_slip') {
        setRepaymentSlip2(e.target.files[0])
      }
      break;
    case 3:
      setProperty3({ ...property3, [name]: filePath });
      setErrorMessage3({ ...errorMessage3, [name]: validator(e) })
      if (name == 'copy_of_register') {
        setCopyOfRegister3(e.target.files[0])
      } else if (name == 'tax_payment_slip') {
        setTaxPaymentSlip3(e.target.files[0])
      } else if (name == 'repayment_slip') {
        setRepaymentSlip3(e.target.files[0])
      }
      break;
    case 4:
      setProperty4({ ...property4, [name]: filePath });
      setErrorMessage4({ ...errorMessage4, [name]: validator(e) })
      if (name == 'copy_of_register') {
        setCopyOfRegister4(e.target.files[0])
      } else if (name == 'tax_payment_slip') {
        setTaxPaymentSlip4(e.target.files[0])
      } else if (name == 'repayment_slip') {
        setRepaymentSlip4(e.target.files[0])
      }
      break;
    case 5:
      setProperty5({ ...property5, [name]: filePath });
      setErrorMessage5({ ...errorMessage5, [name]: validator(e) })
      if (name == 'copy_of_register') {
        setCopyOfRegister5(e.target.files[0])
      } else if (name == 'tax_payment_slip') {
        setTaxPaymentSlip5(e.target.files[0])
      } else if (name == 'repayment_slip') {
        setRepaymentSlip5(e.target.files[0])
      }
      break;
    case 6:
      setProperty6({ ...property6, [name]: filePath });
      setErrorMessage6({ ...errorMessage6, [name]: validator(e) })
      if (name == 'copy_of_register') {
        setCopyOfRegister6(e.target.files[0])
      } else if (name == 'tax_payment_slip') {
        setTaxPaymentSlip6(e.target.files[0])
      } else if (name == 'repayment_slip') {
        setRepaymentSlip6(e.target.files[0])
      }
      break;
  }
}

  return (
    <div>
      <Header title='ローン相談表記入ページ'></Header>

      <div className="container">
        <div className="text-center mb-4">
          <h1 className="pt-4 pb-4"><Link href="/">ローン相談表</Link></h1>
          <p>{currentUser.displayName}様</p>
        </div>

        <div className="accordion mb-4" id="accordionExample">
        <CustomerInfo customerInfoChange={customerInfoChange} customerInfo={customerInfo} errorMessage={errorMessage} />

        <HouseInfo houseInfoChange={houseInfoChange} errorMessage={errorMessage} houseInfo={houseInfo} />

        <CompanyInfo companyInfoChange={companyInfoChange} companyInfo={companyInfo} errorMessage={errorMessage} companyFileChange={companyFileChange} />

          <AddFamily familyMember1={familyMember1} familyMember2={familyMember2} familyMember3={familyMember3} familyMember4={familyMember4} familyMember5={familyMember5} familyMember6={familyMember6} errorMessage1={errorMessage1} errorMessage2={errorMessage2} errorMessage3={errorMessage3} errorMessage4={errorMessage4} errorMessage5={errorMessage5} errorMessage6={errorMessage6} familyChange={familyChange} setfamilyMember1={setfamilyMember1} setfamilyMember2={setfamilyMember2} setfamilyMember3={setfamilyMember3} setfamilyMember4={setfamilyMember4} setfamilyMember5={setfamilyMember5} setfamilyMember6={setfamilyMember6}></AddFamily>

          <AddProperty property1={property1} property2={property2} property3={property3} property4={property4} property5={property5} property6={property6} errorMessage1={errorMessage1} errorMessage2={errorMessage2} errorMessage3={errorMessage3} errorMessage4={errorMessage4} errorMessage5={errorMessage5} errorMessage6={errorMessage6} propertyInfoChange={propertyInfoChange} property1={property1} propertyFileChange={propertyFileChange} setProperty1={setProperty1} setProperty2={setProperty2} setProperty3={setProperty3} setProperty4={setProperty4} setProperty5={setProperty5} setProperty6={setProperty6} setRepaymentSlip1={setRepaymentSlip1} setRepaymentSlip2={setRepaymentSlip2} setRepaymentSlip3={setRepaymentSlip3} setRepaymentSlip4={setRepaymentSlip4} setRepaymentSlip5={setRepaymentSlip5} setRepaymentSlip6={setRepaymentSlip6} setTaxPaymentSlip1={setTaxPaymentSlip1} setTaxPaymentSlip2={setTaxPaymentSlip2} setTaxPaymentSlip3={setTaxPaymentSlip3} setTaxPaymentSlip4={setTaxPaymentSlip4} setTaxPaymentSlip5={setTaxPaymentSlip5} setTaxPaymentSlip6={setTaxPaymentSlip6} setCopyOfRegister1={setCopyOfRegister1} setCopyOfRegister2={setCopyOfRegister2} setCopyOfRegister3={setCopyOfRegister3} setCopyOfRegister4={setCopyOfRegister4} setCopyOfRegister5={setCopyOfRegister5} setCopyOfRegister6={setCopyOfRegister6}></AddProperty>

          <FinancialAssets financialAssets={financialAssets} financialFileChange={financialFileChange} errorMessage={errorMessage} financialChange={financialChange} />
        </div>
        <div className="d-grid mb-3">
          <SaveButton property1={property1} property2={property2} property3={property3} property4={property4} property5={property5} property6={property6} financialAssets={financialAssets} companyInfo={companyInfo} customerInfo={customerInfo} houseInfo={houseInfo} companyInfo={companyInfo} familyMember1={familyMember1} familyMember2={familyMember2} familyMember3={familyMember3} familyMember4={familyMember4} familyMember5={familyMember5} familyMember6={familyMember6} errorMessage={errorMessage} errorMessage1={errorMessage1} errorMessage2={errorMessage2} errorMessage3={errorMessage3} errorMessage4={errorMessage4} errorMessage5={errorMessage5} errorMessage6={errorMessage6} repaymentSlip1={repaymentSlip1} repaymentSlip2={repaymentSlip2} repaymentSlip3={repaymentSlip3} repaymentSlip4={repaymentSlip4} repaymentSlip5={repaymentSlip5} repaymentSlip6={repaymentSlip6} taxPaymentSlip1={taxPaymentSlip1} taxPaymentSlip2={taxPaymentSlip2} taxPaymentSlip3={taxPaymentSlip3} taxPaymentSlip4={taxPaymentSlip4} taxPaymentSlip5={taxPaymentSlip5} taxPaymentSlip6={taxPaymentSlip6} copyOfRegister1={copyOfRegister1} copyOfRegister2={copyOfRegister2} copyOfRegister3={copyOfRegister3} copyOfRegister4={copyOfRegister4} copyOfRegister5={copyOfRegister5} copyOfRegister6={copyOfRegister6} passbook={passbook} securitiesFirm={securitiesFirm} incomeProof={incomeProof} currentUser={currentUser} />
        </div>
        <div className="d-grid mb-3"><DoneEntryButton property1={property1} property2={property2} property3={property3} property4={property4} property5={property5} property6={property6} financialAssets={financialAssets} companyInfo={companyInfo} customerInfo={customerInfo} houseInfo={houseInfo} familyMember1={familyMember1} familyMember2={familyMember2} familyMember3={familyMember3} familyMember4={familyMember4} familyMember5={familyMember5} familyMember6={familyMember6} errorMessage={errorMessage} errorMessage1={errorMessage1} errorMessage2={errorMessage2} errorMessage3={errorMessage3} errorMessage4={errorMessage4} errorMessage5={errorMessage5} errorMessage6={errorMessage6} repaymentSlip1={repaymentSlip1} repaymentSlip2={repaymentSlip2} repaymentSlip3={repaymentSlip3} repaymentSlip4={repaymentSlip4} repaymentSlip5={repaymentSlip5} repaymentSlip6={repaymentSlip6} taxPaymentSlip1={taxPaymentSlip1} taxPaymentSlip2={taxPaymentSlip2} taxPaymentSlip3={taxPaymentSlip3} taxPaymentSlip4={taxPaymentSlip4} taxPaymentSlip5={taxPaymentSlip5} taxPaymentSlip6={taxPaymentSlip6} copyOfRegister1={copyOfRegister1} copyOfRegister2={copyOfRegister2} copyOfRegister3={copyOfRegister3} copyOfRegister4={copyOfRegister4} copyOfRegister5={copyOfRegister5} copyOfRegister6={copyOfRegister6} passbook={passbook} securitiesFirm={securitiesFirm} incomeProof={incomeProof} currentUser={currentUser}></DoneEntryButton></div>
        <div className="d-grid"><LogoutButton /></div>

      </div>

    </div>
  )
}
