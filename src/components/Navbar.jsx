'use client'

import { CiSearch } from "react-icons/ci";
import styles from '@/styles/Navbar.module.css'
import react, { useState } from "react"

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false)
    const handleMenu = () => {
        setToggleMenu(!toggleMenu)
    }
    return (
        <div className={styles.navbar_wrp}>
            <div className={styles.navbar}>
                <div className={styles.search_bar}>
                    <div className={styles.search_logo}>
                        <CiSearch />
                    </div>
                    <input type="text" />
                </div>
                <div className={styles.option_wrp} >
                    <div className={styles.option}>Categories</div>
                    <div className={styles.option}>Website Builders</div>
                    <div className={styles.option}>Today's deals</div>
                </div>

                <div className={styles.menu} onClick={handleMenu}>
                    <div className={`${toggleMenu && styles.bar1}`} />
                    <div className={`${toggleMenu && styles.bar2}`} />
                    <div className={`${toggleMenu && styles.bar3}`} />
                </div>


            </div>
            <div className={`${toggleMenu ? styles.option2_wrp : styles.display_none}`}>
                <div className={styles.option}>Categories</div>
                <div className={styles.option}>Website Builders</div>
                <div className={styles.option}>Today's deals</div>
            </div>
        </div>
    )
}

export default Navbar