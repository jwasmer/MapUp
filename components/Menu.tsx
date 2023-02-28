import { PropsWithChildren } from "react";

export default function Menu(props: PropsWithChildren) {
  return (
    <menu>
      {props.children}
    </menu>
  )
}