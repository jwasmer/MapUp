import { ColorProps } from "@/utils/interface"

export default function ExpandDownIcon({ color }: ColorProps) {
  console.log(color)

  return (
    <span className="material-symbols-outlined" style={{color}}>
      expand_more
    </span>
  )
}

