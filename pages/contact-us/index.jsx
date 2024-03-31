import Topbar from 'components/Topbar/index'
import React from 'react'
import style from "styles/Components/ContactUs/contactUs.module.scss"
import Image from "next/image"
import SVGImages from "assets/images/index";


function index() {
  return (
    <div className={style.container}>
      <Topbar />
      <div className={style.section}>
        <div className={style.promo}>
          <h3>Connect With Us: Your Questions, Our Answers! 🤝</h3>
          <p>
            For any queries, Please reach out to us. Our Support team will get back to you within 24 hours.
          </p>
          <div className={style.contactUsItem}>
            <Image src={SVGImages.blackMail} className={style.contactIcon} />
            <div className={style.contactTag}>
              <a href="mailto:info@techlanz.com">

                info@techlanz.com
              </a>
            </div>
          </div>
          <div className={style.contactUsItem}>
            <Image src={SVGImages.blackcall} className={style.contactIcon} />
            <div className={style.contactTag}>+91 9047116404</div>
          </div>
          <Image
            src={SVGImages.contactUs}
            width={560}
            height={390}
            alt="login-bg"
            className={style.loginbg}
          />
        </div>
        <div className={style.loginform}>
          <div className={style.formContainer}>
            <div className={style.formwrapper}>
              <h2>Contact Us</h2>
              <div className={style.formItem}>
                <label>name</label>
                <input />
              </div>
              <div className={style.formItem}>
                <label>email</label>
                <input />
              </div>
              <div className={style.formItem}>
                <label>Phone number</label>
                <input />
              </div>
              <div className={style.formItem}>
                <label>message</label>
                <input />
              </div>
              <div className={style.loginbtn}> SIGN IN </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default index