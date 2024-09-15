import React from "react";
import LoginPanel from "../component/LoginPage/LoginPanel";
import LoginBanner from "../component/LoginPage/LoginBanner";
import styles from  "../component/LoginPage/Login.module.css";
function LoginPage(){
    return(
        <div className={styles.loginPage}>
                <LoginBanner></LoginBanner>          
                <LoginPanel></LoginPanel>          
        </div>
        
        
    )
}

export default LoginPage;