import {portfolioData} from '../../data/portfolioData'
import PortfolioItem from './PortfolioItem'

import './Portfolio.css'
import SectionTitle from '../sectionTitle/SectionTitle'

const Portfolio = () => {

	return (
			<section className="portfolio section" id="portfolio">
				<div className="container flex-center">
					<SectionTitle title="Portfolio" subtitle="Portfolio" />
					<div className="portfolio-wrapper">	
						{portfolioData.map((item) => (
							<PortfolioItem 
							key={item.id} 
							item={item} 
							/>
						))}				
					</div>
				</div>
			</section>
	)
}

export default Portfolio