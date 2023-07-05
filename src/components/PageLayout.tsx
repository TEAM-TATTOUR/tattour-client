const PageLayout = ({
  renderHeader,
  children,
}: {
  renderHeader?: () => React.ReactElement;
  children: React.ReactNode;
}) => {
  return (
    <div>
      {renderHeader && renderHeader()}
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default PageLayout;
