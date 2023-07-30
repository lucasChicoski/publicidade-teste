import styles from "./header.module.scss"

export default function Header() {
    return (
        <div className={styles.headerPrevent}>


            <div className={styles.header} >
                <div className={styles.menu}>
                    <img width="25" height="25" src="https://img.icons8.com/ios-filled/50/menu--v1.png" alt="menu--v1" />
                </div>
                <div className={styles.logo}>
                    <img src="https://assets.agazeta.com.br/agazeta-v2/release-1.0.254/assets/images/ag-menu/agazeta-logo-95anos-270x40-azul.png" alt="" />
                </div>
                <div className={styles.login}>
                    <button className={styles.joinButton} >Assine</button>
                </div>
            </div>
        </div>
    )
}