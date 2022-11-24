export interface Intro {
  allContentfulIntro: {
    nodes: Node[];
  };
}

interface Node {
  id: string;
  title: string;
  items: {
    id: string;
    title: string;
    description: string;
  }[];
}
