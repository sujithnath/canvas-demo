// Fake response
export const fetchImageResponse = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const images = [
        {
          url: "/images/set-1/opg_demo_02.jpg",
          id: 1,
          visible: true,
          title: "Main Image",
        },
      ];

      for (let i = 1; i < 100; i++) {
        images.push({
          url: `/images/set-1/layer0${(i % 3) + 1}.png`,
          id: i + 1,
          visible: i % 5 !== 0,
          title: `Layer ${i}`,
        });
      }

      resolve(images);
    }, 0);
  });
};
