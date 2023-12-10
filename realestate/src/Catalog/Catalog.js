import { CatalogItem } from "./CatalogItem/CatalogItem"

export const Catalog = () => {
    return (
    <>
        <h1>Pet Catalog</h1>
        <div>
            <CatalogItem />
            <CatalogItem />
            <CatalogItem />
        </div>

    </>
    );
}