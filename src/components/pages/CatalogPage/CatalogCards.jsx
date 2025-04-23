import { catalog } from "../../../datas/data.js";
import CatalogCards2 from "./CatalogCards2.jsx";

function CatalogCards({ selectedCategory, basket, setBasket }) {
  const filteredDatas = catalog.filter((data) => {
    if (selectedCategory == 0) {
      return true;
    } else {
      return data.categoryId == selectedCategory;
    }
  });

  return (
    <>
      {filteredDatas.map((data) => {
        return (
          <CatalogCards2
            key={data.id}
            data={data}
            basket={basket}
            setBasket={setBasket}
          />
        );
      })}
    </>
  );
}

export default CatalogCards;
