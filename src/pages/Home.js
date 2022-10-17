import React from 'react'
import {Home as Container} from '../Components/Home/Home'
import { PageAnimation } from './PageAnimation'

export const Home = () => {
  return (
	<PageAnimation>
		<Container/>
	</PageAnimation>
  )
}
