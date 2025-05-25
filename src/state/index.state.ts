export interface HomeInitialState {
  selectedColorScheme: "light" | "dark";
  selectedCategory: string ;
  selectedPage: string;
}

export const initialState: HomeInitialState = {
  selectedColorScheme: "dark",
  selectedCategory: "all",
  selectedPage: ""
};
