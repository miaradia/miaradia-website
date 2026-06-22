export type TeamCategory = 'Management' | 'Technical' | 'Field' | 'Support';
export type TeamStatus = 'active' | 'former' | 'available';

export type TeamMemberMeta = {
  id: string;
  name: string;
  category: TeamCategory;
  status: TeamStatus;
};

export const teamMeta: TeamMemberMeta[] = [
  {
    id: 'charles',
    name: 'RAKOTONIRINA Charles Gilbert',
    category: 'Management',
    status: 'available',
  },
  {
    id: 'michel',
    name: 'RANDRIAMBOLOLONA Michel',
    category: 'Management',
    status: 'available',
  },
  {
    id: 'christine',
    name: 'RAZAFINIRINA Christine',
    category: 'Support',
    status: 'former',
  },
  {
    id: 'louis',
    name: 'RAFIAFLIANA Louis Parfait',
    category: 'Technical',
    status: 'active',
  },
];
