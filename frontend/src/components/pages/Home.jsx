import { useState, useEffect, useMemo } from "react";
import Drawer from "../ui_components/drawer/Drawer";
import ProductCard from "../ui_components/ProductCard";
import AxiosInstance from "../Axios";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [categoryFilters, setCategoryFilters] = useState({});

  const getData = () => {
    AxiosInstance.get(`product/`).then((res) => {
      const fetchedProducts = res.data;
      setProducts(fetchedProducts);
      const categories = Array.from(
        new Set(fetchedProducts.map((product) => product.category)),
      );
      const initFilters = {};
      categories.forEach((cat) => {
        initFilters[cat] = true;
      });
      setCategoryFilters(initFilters);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  // Update category filter state when a checkbox is toggled
  const handleCategoryChange = (category) => {
    setCategoryFilters((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory = categoryFilters[product.category];
      const matchesSearch = product.title
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, categoryFilters, searchQuery]);

  const allCategories = Object.keys(categoryFilters);

  const filterProps = {
    categories: allCategories,
    categoryFilters,
    onCategoryChange: handleCategoryChange,
    searchQuery,
    onSearchChange: (e) => setSearchQuery(e.target.value),
  };

  return (
    <Drawer
      filterProps={filterProps}
      content={
        <div className="flex flex-row flex-wrap items-center justify-center gap-8 p-4 h-full w-full">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.web_identifier}
              title={product.title}
              description={product.description}
              image={product.image}
              price={product.price}
              category={product.category}
            />
          ))}
        </div>
      }
    />
  );
};

export default Home;
