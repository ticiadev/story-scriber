const Title = ({ title }) => {
  return (
    <div className="flex-1 px-2 mx-2">
      <h2 className="prose md:prose-lg lg:prose-xl">{title}</h2>
    </div>
  );
};

export default Title;
