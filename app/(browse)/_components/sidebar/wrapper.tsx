interface WrapperProps {
  children: React.ReactNode;
}

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <aside className="fixed left-0 flex flex-col w-60 h-full bg-secondary border-r border-[#2D2E35]">
      {children}
    </aside>
  );
};
