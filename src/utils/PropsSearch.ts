interface PropsSearch {
  searchQuery: string;
  selectedCategory: string | null;
  categories: { slug: string; name: string; url: string }[];
  handleSearch: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleCategoryChange: (category: string) => void;
}

export default PropsSearch;
