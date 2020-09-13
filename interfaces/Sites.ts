export type ISites = {
  icon: string;
  name: string;
  sub: ({
    name: string;
    icon?: string;
    child: ({
      name: string;
      icon?: string;
      desc: string;
      url: string;
      more?: {
        name: string;
        url: string;
      };
    })[];
  })[];
}[]
