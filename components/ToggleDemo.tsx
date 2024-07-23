import { Bold } from "lucide-react"

import { Toggle } from "@/components/ui/toggle"

export function ToggleDemo() {
  return (
    <Toggle aria-label="Toggle bold">
      <Bold className="size-4" />
    </Toggle>
  )
}
