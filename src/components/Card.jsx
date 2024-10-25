const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-lg p-2 shadow-md shadow-slate-400 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
