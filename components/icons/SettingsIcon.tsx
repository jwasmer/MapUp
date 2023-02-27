import { ColorProps } from "@/utils/interface"

export default function SettingsIcon({ color }: ColorProps) {
  console.log(color)

  return (
    <span className={"material-symbols-outlined"} style={{color}}>
      settings
    </span>
  )
}