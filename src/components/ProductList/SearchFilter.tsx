// SearchFilter.tsx
import React from "react";
import PropsSearch from "../../utils/PropsSearch";

const SearchFilter: React.FC<PropsSearch> = ({
  searchQuery,
  selectedCategory,
  categories,
  handleSearch,
  handleCategoryChange,
}) => {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
      />
      <select
        value={selectedCategory || ""}
        onChange={(e) => handleCategoryChange(e.target.value)}>
        <option key="" value="">
          All Categories
        </option>
        {categories.map((category) => (
          <option key={category.slug} value={category.slug}>
            {category.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;
