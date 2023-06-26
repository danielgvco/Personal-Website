"use client"

import { FC } from 'react'
import { Button } from './ui/button'
import { Copy } from 'lucide-react'
import { useToast } from './ui/use-toast'

interface CopyToClipboardProps {
    text: string
}

const CopyToClipboard: FC<CopyToClipboardProps> = ({ text }) => {
  const { toast } = useToast()

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(text)
      toast({
        description: "Copied to clipboard!",
      })
    } catch (err) {
      toast({
        description: "Failed to copy to clipboard!",
      })
    }
  }

  return (
    <Button onClick={copyToClipboard} variant="ghost">
      <Copy />
    </Button>
  )
}

export default CopyToClipboard