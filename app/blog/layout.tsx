import NavBar from "../../component/navbar";

export default function BlogLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
        <>       
            
            <NavBar></NavBar>       
            <div>{children}</div>
        </>
    );
  }