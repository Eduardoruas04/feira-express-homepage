import Image from "next/image";
import React from "react";
import styles from "~/styles/UserPage.module.css";
import Navbar from "../navbar/page";


export default function UserPage() {
    return (
        <>
            <Navbar />
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
                <section className={styles.editSection}>
                    <h2>EDITAR</h2>
                    <form className={styles.editForm}>
                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="fullName">Nome Completo</label>
                            <input type="text" id="fullName" placeholder="Nome Completo" defaultValue="Maria da Silva" />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="username">Usuário</label>
                            <input type="text" id="username" placeholder="Usuário" defaultValue="Maria" />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="email">Email</label>
                            <input type="email" id="email" placeholder="Email" defaultValue="maria@gmail.com" />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="password">Senha</label>
                            <input type="password" id="password" placeholder="Senha" defaultValue="********" />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="phone">Telefone</label>
                            <input type="tel" id="phone" placeholder="Telefone" defaultValue="61999999999" />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="whatsapp">WhatsApp</label>
                            <input type="text" id="whatsapp" placeholder="WhatsApp" defaultValue="61999999999" />
                        </div>

                        <div className={styles.formGroup}>
                            <label className={styles.label} htmlFor="instagram">Instagram</label>
                            <input type="text" id="instagram" placeholder="Instagram" defaultValue="maria" />
                        </div>
                    </form>
                    <div className={styles.button}>
                        <button className={styles.btnSalvarAlteracoes}>Salvar alterações</button>
                    </div>
                </section>

                <section className={styles.reviewsSection}>
                    <h2>MINHAS AVALIAÇÕES</h2>
                    <div className={styles.reviews}>
                        <div className={styles.review}>
                            <h3>Sarah M.</h3>
                            <p>⭐⭐⭐⭐⭐</p>
                            <p>Gostei muito do atendimento da banca e o produto veio em perfeitas condições!</p>
                        </div>
                    </div>
                </section>

                <section className={styles.historySection}>
                    <h2>HISTÓRICO DE COMPRAS</h2>
                    <div className={styles.tabs}>
                        <button className={styles.activeTab}>Produtos</button>
                        <button>Bancas</button>
                    </div>
                    <div className={styles.products}>
                        <div className={styles.product}>
                            <Image
                                src="/Escova.jpg"
                                alt="Escova"
                                width={100}
                                height={100}
                                className={styles.img}
                            />
                            <p>Escova de Careca</p>
                            <p>⭐⭐⭐⭐</p>
                            <p>$145</p>
                        </div>
                    </div>
                </section>
                <div className={styles.buttonDiv}>
                    <button className={styles.btnBanca}>Ir para minha banca</button>
                </div>
            </div>
        </>
    );
}
