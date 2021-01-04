import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';
import styles from '../styles/Layout.module.scss';


const Layout = props => {
	return (
		<div className={styles.layout}>
			<Head>
				<title>Memories</title>
			</Head>

			<Header />
			<div className={styles.content}>{props.children}</div>
			<Footer />
		</div>
	);
};

export default Layout;
