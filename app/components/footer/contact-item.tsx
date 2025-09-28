interface ContactItemProps {
  icon: React.ElementType;
  children: React.ReactNode;
}

function ContactItem({ icon: Icon, children }: ContactItemProps) {
  return (
    <div className="flex items-center gap-8 text-xl sm:text-lg xl:text-xl">
      <Icon className="size-8 shrink-0" />
      <div>{children}</div>
    </div>
  );
}

export { ContactItem };
