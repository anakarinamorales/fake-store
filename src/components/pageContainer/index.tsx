import { Main } from "./pageContainer.styled";

export default function PageContainer({ children }: { children: React.ReactNode }): React.ReactNode {
    return <Main>{children}</Main>
}