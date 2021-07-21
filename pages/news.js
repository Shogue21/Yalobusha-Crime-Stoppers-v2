import styles from '../styles/feed.module.css';

export const News = ({ articles }) => {
    console.log({ articles })
    return (
            <div className={styles.main}>
                {articles.map((article, index) => (
                    <div key={index} className={styles.post}>
                        <h1 onClick={() => (window.location.href = article.url)}>{article.title}</h1>
                        <p>{article.description}</p>
                        {!!article.urlToImage && <img src={article.urlToImage} />}
                    </div>
                ))}
            </div>
            
 

    )
}


export const getServerSideProps = async pageContext => {
    
    const apiResponse = await fetch(
        `https://newsapi.org/v2/everything?q=Yalobusha County`,
        {
            headers: {
                Authorization: `${process.env.NEXT_PUBLIC_NEWS_KEY}`,
            },
        },
    );
      
    const json = await apiResponse.json();
    const { articles } = json;
        return {
            props: {
                articles,
            },
        };
};

export default News;