import BackdropMap from "./BackdropMap";

export default function Layout({ children }: { children: React.ReactNode}) {
  return (
    <>
      <BackdropMap />
      {children}
    </>
  )
}