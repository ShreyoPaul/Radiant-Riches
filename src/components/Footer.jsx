import styles from '@/styles/Footer.module.css'


const Footer = () => {
    return (
        <div className={styles.footer_wrp}>
            <div className={styles.footer}>
                <div className={styles.footer_sec1}>
                    <div className={styles.footer_sec1_1}>
                        <div className={styles.footer_txt_1}>Categories</div>
                        <div className={styles.footer_txt_2}>Web Builder</div>
                        <div className={styles.footer_txt_2}>Hosting</div>
                        <div className={styles.footer_txt_2}>Data Center</div>
                        <div className={styles.footer_txt_2}>Robotic-Automation</div>
                    </div>
                    <div className={styles.footer_sec1_2}>
                        <div className={styles.footer_txt_1}>Contact</div>
                        <div className={styles.footer_txt_2}>Contact</div>
                        <div className={styles.footer_txt_2}>Privacy Policy</div>
                        <div className={styles.footer_txt_2}>Terms Of Service</div>
                        <div className={styles.footer_txt_2}>Categories</div>
                        <div className={styles.footer_txt_2}>About</div>
                    </div>
                </div>
                <select className={styles.select_state}>
                    <option>United State</option>
                    <option>India</option>
                </select>
            </div>
        </div>
    )
}

export default Footer