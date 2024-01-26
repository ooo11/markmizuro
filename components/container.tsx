type Props = {
  children?: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <div className="text-4xl mb-2 pb-8 flex justify-between items-baseline ">{children}</div>;
};

export default Container;
