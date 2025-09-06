import Image from 'next/image'
import { cn } from '@/lib/utils'

export const Logo = ({ className }: { className?: string }) => {
  return (
    <Image
      src="/logo.png" // chemin relatif depuis le dossier public
      alt="Logo"
      width={50} // largeur souhaitée
      height={10} // hauteur souhaitée
      className={cn('object-contain', className)}
    />
  )
}
