export interface Client {
  _id: string;
  name: string;
  image_src: string;
  enterprises: any[];
}

export interface ClientTotal {
  totalClients: string;
  totalEnterprises: string;
  totalRealties: string;
}

export interface ClientById {
  _id: string;
  name: string;
  image_src: string;
}

export interface ClientTotalsById {
  totalEnterprises: number;
  totalRealties: number;
}

export interface ClientEnterprisesById {
  _id: string;
  name: string;
  image_src: string;
}
