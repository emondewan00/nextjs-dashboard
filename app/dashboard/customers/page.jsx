import React from 'react';

const page = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return <div>hello coustomers</div>;
};

export default page;
