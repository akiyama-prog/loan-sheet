
export default async (req, res) => {
    "use strict";
    const NodeMailer = require('nodemailer')//nodemailerの読み込み
    try{
        let data = req.body
  //console.log( "from=", process.env.SEND_MAIL_ADDRESS)
   console.log( data.customerInfo.name_kanji )
      let transporter = NodeMailer.createTransport({
        host: 'sv1420.xserver.jp',//mailのサーバ
        port: '465',
        secure: true,          //true = SSL
        auth: {
            user:'no-reply@blanciel.jp',
            pass: 'bW9kUJPd'
        },
      });
      let info = await transporter.sendMail({
        from: 'ローン相談表', //送信元名
        to: 'yamada@blanciel.jp',                         //送信先
          subject: 'ローン相談表の登録が完了しました',
        text:data.customerInfo.name_kanji+'様のローン相談表の入力が完了しました。',
          html:
            '<p><b>'+data.customerInfo.name_kanji+'様</b>のローン相談表の入力が完了しました。<br><a href=" http://localhost:3000/data">こちら</a>からご確認ください。<br></p>'
      });
      res.status(200).json({name:'ok'})
    } catch (err) {
      res.status(500).send();
    }
};
