import { catalogCategories } from "../../../datas/data.js"

function CatalogButtons({ selectedCategory, setSelectedCategory }) {
    return (
        <>
            {
                catalogCategories.map((catalogCategory) => {
                    return (
                        <button
                            key={catalogCategory.category}
                            className={`text-[18px] font-[500] ${selectedCategory == catalogCategory.id ? "text-[#3A8F34]":"text-[#4B4B4B]"}`}
                            onClick={() => {
                                setSelectedCategory(catalogCategory.id)
                            }}
                        >
                            {catalogCategory.category}
                        </button>
                    )
                })
            }
        </>
    )
}

export default CatalogButtons