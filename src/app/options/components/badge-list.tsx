import type { FC } from 'react'
import { Button } from '@/components/ui/button'
import { GitHubLogoIcon } from '@radix-ui/react-icons'
import Link from '@/components/link'

const BadgeList: FC = () => {
  return (
    <div className="fixed inset-x-1 bottom-4 mx-auto flex w-fit">
      <Button asChild size="lg" variant="ghost" className="rounded-full px-3 text-xl font-semibold text-primary">
        <Link href="https://github.com/SapienXai/GhostChat">
          <GitHubLogoIcon className="mr-1 size-6"></GitHubLogoIcon>
          Github
        </Link>
      </Button>
    </div>
  )
}

BadgeList.displayName = 'BadgeList'

export default BadgeList
