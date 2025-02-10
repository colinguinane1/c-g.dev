import CImage from "./c-image";

const ImageExample = () => {
  return (
    <CImage loadingIndicator dropdown width={300} height={300} delay={2000} src="/example.jpg" />
  );
};

export default ImageExample;
