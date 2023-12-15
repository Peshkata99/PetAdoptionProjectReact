import { CatalogItem } from "../CatalogItem/CatalogItem"

export const MyCatalog = ({
    pets
}) => {
    return (
    <>
        <h1>My Pet Catalog</h1>
        <div>
            {pets.map(p => <CatalogItem key={p._id} {...p} />)}
            {pets?.length === 0 && (<p>You have no pets up for adoption</p>)}
        </div>

    </>
    );
}