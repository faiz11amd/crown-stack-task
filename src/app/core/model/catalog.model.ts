export class Subcategory {
    name: string;
    image: string;
}

export class Category {
    name: string;
    image: string;
    subcategories: Subcategory[];
}

export class Branch {
    branch_id: string;
    name: string;
    categories: Category[];
}

export class Location {
    dealers_id: string;
    opco: string;
    name: string;
    branches: Branch[];
}

export class Data {
    locations: Location[];
}

export class CatalogDataModel {
    status: string;
    data: Data;
}