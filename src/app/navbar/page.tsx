import React from "react";
import Image from "next/image";
import Link from "next/link";
import styles from "~/styles/Navbar.module.css";

const Navbar = () => {
    return (
        <>
            <div className={styles.navbar}>
                <h2 className={styles.feiraExpress}>Feira Express</h2>
                <div className={styles.userVectorDiv}>
                        <Link href="/userPage" className={styles.link}>
                            <Image
                                className={styles.userVector}
                                src="/UserVector.svg"
                                alt="User Page"
                                width={50}
                                height={50}
                            />
                        </Link>
                </div>
            </div>
        </>
    )
}

export default Navbar;