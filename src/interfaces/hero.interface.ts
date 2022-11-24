export interface Hero {
  allContentfulHero: {
    nodes: Node[];
  };
}

interface Node {
  button: {
    link: string;
    title: string;
  };
  description: string;
  id: string;
  image1: {
    url: string;
    description: string;
  };
  image2: {
    url: string;
    description: string;
  };
  title: string;
}
