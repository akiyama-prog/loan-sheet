import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { db, auth } from '../../lib/db'
import AnnualIncome from '../../components/AnnualIncome'
import Loading from '../../components/Loading'
import firebase from 'firebase/app'

export default function customerPage() {
    const router = useRouter();
    const {id}  = router.query;
    const [creationYear, setCreationYear] = useState('');//税込み年収計算用。
    const [customerInfo, setCustomerInfo] = useState('');
    const [houseInfo, setHouseInfo] = useState('');
    const [companyInfo, setCompanyInfo] = useState('');
    const [familyMember1, setfamilyMember1] = useState('');
    const [familyMember2, setfamilyMember2] = useState('');
    const [familyMember3, setfamilyMember3] = useState('');
    const [familyMember4, setfamilyMember4] = useState('');
    const [familyMember5, setfamilyMember5] = useState('');
    const [familyMember6, setfamilyMember6] = useState('');
    const [property1, setProperty1] = useState('');
    const [property2, setProperty2] = useState('');
    const [property3, setProperty3] = useState('');
    const [property4, setProperty4] = useState('');
    const [property5, setProperty5] = useState('');
    const [property6, setProperty6] = useState('');
    const [financialAssets, setFinancialAssets] = useState('');
    useEffect(() => {
        let unsubscribe = auth.onAuthStateChanged((user) => {
            if (user.uid != 'Qr6y16tydjPBnSwwfIR4t6ebVcD3' && user.uid != router.query ){
                router.push('/entry')
            } else {
                let creationDate = new Date(user.metadata.creationTime);
                setCreationYear(creationDate.getFullYear())
            }
            if (db.collection('customers').doc(id)) {
            //dataをセット
            db.collection('customers').doc(id).collection('informations').doc('customerInfo').get().then(ob => {
                if (Object.keys(ob.data()).length) {
                    setCustomerInfo(ob.data());//data()でドキュメントの値を取り出しステートに保管
                }
            })
            db.collection('customers').doc(id).collection('informations').doc('houseInfo').get().then(ob => {
                if (Object.keys(ob.data()).length) {
                    setHouseInfo(ob.data());
                }
            })
            db.collection('customers').doc(id).collection('informations').doc('companyInfo').get().then(ob => {
                if (Object.keys(ob.data()).length) {
                    setCompanyInfo(ob.data());
                }
            })
            db.collection('customers').doc(id).collection('informations').doc('familyInfo').get().then(ob => {
                if (Object.keys(ob.data()).length) {
                  setfamilyMember1(ob.data().familyMember1);
                  setfamilyMember2(ob.data().familyMember2);
                  setfamilyMember3(ob.data().familyMember3);
                  setfamilyMember4(ob.data().familyMember4);
                  setfamilyMember5(ob.data().familyMember5);
                  setfamilyMember6(ob.data().familyMember6);
                }
            })
            db.collection('customers').doc(id).collection('informations').doc('propertyInfo').get().then(ob => {
                if (Object.keys(ob.data()).length) {
                  setProperty1(ob.data().property1);
                  setProperty2(ob.data().property2);
                  setProperty3(ob.data().property3);
                  setProperty4(ob.data().property4);
                  setProperty5(ob.data().property5);
                  setProperty6(ob.data().property6);
                }
            })
            db.collection('customers').doc(id).collection('informations').doc('financialAssets').get().then(ob => {
                if (Object.keys(ob.data()).length) {
                    setFinancialAssets(ob.data());
                }
            })
          }
          unsubscribe();
        })
    }, [])


    const downloadFile = (e) => {
        switch (e) {
            case 'income_proof':
                firebase.storage().ref("income_proof/" + companyInfo.income_proof).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'passbook':
                firebase.storage().ref("passbook/" + financialAssets.passbook).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'securities_firm':
                firebase.storage().ref("securities_firm/" + financialAssets.securities_firm).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'repayment_slip1':
                firebase.storage().ref("repayment_slip/" + property1.repayment_slip).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'tax_payment_slip1':
                firebase.storage().ref("tax_payment_slip/" + property1.tax_payment_slip).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'copy_of_register1':
                firebase.storage().ref("copy_of_register/" + property1.copy_of_register).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'repayment_slip2':
                firebase.storage().ref("repayment_slip/" + property2.repayment_slip).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'tax_payment_slip2':
                firebase.storage().ref("tax_payment_slip/" + property2.tax_payment_slip).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'copy_of_register2':
                firebase.storage().ref("copy_of_register/" + property2.copy_of_register).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'repayment_slip3':
                firebase.storage().ref("repayment_slip/" + property3.repayment_slip).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'tax_payment_slip3':
                firebase.storage().ref("tax_payment_slip/" + property3.tax_payment_slip).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'copy_of_register3':
                firebase.storage().ref("copy_of_register/" + property3.copy_of_register).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'repayment_slip4':
                firebase.storage().ref("repayment_slip/" + property4.repayment_slip).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'tax_payment_slip4':
                firebase.storage().ref("tax_payment_slip/" + property4.tax_payment_slip).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'copy_of_register4':
                firebase.storage().ref("copy_of_register/" + property4.copy_of_register).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'repayment_slip5':
                firebase.storage().ref("repayment_slip/" + property5.repayment_slip).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'tax_payment_slip5':
                firebase.storage().ref("tax_payment_slip/" + property5.tax_payment_slip).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'copy_of_register5':
                firebase.storage().ref("copy_of_register/" + property5.copy_of_register).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'repayment_slip6':
                firebase.storage().ref("repayment_slip/" + property6.repayment_slip).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'tax_payment_slip6':
                firebase.storage().ref("tax_payment_slip/" + property6.tax_payment_slip).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
            case 'copy_of_register6':
                firebase.storage().ref("copy_of_register/" + property6.copy_of_register).getDownloadURL().then(function (url) {
                    window.open(url, '_blank');
                })
                break;
        }
    }

    return (
        <div>
            <div className="container-sm">

                <p className="text-center pt-4"><Link href="/admin-index">登録者一覧に戻る</Link></p>

                <h3>本人の情報</h3>
                
                <table className="table table-bordered table-hover">
                    <tbody>
                        <tr>
                            <th className="table-active">名前</th>
                            <td>{customerInfo.name_kanji}({customerInfo.name_kana})</td>
                        </tr>
                        <tr>
                            <th className="table-active">生年月日</th>
                            <td>{customerInfo.birthday}<GetAge birthday={customerInfo.birthday} /></td>
                        </tr>
                        <tr>
                            <th className="table-active">住所</th>
                            <td>〒{customerInfo.zipcode}<br />{customerInfo.address}{customerInfo.building_name}</td>
                        </tr>
                        <tr>
                            <th className="table-active">メールアドレス</th>
                            <td>{customerInfo.email}</td>
                        </tr>
                        <tr>
                            <th className="table-active">電話番号</th>
                            <td>{customerInfo.tel}</td>
                        </tr>
                    </tbody>
                </table>
                <hr />
                
                <h3>お住まい状況</h3>
                <p>{houseInfo.options_outlined}</p>
                <h4>住宅ローン</h4>

                <table className="table table-bordered table-hover">
                    <tbody>
                        <tr>
                            <th className="table-active">借入額</th>
                            <td>{houseInfo.house_borrowing_amount}万円</td>
                        </tr>
                        <tr>
                            <th className="table-active">ローン残存期間</th>
                            <td>{houseInfo.remaining_loan_year}年{houseInfo.remaining_loan_month}</td>
                        </tr>
                        <tr>
                            <th className="table-active">借家の場合</th>
                            <td>{houseInfo.room_type}<br />{houseInfo.room_rent}円/月</td>
                        </tr>
                    </tbody>
                </table>

                <hr />

                <h3>勤務先</h3>
                <table className="table table-bordered table-hover">
                    <tbody>
                        <tr>
                            <th className="table-active">会社名</th>
                            <td>{companyInfo.company_name}</td>
                        </tr>
                        <tr>
                            <th className="table-active">所属部署</th>
                            <td>{companyInfo.company_section}</td>
                        </tr>
                        <tr>
                            <th className="table-active">職種</th>
                            <td>{companyInfo.company_job_type}</td>
                        </tr>
                        <tr>
                            <th className="table-active">役職名</th>
                            <td>{companyInfo.company_position}</td>
                        </tr>
                        <tr>
                            <th className="table-active">住所</th>
                            <td>{companyInfo.company_address}</td>
                        </tr>
                        <tr>
                            <th className="table-active">電話番号</th>
                            <td>{companyInfo.company_tel}</td>
                        </tr>
                        <tr>
                            <th className="table-active">勤続年数</th>
                            <td>{companyInfo.working_year}年{companyInfo.working_month}ヶ月</td>
                        </tr>
                        <tr>
                            <th className="table-active">定年</th>
                            <td>満{companyInfo.retire_age}歳</td>
                        </tr>
                    </tbody>
                </table>

                <hr />

                <h3>税込み年収</h3>
                {/* 登録した年を基準に1~3年前の年度を計算 */}
                <p><AnnualIncome theYear={creationYear} yearAgo='3'/>年：{companyInfo.three_years_ago_income}万円</p>
                <p><AnnualIncome theYear={creationYear} yearAgo='2'/>年：{companyInfo.two_years_ago_income}万円</p>
                <p><AnnualIncome theYear={creationYear} yearAgo='1' />年：{companyInfo.previous_income}万円</p>
                { companyInfo.income_proof && <button onClick={()=>downloadFile('income_proof')}>収入証明</button>}

                <hr />

                <h3>家族構成</h3>
                <div className="table-responsive mb-4">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>氏名</th>
                                <th>続柄</th>
                                <th>生年月日</th>
                                <th>同居</th>
                                <th>住所</th>
                                <th>連帯保証</th>
                                <th>勤務先</th>
                                <th>年収(万円)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{familyMember1.family_name}</td>
                                <td>{familyMember1.family_relationship}</td>
                                <td>{familyMember1.family_birthday}</td>
                                <td>{familyMember1.is_live_together1}</td>
                                <td>{familyMember1.family_address}</td>
                                <td>{familyMember1.is_guarantee1}</td>
                                <td>{familyMember1.family_working_for}</td>
                                <td>{familyMember1.family_income}</td>
                            </tr>
                            <tr>
                                <td>{familyMember2.family_name}</td>
                                <td>{familyMember2.family_relationship}</td>
                                <td>{familyMember2.family_birthday}</td>
                                <td>{familyMember2.is_live_together2}</td>
                                <td>{familyMember2.family_address}</td>
                                <td>{familyMember2.is_guarantee2}</td>
                                <td>{familyMember2.family_working_for}</td>
                                <td>{familyMember2.family_income}</td>
                            </tr>
                            <tr>
                                <td>{familyMember3.family_name}</td>
                                <td>{familyMember3.family_relationship}</td>
                                <td>{familyMember3.family_birthday}</td>
                                <td>{familyMember3.is_live_together3}</td>
                                <td>{familyMember3.family_address}</td>
                                <td>{familyMember3.is_guarantee3}</td>
                                <td>{familyMember3.family_working_for}</td>
                                <td>{familyMember3.family_income}</td>
                            </tr>
                            <tr>
                                <td>{familyMember4.family_name}</td>
                                <td>{familyMember4.family_relationship}</td>
                                <td>{familyMember4.family_birthday}</td>
                                <td>{familyMember4.is_live_together4}</td>
                                <td>{familyMember4.family_address}</td>
                                <td>{familyMember4.is_guarantee4}</td>
                                <td>{familyMember4.family_working_for}</td>
                                <td>{familyMember4.family_income}</td>
                            </tr>
                            <tr>
                                <td>{familyMember5.family_name}</td>
                                <td>{familyMember5.family_relationship}</td>
                                <td>{familyMember5.family_birthday}</td>
                                <td>{familyMember5.is_live_together5}</td>
                                <td>{familyMember5.family_address}</td>
                                <td>{familyMember5.is_guarantee5}</td>
                                <td>{familyMember5.family_working_for}</td>
                                <td>{familyMember5.family_income}</td>
                            </tr>
                            <tr>
                                <td>{familyMember6.family_name}</td>
                                <td>{familyMember6.family_relationship}</td>
                                <td>{familyMember6.family_birthday}</td>
                                <td>{familyMember6.is_live_together6}</td>
                                <td>{familyMember6.family_address}</td>
                                <td>{familyMember6.is_guarantee6}</td>
                                <td>{familyMember6.family_working_for}</td>
                                <td>{familyMember6.family_income}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <h3>保有不動産</h3>
                <div className="table-responsive mb-4">
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>用途</th>
                                <th>所在</th>
                                <th>面積</th>
                                <th>価格(万円)</th>
                                <th>構造</th>
                                <th>築年月日</th>
                                <th>家賃収入</th>
                                <th>借入先</th>
                                <th>残高(万円)</th>
                                <th>残期間</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{property1.building_use}</td>
                                <td>{property1.building_address}</td>
                                <td>{property1.building_square_meters}</td>
                                <td>{property1.building_price}</td>
                                <td>{property1.building_structure}</td>
                                <td>{property1.building_built_year}</td>
                                <td>{property1.property_borrowing_amount}</td>
                                <td>{property1.building_income}</td>
                                <td>{property1.borrowing_amount}</td>
                                <td>{property1.building_remaining_period}</td>
                                <td>
                                    {property1.repayment_slip && <button onClick={() => downloadFile('repayment_slip1')}>返済明細表</button>}
                                    {property1.tax_payment_slip && <button onClick={() => downloadFile('tax_payment_slip1')}>固定資産税納付書</button>}
                                    {property1.copy_of_register && <button onClick={() => downloadFile('copy_of_register1')}>登記簿謄本</button>}
                                </td>
                            </tr>
                            <tr>
                                <td>{property2.building_use}</td>
                                <td>{property2.building_address}</td>
                                <td>{property2.building_square_meters}</td>
                                <td>{property2.building_price}</td>
                                <td>{property2.building_structure}</td>
                                <td>{property2.building_built_year}</td>
                                <td>{property2.property_borrowing_amount}</td>
                                <td>{property2.building_income}</td>
                                <td>{property2.borrowing_amount}</td>
                                <td>{property2.building_remaining_period}</td>
                                <td>
                                    {property2.repayment_slip && <button onClick={() => downloadFile('repayment_slip2')}>返済明細表</button>}
                                    {property2.tax_payment_slip && <button onClick={() => downloadFile('tax_payment_slip2')}>固定資産税納付書</button>}
                                    {property2.copy_of_register && <button onClick={() => downloadFile('copy_of_register2')}>登記簿謄本</button>}
                                </td>
                            </tr>
                            <tr>
                                <td>{property3.building_use}</td>
                                <td>{property3.building_address}</td>
                                <td>{property3.building_square_meters}</td>
                                <td>{property3.building_price}</td>
                                <td>{property3.building_structure}</td>
                                <td>{property3.building_built_year}</td>
                                <td>{property3.property_borrowing_amount}</td>
                                <td>{property3.building_income}</td>
                                <td>{property3.borrowing_amount}</td>
                                <td>{property3.building_remaining_period}</td>
                                <td>
                                    {property3.repayment_slip && <button onClick={() => downloadFile('repayment_slip3')}>返済明細表</button>}
                                    {property3.tax_payment_slip && <button onClick={() => downloadFile('tax_payment_slip3')}>固定資産税納付書</button>}
                                    {property3.copy_of_register && <button onClick={() => downloadFile('copy_of_register3')}>登記簿謄本</button>}
                                </td>
                            </tr>
                            <tr>
                                <td>{property4.building_use}</td>
                                <td>{property4.building_address}</td>
                                <td>{property4.building_square_meters}</td>
                                <td>{property4.building_price}</td>
                                <td>{property4.building_structure}</td>
                                <td>{property4.building_built_year}</td>
                                <td>{property4.property_borrowing_amount}</td>
                                <td>{property4.building_income}</td>
                                <td>{property4.borrowing_amount}</td>
                                <td>{property4.building_remaining_period}</td>
                                <td>
                                    {property4.repayment_slip && <button onClick={() => downloadFile('repayment_slip4')}>返済明細表</button>}
                                    {property4.tax_payment_slip && <button onClick={() => downloadFile('tax_payment_slip4')}>固定資産税納付書</button>}
                                    {property4.copy_of_register && <button onClick={() => downloadFile('copy_of_register4')}>登記簿謄本</button>}
                                </td>
                            </tr>
                            <tr>
                                <td>{property5.building_use}</td>
                                <td>{property5.building_address}</td>
                                <td>{property5.building_square_meters}</td>
                                <td>{property5.building_price}</td>
                                <td>{property5.building_structure}</td>
                                <td>{property5.building_built_year}</td>
                                <td>{property5.property_borrowing_amount}</td>
                                <td>{property5.building_income}</td>
                                <td>{property5.borrowing_amount}</td>
                                <td>{property5.building_remaining_period}</td>
                                <td>
                                    {property5.repayment_slip && <button onClick={() => downloadFile('repayment_slip5')}>返済明細表</button>}
                                    {property5.tax_payment_slip && <button onClick={() => downloadFile('tax_payment_slip5')}>固定資産税納付書</button>}
                                    {property5.copy_of_register && <button onClick={() => downloadFile('copy_of_register5')}>登記簿謄本</button>}
                                </td>
                            </tr>
                            <tr>
                                <td>{property6.building_use}</td>
                                <td>{property6.building_address}</td>
                                <td>{property6.building_square_meters}</td>
                                <td>{property6.building_price}</td>
                                <td>{property6.building_structure}</td>
                                <td>{property6.building_built_year}</td>
                                <td>{property6.property_borrowing_amount}</td>
                                <td>{property6.building_income}</td>
                                <td>{property6.borrowing_amount}</td>
                                <td>{property6.building_remaining_period}</td>
                                <td>
                                    {property6.repayment_slip && <button onClick={() => downloadFile('repayment_slip6')}>返済明細表</button>}
                                    {property6.tax_payment_slip && <button onClick={() => downloadFile('tax_payment_slip6')}>固定資産税納付書</button>}
                                    {property6.copy_of_register && <button onClick={() => downloadFile('copy_of_register6')}>登記簿謄本</button>}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                <h3>保有金融資産</h3>
                <h4 className="mb-2">預金</h4>
                <div className="mb-4">
                    { financialAssets.passbook && <button onClick={() => downloadFile('passbook')}>通帳の写し</button>}
                    {financialAssets.passbook == '' &&
                        <div>
                            <p>内容：{financialAssets.bank_deposit_detail}</p>
                            <p>残高：{financialAssets.bank_borrowing_amount}万円</p>
                            <p>備考：{financialAssets.bank_deposit_others}</p>
                        </div>
                    }
                </div>
                <h4 className="mb-2">証券</h4>
                <div className="mb-4">
                    { financialAssets.securities_firm && <button onClick={() => downloadFile('securities_firm')}>証券会社一覧の写し</button>}
                    {financialAssets.securities_firm == '' &&
                        <div>
                            <p>内容：{financialAssets.securities_detail}</p>
                            <p>残高：{financialAssets.securities_borrowing_amount}万円</p>
                            <p>備考：{financialAssets.securities_others}</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    )
}

function GetAge(props) {
    //propsがわたるまでloading
    const [isShowLoading, setIsShowLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setIsShowLoading(true);//loading完了
        }, 1000);
    });
    if (props.birthday == undefined) {
        return <Loading isShow={isShowLoading} />;
    }
    let today = new Date();
    let birthday = new Date(props.birthday)
    let thisYearsBirthday = new Date(today.getFullYear(), birthday.getMonth() - 1, birthday.getDate());
    let age = today.getFullYear() - birthday.getFullYear();
    if (today < thisYearsBirthday) {
        age--;
    }
    return <p>(満{age}歳)</p>;
}