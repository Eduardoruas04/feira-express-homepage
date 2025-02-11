import Image from "next/image";
import React from "react";
import styles from "~/styles/UserPage.module.css";
import Navbar from "../navbar/page";

const UserPage = () => {
    return (
        <>
        <Navbar/>
            <div className={styles.container}>
                <div className={styles.userTitle}>
                    <Image
                        className={styles.avatar}
                        src="/UserDefaultImg.png"
                        alt="Avatar do Usuário"
                        width={100}
                        height={100}
                    />
                    <div className={styles.name}>Meu Nome</div>
                </div>

                {/* Formulário de edição */}
                <div>
                    <h2>Editar</h2>
                    <form>
                        <input type="text" placeholder="Nome Completo" />
                        <input type="email" placeholder="E-mail" />
                        <input type="text" placeholder="Telefone" />
                        <input type="text" placeholder="Endereço" />
                        <input type="text" placeholder="Cidade" />
                        <input type="text" placeholder="Estado" />
                        <input type="text" placeholder="País" />
                    </form>
                </div>

                <div className={styles.email}>usuario@email.com</div>
                <div className={styles.bio}>Uma breve descrição sobre o usuário...</div>
                <button className={styles.btnEdit}>Editar Perfil</button>
            </div>
        </>
    );
}

export default UserPage;
