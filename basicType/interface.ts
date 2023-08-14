enum Role {
  ADMIN = "ADMIN",
  USERS = "USER",
}
enum Size {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
}
export interface people {
  size: Size;
  role: Role;
  name: string | number; // union type
  age: number;
  job: string;
  sdt: {
    sdt1: number;
    sdt2: number;
    sdt3: number;
  };
}

export interface userAdmin extends people {
  description: string;
}
