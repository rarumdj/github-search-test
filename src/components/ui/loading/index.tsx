import { ThreeDots } from "react-loader-spinner";

const Loading = () => {
  return (
    <div
      data-testid="loading"
      role="status"
      aria-live="polite"
      className="flex flex-col items-center justify-center  min-h-[20vh]">
      <p className="text-sm">Please wait...</p>
      <ThreeDots height={20} aria-label="Loading animation" />
    </div>
  );
};
export default Loading;
