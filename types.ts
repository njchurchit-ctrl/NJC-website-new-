
export interface NavItem {
  label: string;
  href: string;
}

export interface Belief {
  title: string;
  description: string;
  icon: string;
}

export interface Ministry {
  title: string;
  description: string;
  image: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
