import styles from './style.module.css'

const DocsIdPage =  ({params}) => {
    console.log(params)
    return (
        <h1 className={`${styles.title} ${styles.another}`}>This is docs with ID {params.id}</h1>
    )
}

export default DocsIdPage;