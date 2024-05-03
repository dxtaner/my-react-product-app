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
        <option value="">All Categories</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SearchFilter;
