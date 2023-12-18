import { CatalogItem } from "./CatalogItem/CatalogItem"
import styles from './Catalog.module.css'

export const Catalog = ({
    pets
}) => {
    return (
    <>
        <h1 className={styles.title}>Pet Catalog</h1>
        {pets?.length === 0 && (<h3 className={styles.title}>There are no pets available yet.</h3>)}
        <div className={styles.catalogDiv}>
            {pets.map(p => <CatalogItem key={p._id} {...p} />)}           
        </div>

    </>
    );
}