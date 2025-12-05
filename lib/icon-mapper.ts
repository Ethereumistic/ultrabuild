import * as LucideIcons from 'lucide-react'
import { LucideIcon } from 'lucide-react'

export function getLucideIcon(iconName: string): LucideIcon {
    // Try to get the icon from Lucide
    const Icon = (LucideIcons as any)[iconName]

    // If the icon exists, return it; otherwise return HelpCircle as fallback
    return Icon || LucideIcons.HelpCircle
}
