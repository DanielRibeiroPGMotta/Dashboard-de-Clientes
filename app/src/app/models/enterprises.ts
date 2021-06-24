export interface Enterprise {
  _id: string;
  name: string;
  image_src: string;
//  enterprises: [];
  totalRealties: string;
}

export interface EnterpriseTotal {
  totalClients: string;
  totalEnterprises: string;
  totalRealties: string;
}

export interface EnterpriseById { 
  _id: string;
  name: string;
  image_src: string;
  totalRealties: string;
}

export interface EnterpriseTotalsById {
  totalEnterprises: string;
  totalRealties: number;
}

export interface EnterprisesByCompany {
  _id: string;
  name: string;
  image_src: string;
}