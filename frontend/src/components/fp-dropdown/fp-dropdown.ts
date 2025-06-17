import type { ProductQuery } from "@/api/productService.ts";

export type TMenuItemMap = {
    id: number,
    sortOrder: NonNullable<ProductQuery["sortOrder"]>,
};

export type TFpDropdownMap = {
    menuTitle: string,
    menuItemList: TMenuItemMap[],
    textColor?: string,
    disabled?: boolean,
};
  