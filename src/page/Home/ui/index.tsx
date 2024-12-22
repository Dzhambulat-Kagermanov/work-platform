import { FC } from 'react'
import { TClassName } from '@/shared/types'
import { cn } from '@/shared/lib'
import { HomePromo } from '@/widgets/HomePromo'
import cls from './index.module.scss'
import { HomeProducts } from '@/widgets/HomeProducts'

interface Props extends TClassName {}
const HomePage: FC<Props> = ({ className }) => {
	return (
		<main className={cn(cls.home, [className])}>
			<HomePromo className={cn('modules-gap-top', ['modules-gap-bottom'])} />
			<HomeProducts className={cn('modules-gap-bottom')} />
		</main>
	)
}

export { HomePage }
