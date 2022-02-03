import styles from '../styles/Home.module.css'

export default function User({data}:any){
    return (
        <>
       <a href={"https://github.com/"+data.login}>
            <figure className={styles.card}>
              <div className={styles.image}>
                
                <img src={data.avatarUrl} alt="profile-img"/>
              </div>
              <figcaption>
                <div className={styles.star}>&#9733;</div>
                <h3>{data.name}</h3>
                <p>{data.login}</p>
              </figcaption>
            </figure>
          </a>
        </>
    )
}