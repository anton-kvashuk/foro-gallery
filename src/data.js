const getData = () => {
  let data = [
    {
      src: `https://source.unsplash.com/random/500x500?sig=${Math.floor(
        Math.random() * 999
      )}`,
      height: 500,
      author: "Awesome"
    },
    {
      src: `https://source.unsplash.com/random/500x400?sig=${Math.floor(
        Math.random() * 999
      )}`,
      height: 400,
      author: "Awesome"
    },
    {
      src: `https://source.unsplash.com/random/500x700?sig=${Math.floor(
        Math.random() * 999
      )}`,
      height: 700,
      author: "Awesome"
    },
    {
      src: `https://source.unsplash.com/random/500x250?sig=${Math.floor(
        Math.random() * 999
      )}`,
      height: 250,
      author: "Awesome"
    },
    {
      src: `https://source.unsplash.com/random/500x800?sig=${Math.floor(
        Math.random() * 999
      )}`,
      height: 800,
      author: "Awesome"
    },
    {
      src: `https://source.unsplash.com/random/500x500?sig=${Math.floor(
        Math.random() * 999
      )}`,
      height: 500,
      author: "Awesome"
    },
    {
      src: `https://source.unsplash.com/random/500x400?sig=${Math.floor(
        Math.random() * 999
      )}`,
      height: 400,
      author: "Awesome"
    },
    {
      src: `https://source.unsplash.com/random/500x700?sig=${Math.floor(
        Math.random() * 999
      )}`,
      height: 700,
      author: "Awesome"
    },
    {
      src: `https://source.unsplash.com/random/500x250?sig=${Math.floor(
        Math.random() * 999
      )}`,
      height: 250,
      author: "Awesome"
    },
    {
      src: `https://source.unsplash.com/random/500x800?sig=${Math.floor(
        Math.random() * 999
      )}`,
      height: 800,
      author: "Awesome"
    },
    {
      src: `https://source.unsplash.com/random/500x400?sig=${Math.floor(
        Math.random() * 999
      )}`,
      height: 400,
      author: "Awesome"
    },
    {
      src: `https://source.unsplash.com/random/500x700?sig=${Math.floor(
        Math.random() * 999
      )}`,
      height: 700,
      author: "Awesome"
    },
    {
      src: `https://source.unsplash.com/random/500x250?sig=${Math.floor(
        Math.random() * 999
      )}`,
      height: 250,
      author: "Awesome"
    },
    {
      src: `https://source.unsplash.com/random/500x800?sig=${Math.floor(
        Math.random() * 999
      )}`,
      height: 800,
      author: "Awesome"
    }
  ];
  return data;
};

export const _getData = async (page = 1, limit = 10) => {
  const response = await fetch(
    `https://picsum.photos/v2/list?page=${page}&limit=${limit}`
  );

  const arr = await response.json();
  return arr;
};

export default getData;
