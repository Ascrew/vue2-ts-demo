export interface TreeNode {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  children?: TreeNode[];
  isExpanded?: boolean;
}
