import Topbar from 'components/Topbar/index'
import React from 'react'
import style from "styles/Pages/Login/Login.module.scss"
import Image from "next/image"
import SVGImages from "assets/images/index";


function index() {
    return (
        <div className={style.container}>
            <Topbar />
            <div className={style.section}>
                <div className={style.promo}>
                    <h3>Welcome Aboard! 🚀</h3>
                    <p>Our Sign In process uses industry-standard<br /> encryption and security measures to protect your<br /> account information. Your data is safe with us.</p>
                    <Image
                        src={SVGImages.loginbg}
                        width={560}
                        height={390}
                        alt="login-bg"
                        className={style.loginbg}
                    />
                </div>
                <div className={style.loginform}>
                    <div className={style.formContainer}>
                        <div className={style.formwrapper}>
                            <h2>Welcome back to the <br /> Techlanz Community</h2>
                            <div className={style.formItem}>
                                <label>Email</label>
                                <input />
                            </div>
                            <div className={style.formItem}>
                                <label>password</label>
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