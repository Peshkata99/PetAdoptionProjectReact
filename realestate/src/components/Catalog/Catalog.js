import { CatalogItem } from "./CatalogItem/CatalogItem"

export const Catalog = ({
    pets
}) => {
    return (
    <>
        <h1>Pet Catalog</h1>
        <div>
            {pets.map(p => <CatalogItem key={p._id} {...p} />)}
            {pets?.length === 0 && (<p>There are no pets available yet.</p>)}
        </div>

    </>
    );
}