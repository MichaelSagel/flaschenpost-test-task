import type { TProductQuery } from "@/api/productService.ts";

export type TMenuItemMap = {
    id: number,
    sortOrder: NonNullable<TProductQuery["sortOrder"]>,
};

export type TFpDropdownMap = {
    menuTitle: string,
    menuItemList: TMenuItemMap[],
    textColor?: string,
    disabled?: boolean,
    activeSortOrder: TProductQuery["sortOrder"],
};
  