// PropsSearch.ts
interface PropsSearch {
  searchQuery: string;
  selectedCategory: string | null;
  categories: string[];
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCategoryChange: (category: string) => void;
}

export default PropsSearch;
