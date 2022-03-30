declare module '*.svg' {
  import React = require('react');
  export const ReactComponent: React.SFC<React.SVGProps<SVGSVGElement>>;
  const src: string;
  export default src;
}
declare module '*.jpg' {
  const content: string;
  export default content;
}

declare module '*.png' {
  const content: string;
  export default content;
}

declare module '*.json' {
  const content: string;
  export default content;
}
declare module '*.module.scss' {
  const content: {
    [key in string]: string;
  };
  export default content;
}

type TPost = {
  author: TUser;
  content: string;
  replied: number;
  retwitted: number;
  liked: number;
  timestamp: number;
};

type TUser = {
  name: string;
  username: string;
  image: string;
};
