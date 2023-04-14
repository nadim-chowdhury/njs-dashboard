const Header = () => {
  return (
    <div className="flex justify-between p-6">
      <h2 className="text-xl font-bold">Dashboard</h2>
      <div>
        <h3>Welcome Back, Nadim Chowdhury </h3>
        <p className="text-end">{new Date().toDateString()}</p>
      </div>
    </div>
  );
};

export default Header;
