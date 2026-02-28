export interface Service {
  id: string;
  name: string;
  price: number;
}

export interface FormState {
  name: string;
  price: string;
  editingId: string | null;
  errors: {
    name?: string;
    price?: string;
  };
}

export interface FilterState {
  searchTerm: string;
}

export type RootState = {
  services: {
    items: Service[];
  };
  form: FormState;
  filter: FilterState;
};
