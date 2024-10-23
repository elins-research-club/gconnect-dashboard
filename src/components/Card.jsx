const Card = ({ children, className }) => {
  return (
    <div className={`bg-white rounded-2xl shadow-lg p-3 shadow-md shadow-slate-400 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
