import styles from '../styles/news.module.css';

export const News = ({ articles }) => {
    console.log({ articles })
    if (articles.length === 0) {
        return  <body className={styles.bodyNoNews}>
            <div className={styles.container}>
            <div className={styles.noNews}>
            <h1 className={styles.headers}>No Breaking News!</h1>
            </div>
        <div>
            <h3 className={styles}>Check out <a className={styles.newsLink} href="https://www.yalnews.com" target="_blank">North Mississippi Herald</a> for local news</h3>
        
            </div>
            </div>
        </body>
    }
    else{
        return <body className={styles.body}>
            <div className={styles.main}>
                {articles.map((article, index) => (
                    <div key={index} className={styles.post}>
                        <h1 className={styles.postH1} onClick={() => (window.location.href = article.url)}>{article.title}</h1>
                        <p className={styles.postP}>{article.description}</p>
                        {!!article.urlToImage && <img src={article.urlToImage} />}
                    </div>
                ))}
            </div>
            </body>
    }
}


export const getServerSideProps = async pageContext => {
    
    const apiResponse = await fetch(
        `https://newsapi.org/v2/everything?q=Yalobusha County `,
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