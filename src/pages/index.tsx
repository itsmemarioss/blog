import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <div className={styles.heroGrid}>
          <div>
            <p className={styles.kicker}>Its me Mario</p>
            <Heading as="h1" className={styles.heroTitle}>
              Mário Sousa
            </Heading>
            <p className={styles.heroSubtitle}>
              Empreendedor (quase), fotógrafo (nas horas vagas), voluntário e
              engenheiro de software.
            </p>
            <div className={styles.heroActions}>
              <Link className="button button--primary button--lg" to="/blog">
                Ver blog
              </Link>
              <a
                className="button button--secondary button--lg"
                href="https://discord.gg/Hy6ybESjku"
                target="_blank"
                rel="noreferrer">
                Entrar no Discord
              </a>
            </div>
          </div>

          <aside className={styles.profileCard}>
            <img
              className={styles.profileImage}
              src="img/me.png"
              alt="Mário sorrindo, usando uma camisa preta e fazendo o sinal de v de vitória com a mão direita."
            />
          </aside>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} - Tech blog`}
      description="Meu blog sobre tecnologia, programação e afins.">
      <HomepageHeader />
      <main className={styles.mainContent}>
        <section className="container">
          <div className={styles.sectionCard}>
            <Heading as="h2">System.out.println("Hello world");</Heading>
            <p>
              Hello world! Me chamo Mário, sou natural de Juazeiro do Norte -
              Ceará, atualmente moro em Lisboa, Portugal. Criei este site para compartilhar informações e
              projetos que possam ser úteis para outras pessoas interessadas em tecnologia.
            </p>
            <p>
              Às vezes, recebo dúvidas sobre assuntos técnicos, como tirar
              certificações, como aprender inglês etc... Percebi que mesmo não
              me considerando apto para responder muitas delas, na maioria
              das vezes minha experiência contribuía de alguma forma. Por isso, 
              decidi criar este espaço para compartilhar um pouco do que sei e 
              do que estou aprendendo. Espero que seja útil!
            </p>
            <p>
              Além disso, a área de tecnologia exige um estudo contínuo e para mim as
              melhores formas de aprender são: compartilhando e fazendo. O que faz deste
              site minha ferramenta de aprendizado, além de documentar qualquer crazy project
              que eu decida fazer. Bem-vindo!
            </p>
          </div>
        </section>

        <section className="container">
          <div className={styles.quickLinks}>
            <Link className={styles.quickLinkCard} to="/blog">
              <h3>Blog</h3>
              <p>Artigos sobre engenharia de software, carreira e aprendizado.</p>
            </Link>
            <Link className={styles.quickLinkCard} to="/book-club">
              <h3>Book Club</h3>
              <p>Leituras e recomendações para evolução técnica.</p>
            </Link>
            <Link className={styles.quickLinkCard} to="/projetos">
              <h3>Projetos</h3>
              <p>Ideias, experimentos e projetos em andamento.</p>
            </Link>
          </div>
        </section>
      </main>
    </Layout>
  );
}
