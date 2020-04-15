// Fake response
export const fetchImageResponse = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          url: '/images/set-1/opg_demo_02.jpg',
          id: 1,
          visible: true,
          title: 'Main Image',
        },
        {
          url: '/images/set-1/layer01.png',
          id: 2,
          visible: true,
          title: 'Layer 1',
        },
        {
          url: '/images/set-1/layer02.png',
          id: 3,
          visible: false,
          title: 'Layer 2',
        },
        {
          url: '/images/set-1/layer03.png',
          id: 4,
          visible: true,
          title: 'Layer 3',
        },
      ]);
    }, 0);
  });
};
