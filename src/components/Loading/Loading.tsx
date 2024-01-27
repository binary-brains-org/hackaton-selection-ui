import Lottie from "react-lottie";
import data from "./golden-card.ts";

const Loading = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="full-view flex-all-center">
      <div className="flex-all-center flex-col">
        <Lottie options={defaultOptions} height={400} width={400} />
        <span className="text-3xl">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
