const Rating = (props) => {
  const { children } = props;
  const fullStarCount = Math.round(Number(children));
  const emptyStarCount = 5 - fullStarCount;

  return (
    <div className="Rating">
      {'★'.repeat(fullStarCount) + '☆'.repeat(emptyStarCount)}
    </div>
  );
};

export default Rating;
