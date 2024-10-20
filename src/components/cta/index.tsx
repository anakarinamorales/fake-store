import { CustomLink } from "./cta.styled";

export default function CTA({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}): React.ReactNode {
  return (
    <CustomLink href={href} passHref>
      {children}
    </CustomLink>
  );
}
