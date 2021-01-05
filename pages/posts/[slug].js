// import { useRouter } from 'next/router';
// import sanityClient from '../../client';

// const Post = ({ posts }) => {
//     const router = useRouter();

//     return (
//         <div>
//             <h1>{posts}</h1>
//         </div>
//     )
// }

// export async function getStaticProps({ params }) {
//     const posts = await sanityClient.fetch(`*[_type == 'post' && slug.current == $slug]`, {
//         slug: params.slug
//     });

//     return {
//         props: {
//             posts: posts.title
//         }
//     }
// }

// export async function getStaticPaths() {
//     const paths = await sanityClient.fetch(`*[_type == 'post']{'slug': slug.current}`);

//     return {
//         paths: paths?.map(post => ({
//             params: {
//                 slug: post.slug
//             }
//         })),
//         fallback: false
//     }
// }

// export default Post;