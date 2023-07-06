interface PageLayoutProps {
  renderHeader?: () => React.ReactElement;
  footer?: React.ReactElement;
  children: React.ReactNode;
}

const PageLayout = ({ renderHeader, children, footer }: PageLayoutProps) => {
  return (
    <div>
      {renderHeader && renderHeader()}
      {children}
      {footer && footer}
    </div>
  );
};

export default PageLayout;
