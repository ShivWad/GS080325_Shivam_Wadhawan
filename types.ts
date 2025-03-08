export type PageNames =
    "Store" |
    "Sku" |
    "Planning" |
    "Charts";



export type CustomButtonParams = {
    text: PageNames,
    icon: React.JSX.Element,
    selected?: boolean
};


export interface InitialState {
    selectedPage: PageNames
}