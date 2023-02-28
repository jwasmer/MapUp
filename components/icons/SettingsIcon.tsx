import { ColorProps } from "@/utils/interface"

export default function SettingsIcon({ color }: ColorProps) {

  return (
    <span className={"material-symbols-outlined"} style={{color}}>
      settings
    </span>
  )
}