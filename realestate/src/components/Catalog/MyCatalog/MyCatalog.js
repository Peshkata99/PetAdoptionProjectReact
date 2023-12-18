import { CatalogItem } from "../CatalogItem/CatalogItem"
import styles from "../Catalog.module.css"

export const MyCatalog = ({
    pets
}) => {
    return (
    <>
        <h1 className={styles.title}>My Pet Catalog</h1>
        {pets?.length === 0 && (<h3 className={styles.title}>You have no pets up for adoption</h3>)}
        <div className={styles.catalogDiv}>
            {pets.map(p => <CatalogItem key={p._id} {...p} />)}
            
        </div>

    </>
    );
}