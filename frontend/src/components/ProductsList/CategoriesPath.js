import "../../styles/categoriesPath.scss";

export const CategoriesPath = ({ categories }) => {
  return (
    <ul>
      {categories?.length > 0 &&
        categories.map((category, index) => {
          return <li key={category + index}>{category}</li>;
        })}
    </ul>
  );
};
