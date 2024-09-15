import React from "react";
import styles from './Login.module.css'
function LoginPanel(){
    return(
        <div className={styles.panel}>
            <div className={styles.niloName}>nilo</div>
            <div className={styles.crendentials}>Developed by Gabriel ferreira</div>
        </div>
    )
}
export default LoginPanel;