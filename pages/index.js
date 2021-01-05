import Head from 'next/head';
import styles from '../styles/Home.module.scss';
import sanityClient from '../client';

import Layout from '../components/Layout';

export default function Home({ allPosts }) {

	return (
		<Layout>
			<div className={styles.home}>
				{allPosts.map(post => (
					<div key={post.title}>
						<img src={post.mainImage.asset.url} alt={post.mainImage.title} />
						<h1>{post.title}</h1>
						<h3>{post.date}</h3>
						<p>{post.body[0].children[0].text}</p>
					</div>
				))}
			</div>
		</Layout>
	);
}

export async function getStaticProps() {
	const allPosts = await sanityClient.fetch(`*[_type == 'post'] | order(date desc){
        title, 
        date, 
        body,
        mainImage{
            asset->{
                _id,
                url
            },
        }
    }`);
	return {
		props: { allPosts },
	};
}
