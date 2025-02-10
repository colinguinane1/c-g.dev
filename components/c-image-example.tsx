import CImage from "./c-image";

const ImageExample = () => {
  return (
    <CImage
      hide
      dropdown
      width={300}
      height={300}
      delay={2000}
      src="/example.jpg"
    >
      Example
    </CImage>
  );
};

export default ImageExample;
