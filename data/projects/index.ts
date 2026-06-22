export type ProjectCategory =
  | 'Governance'
  | 'Conservation'
  | 'Development'
  | 'Health';

export type ProjectMeta = {
  id: string;
  year: string;
  contracts: string[];
  client: string;
  locations?: string[];
  amount?: number;
  category: ProjectCategory;
  highlight?: boolean;
};

export const projectsMeta: ProjectMeta[] = [
  {
    id: 'pcd-2002',
    year: '2002-2005',
    contracts: ['FID IV / ERP-PCD'],
    client: 'FID DIR FIANARANTSOA',
    locations: ['Fianarantsoa'],
    amount: 52000000,
    category: 'Development',
  },
  {
    id: 'pcd-2003',
    year: '2003-2006',
    contracts: [
      '11-03/39-04/57-02/73-03/MAEL/PSDR/DPEP-3',
      'Contrat complémentaire PSDR',
    ],
    client: 'PSDR UPEP FIANARANTSOA',
    locations: ['Fianarantsoa', 'Mananjary', 'Ambositra'],
    amount: 63270000,
    category: 'Development',
  },
  {
    id: 'transfer-2006',
    year: '2006-2007',
    contracts: ['PO-023-05-AIF-FIA'],
    client: 'ERI / USAID',
    locations: ['Lalangina', 'Ambohimahasoa'],
    amount: 15000000,
    category: 'Conservation',
  },
  {
    id: 'org-2008',
    year: '2008',
    contracts: ['03/08/MAEP/PSDR/UIREP-3'],
    client: 'PSDR UPEP',
    locations: ['Sud-Est'],
    amount: 20520000,
    category: 'Development',
  },
  {
    id: 'pact-feasibility-2010',
    year: '2010',
    contracts: ['58681'],
    client: 'Conservation International',
    locations: ['Ikongo'],
    amount: 11900000,
    category: 'Conservation',
  },
  {
    id: 'pact-impl-2011',
    year: '2011',
    contracts: ['60400'],
    client: 'Conservation International',
    locations: ['Ikongo'],
    amount: 41590000,
    category: 'Conservation',
  },
  {
    id: 'gef-2011',
    year: '2011-2012',
    contracts: ['GEF / PNUD PE3'],
    client: 'UNDP / GEF',
    locations: ['Toliara', 'Mikea'],
    amount: 27350000,
    category: 'Conservation',
  },
  {
    id: 'nutrition-2013',
    year: '2013-2017',
    contracts: ['018C/13/PAUSENS/U-PNNC'],
    client: 'ORN Haute Matsiatra',
    locations: ['Vohibato'],
    amount: 155530000,
    category: 'Health',
  },
  {
    id: 'health-2018',
    year: '2018',
    contracts: ['015/18/ONN/PARN'],
    client: 'ORN Haute Matsiatra',
    locations: ['Vohibato'],
    amount: 85000000,
    category: 'Health',
  },
  {
    id: 'pcd-2018',
    year: '2018-2019',
    contracts: ['109/PAGE-GIZ/2018'],
    client: 'PAGE-GIZ Atsimo Andrefana',
    locations: ['Morombe', 'Sakaraha'],
    amount: 6940000,
    category: 'Development',
  },
  {
    id: 'sage-2020',
    year: '2020',
    contracts: ['01a120U006'],
    client: 'FID Atsimo Andrefana',
    locations: ['Ankazoabo Sud'],
    amount: 107425000,
    category: 'Governance',
  },
  {
    id: 'cofav-2026',
    year: '2026',
    contracts: ['Conservation Allies Grant - COFAV'],
    client: 'Conservation Allies',
    locations: ['COFAV Corridor'],
    amount: 140000000,
    category: 'Conservation',
    highlight: true,
  },
];
