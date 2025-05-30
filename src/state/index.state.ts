export interface HomeInitialState {
  selectedColorScheme: "light" | "dark";
  selectedCategory: string ;
  selectedSubCategory: string;
}

export const initialState: HomeInitialState = {
  selectedColorScheme: "dark",
  selectedCategory: "all",
  selectedSubCategory: ""
};
